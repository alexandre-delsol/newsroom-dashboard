import type {Article} from "../types/article"

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const fetchNews = async (): Promise<Article[]> => {
    try {
        const response = await fetch(
            `https://gnews.io/api/v4/top-headlines?category=general&lang=fr&apikey=${API_KEY}`
        )

        if (!response.ok) {
            throw new Error("Erreur API")
        }

        const data = await response.json()

        return data.articles || []
    } catch (error) {
        console.error(error)
        return []
    }
}



