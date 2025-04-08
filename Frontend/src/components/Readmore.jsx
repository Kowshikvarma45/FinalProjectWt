import { useRecoilValue } from "recoil"
import { ReadmoreAtom } from "../store/atoms/states"
import { useNavigate } from "react-router-dom"
import { Nav } from "./Nav"

export function Readmore () {
    const article = useRecoilValue(ReadmoreAtom)
    const Navigate = useNavigate()

    return (

        <div className="container">
            <h1>{article.title}</h1>
            <h2>{article.description}</h2>
            <h3>{article.details}</h3><br />
            <button  onClick={()=>{
                Navigate('/')
            }}>Go back</button>
        </div>
    )

}