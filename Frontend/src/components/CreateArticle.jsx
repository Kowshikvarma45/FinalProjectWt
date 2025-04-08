import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import { useRecoilState } from "recoil"
import { AllArticlesAtom, CdivrefAtom } from "../store/atoms/states"
import { Nav } from "./Nav"


export function CreateArticle() {
    const Navigate = useNavigate()
    const titleref = useRef()
    const desref = useRef()
    const Markref = useRef()
    const divref = useRef()
    const [all,setall] = useRecoilState(AllArticlesAtom)
    const [divtext,setDivtext] = useRecoilState(CdivrefAtom)

    function oncliked() {
        setDivtext("")
        const title = titleref.current.value
        const description = desref.current.value
        const details = Markref.current.value
        if( title === "" || description === "" || details === "") {
            alert("enter something in the inputs to save to db")
            return
        }
        setall([...all,{
            title:title,
            description:description
        }])
        fetch("https://finalprojectwt.onrender.com/NewArticle",{
            method:"post",
            body:JSON.stringify({
                title:title,
                description:description,
                details:details
            }),
            headers:{
                "content-type":"application/json"
            }
        }).then(async(val)=>{
            const res = await val.json()
            alert(res.msg)
            setTimeout(()=>{
                setDivtext(res.msg)
            },1000)
        })

    }
    return   (
            <div className="container">
            <Nav></Nav>
            <h1>Create Article</h1>
            <h2>Title of the Article :</h2>
            <textarea ref={titleref} placeholder="Title" cols="50" rows="1"></textarea>
            <h2>Description of the Article :</h2>
            <textarea ref={desref} placeholder="Description" cols="50" rows="1"></textarea>
            <h2>Markdown :</h2>
            <textarea ref={Markref} placeholder="Markdown" cols="50" rows="1"></textarea>
            <div className="button-container">
                <button onClick={oncliked}>Post Article</button>
                <button onClick={() => { Navigate("/") }}>Cancel</button>
            </div>
            <div ref={divref}>{divtext}</div>
        </div>
    )
}