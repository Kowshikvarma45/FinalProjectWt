import { useNavigate } from "react-router-dom"

export function Nav() {
    const Navigate = useNavigate()
    return (
        <div className="navbar">
            <h1>NoteMaker</h1><br />
            <div>
            <button onClick={()=>{
                Navigate('/Aboutus')
            }}>About us</button>
            <button onClick={()=>{
                Navigate("/CreateArticle")
            }}>Create a Article</button>
            </div>
        </div>
    )
}
