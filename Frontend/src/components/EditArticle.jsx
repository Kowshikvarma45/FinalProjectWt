import { useRecoilValue } from "recoil"
import { EditArticleAtom } from "../store/atoms/states"
import { useNavigate } from "react-router-dom"
import { useRef } from "react"

export function EditArticle() {
    const article = useRecoilValue(EditArticleAtom)
    const Navigate = useNavigate()
    const titleref = useRef()
    const desref = useRef()
    const Markref = useRef()

    function oncliked() {
        const title = titleref.current.value
        const description = desref.current.value
        const details = Markref.current.value
        const id = article._id
        if(title === "" || description === "" || details === "") {
            alert("Fill out all the fields")
            return
        }
        fetch("http://localhost:3003/Edit",{
            method:"put",
            body:JSON.stringify({
                id:id,
                title:title,
                description:description,
                details:details
            }),
            headers:{
                "content-type":"application/json"
            }
        }).then(async(response)=>{
            if(!response.ok) {
                throw new Error("Network response was not ok.")
            }
            const val = await response.json()
            console.log(val.msg)
            alert(val.msg)
        }).catch((error)=>{
            console.error("this error occured : ",error)
        })

    }
    
    return (
        <div className="container">
            <h1>Edit Article</h1>

            <h2>Title: </h2>
            <textarea ref={titleref} defaultValue={article.title} cols="50" rows="1"></textarea>

            <h2>Description: </h2>
            <textarea ref={desref} defaultValue={article.description} cols="50" rows="1"></textarea>

            <h2>Markdown</h2>
            <textarea ref={Markref} defaultValue={article.details} cols="50" rows="1"></textarea> <br />

            <div className="button-container">
                <button onClick={oncliked}>Make Changes</button>
                <button onClick={()=>{
                    Navigate('/')
                }}>cancel</button> <br />
            </div>
        </div>
    )
}