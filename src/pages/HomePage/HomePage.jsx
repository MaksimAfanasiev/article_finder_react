import { SearchComponent } from "../../components/SearchComponent/SearchComponent";
import { ArticleGallery } from "../../components/ArticleGallery/ArticleGallery";
import { useState } from "react"

export const HomePage = () => {
    const [articles, setArticles] = useState([]);

    return (
        <>
            <SearchComponent getArticles={setArticles } />
            <ArticleGallery articleList={articles } />
        </>
    )
}