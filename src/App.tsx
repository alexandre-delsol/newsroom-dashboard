import {useEffect, useState} from "react"
import {fetchNews} from "./services/newsService"
import type {Article} from "./types/article"
import ArticleCard from "./components/ArticleCard"

const App = () => {
    const [articles, setArticles] = useState<Article[]>([])
    const [loading, setLoading] = useState(true)

    const [search, setSearch] = useState("")
    const filteredArticles = articles.filter(article =>
        article.title.toLowerCase().includes(search.toLowerCase())
    )

    const [favorites, setFavorites] = useState<string[]>(() => {
        const saved = localStorage.getItem("favorites")
        return saved ? JSON.parse(saved) : []
    })
    const toggleFavorite = (title: string) => {
        setFavorites(prev =>
            prev.includes(title)
                ? prev.filter(fav => fav !== title)
                : [...prev, title]
        )
    }

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites))
    }, [favorites])

    useEffect(() => {
        const loadNews = async () => {
            const data = await fetchNews()
            setArticles(data)
            setLoading(false)
        }

        loadNews()
    }, [])

    if (loading) {
        return (
            <div className="loader-container">
                <div className="loader"></div>
                <p>Chargement des articles...</p>
            </div>
        )
    }

    return (
        <div>
            <h1>Newsroom Dashboard</h1>
            <input
                type="text"
                placeholder="Rechercher un article..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="search-input"
            />
            {filteredArticles.length === 0 ? (
                <p>Aucun article disponible</p>
            ) : (
                filteredArticles.map((article, index) => (
                    <ArticleCard key={index}
                                 article={article}
                                 isFavorite={favorites.includes(article.title)}
                                 onToggleFavorite={toggleFavorite}/>
                ))
            )}
        </div>
    )
}

export default App