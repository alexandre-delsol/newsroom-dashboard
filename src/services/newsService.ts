import type {Article} from "../types/article"

const API_KEY = "23824f1a78dab96063a1a1b05606bf49"

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



