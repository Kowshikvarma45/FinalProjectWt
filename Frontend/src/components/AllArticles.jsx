import { useRecoilState } from "recoil";
import { AllArticlesAtom } from "../store/atoms/states";
import { useEffect } from "react";
import { Article } from "./Article";
import { Nav } from "./Nav";

export function AllArticles() {
    const [all, setAll] = useRecoilState(AllArticlesAtom);

    useEffect(() => {
        fetch("https://finalprojectwt.onrender.com/AllArticles")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                setAll(data);
            })
            .catch((error) => {
                console.error("Error fetching articles:", error);
                setAll([]);  
            });
    }, [setAll]);

    if (!Array.isArray(all)) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Nav></Nav>
            {all.map((val) => (
                <Article key={val._id} Article={val} />
            ))}
        </div>
    );
}
