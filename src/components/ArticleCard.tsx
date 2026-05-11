import type {Article} from "../types/article"

interface Props {
    article: Article
}

const ArticleCard = ({article}: Props) => {
    return (
        <div className="card">
            <img loading="lazy"
                src={
                    article.image ||
                    "https://via.placeholder.com/400x200?text=No+Image"
                }
                alt={article.title}
            />

            <div className="content">
                <h2>{article.title}</h2>

                <p>{article.description}</p>

                <small>{article.source.name}</small>
            </div>
        </div>
    )
}

export default ArticleCard