import { useState } from "react"
import axios from "axios";

axios.defaults.baseURL = "https://api.spaceflightnewsapi.net/v3/articles"

export const SearchComponent = ({getArticles}) => {
    const [query, setQuery] = useState("");

    const queryGenerator = (string) => {
        const arr = string.split(" ");
        const queryArr = arr.map(el => {
            const queryString = `title_contains=${el}&summary_contains=${el}`;
            return queryString;
        })

        const queryParams = queryArr.join("&");
        return queryParams
    }

    const onSumbitHandler = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.get(`?${queryGenerator(query)}`)
            console.log(res)
            getArticles(res.data)
        } catch (error) {
            console.log(error.message)
        }

        setQuery("")
    }

    return (
        <form onSubmit={onSumbitHandler}>
            <input name="query" type="text" value={query} onChange = {(e) => {setQuery(e.target.value)}} placeholder="enter key word" />
            <button type="submit">Search icon</button>
        </form>
    )
}