/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom"
import { useSetRecoilState } from "recoil"
import { AllArticlesAtom, EditArticleAtom, ReadmoreAtom } from "../store/atoms/states"
import { Nav } from "./Nav"

export function Article({Article}) {
    const Navigate = useNavigate()
    const setEditArticle = useSetRecoilState(EditArticleAtom)
    const setReadmoreArticle = useSetRecoilState(ReadmoreAtom)
    const setall = useSetRecoilState(AllArticlesAtom)
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; 
    const day = currentDate.getDate();

    function editClicked() {
        setEditArticle(Article)
        Navigate("/EditArticle")
    }
    function readMoreClicked() {
        setReadmoreArticle(Article)
        Navigate("/Readmore")
    }
    function deleteClicked() {
        const userprompt = prompt("Are you sure you want to delete? Enter 'yes' to delete")
        if (userprompt !== null) {
            fetch("https://finalprojectwt.onrender.com/delete",{
            method:"put",
            body:JSON.stringify({
                id:Article._id
            }),
            headers:{
                "content-type":"application/json"
            }
        }).then(async(val)=>{
            const res = await val.json()
            alert(res.msg)
            fetch("https://finalprojectwt.onrender.com/AllArticles",{
                method:"get"
            }).then(async(response)=>{
                if(!response.ok) {
                    throw new Error("due Network crisis data not fetched")
                }
                const val = await response.json()
                setall(val)
            })
        })

        }
        else {
            return
        }
    }

    return (
        <div className="container">
            <h1>{Article.title}</h1>
            <h2>{Article.description}</h2>
            <>Posted On : {day}/{month}/{year}</> <br />
            <button onClick={readMoreClicked}>Read more</button>
            <button onClick={editClicked}>Edit</button>
            <button onClick={deleteClicked}>Delete</button>
        </div>
    )
}