import { useRecoilState } from "recoil";
import { AllArticlesAtom } from "../store/atoms/states";
import { useEffect } from "react";
import { Article } from "./Article";

export function AllArticles() {
    const [all, setAll] = useRecoilState(AllArticlesAtom);

    useEffect(() => {
        fetch("http://localhost:3003/AllArticles")
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
            {all.map((val) => (
                <Article key={val._id} Article={val} />
            ))}
        </div>
    );
}
