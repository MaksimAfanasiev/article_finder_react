import {ArticleCard} from "../ArticleCard/ArticleCard"

export const ArticleGallery = ({ articleList }) => {
    return (
        
        articleList.length > 0 && 
            
            <>
            
                <p>Results:{articleList.length}</p>
                <ul>
                    {articleList.map(art =>
                        <li key={art.id}><ArticleCard article={art} /></li>
                    )}
                </ul>
            </>
        
            
        
        
    
    )
}