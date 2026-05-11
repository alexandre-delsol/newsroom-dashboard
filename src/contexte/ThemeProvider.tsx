import {type ReactNode, useState} from "react"
import { ThemeContext } from "./ThemeContext"

export const ThemeProvider = ({children}: { children: ReactNode }) => {
    const [darkMode, setDarkMode] = useState(false)

    const toggleDarkMode = () => {
        setDarkMode(prev => !prev)
    }

    return (
        <ThemeContext.Provider value={{darkMode, toggleDarkMode}}>
            {children}
        </ThemeContext.Provider>
    )
}