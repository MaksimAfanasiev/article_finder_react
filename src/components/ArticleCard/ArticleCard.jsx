import { Link } from "react-router-dom"

export const ArticleCard = ({ article }) => {
    return (
        <div>
            <img src={article.imageUrl} alt="news logo" width="240" />
            <p>{article.publishedAt}</p>
            <h2>{article.title}</h2>
            <p>{article.summary}</p>
            <Link to={`/${article.id}`}>Read more</Link>
        </div>
    )
}