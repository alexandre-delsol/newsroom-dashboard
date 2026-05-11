import {useEffect, useState} from "react"
import {fetchNews} from "./services/newsService"
import type {Article} from "./types/article"
import ArticleCard from "./components/ArticleCard"
import ArticleSkeleton from "./components/ArticleSkeleton"
import {useTheme} from "./contexte/useTheme.ts"
import Navbar from "./components/Nav.tsx"

const App = () => {
    const {darkMode} = useTheme()

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
        document.body.className = darkMode ? "dark" : "light"
    }, [darkMode])

    useEffect(() => {
        const loadNews = async () => {
            const data = await fetchNews()
            setArticles(data)
            setLoading(false)
        }

        loadNews()
    }, [])

    return (
        <div className="app">

            <Navbar
                search={search}
                setSearch={setSearch}
                favoritesCount={favorites.length}
            />

            <div className="container">

                {loading ? (
                    <div className="articles-grid">
                        {Array.from({length: 6}).map((_, i) => (
                            <ArticleSkeleton key={i}/>
                        ))}
                    </div>
                ) : (
                    <div className="articles-grid">
                        {filteredArticles.length === 0 ? (
                            <p>Aucun article disponible</p>
                        ) : (
                            filteredArticles.map((article, index) => (
                                <ArticleCard
                                    key={index}
                                    article={article}
                                    index={index}
                                    isFavorite={favorites.includes(article.title)}
                                    onToggleFavorite={toggleFavorite}
                                />
                            ))
                        )}
                    </div>
                )}

            </div>
        </div>
    )
}

export default App