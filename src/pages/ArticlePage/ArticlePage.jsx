import { useParams, Link } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";

export const ArticlePage = () => {
    const { id } = useParams();
    const [art, setArt] = useState();

    const getArt = async (num) => {
        try {
            const res = await axios.get(`/${num}`);
            setArt(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getArt(id)
    }, [id])

    return ( 
        art &&
        <>
             <img src={art.imageUrl} alt="news logo" width="240" />
            <h2>{art.title}</h2>
            <p>{art.summary}</p>
            <Link to={"/"}>Back to homepage</Link>
        </>
    )
}