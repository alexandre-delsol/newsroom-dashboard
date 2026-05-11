import {useState} from "react"
import {useTheme} from "../contexte/useTheme.ts";


type Props = {
    search: string
    setSearch: (value: string) => void
    favoritesCount: number
}

const Navbar = ({search, setSearch, favoritesCount}: Props) => {
    const {darkMode, toggleDarkMode} = useTheme()
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav className="navbar">
            <div className="navbar-container">

                {/* LEFT */}
                <h1 className="logo">News <span>Room</span></h1>

                {/* HAMBURGER */}
                <button
                    className="hamburger"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>

                {/* DESKTOP MENU */}
                <div className={`nav-links ${menuOpen ? "open" : ""}`}>

                    <input
                        className="search-input"
                        type="text"
                        placeholder="Rechercher..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    <span className="favorites">
                        ⭐ {favoritesCount}
                    </span>

                    <button onClick={toggleDarkMode}>
                        {darkMode ? "☀️" : "🌙"}
                    </button>

                </div>
            </div>
        </nav>
    )
}

export default Navbar