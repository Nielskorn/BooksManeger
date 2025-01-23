
import './App.css';


import HomePage from "../pages/HomePage.tsx";
import FavoritesPage from "../pages/FavoritesPages.tsx";
import {Link, Route, Routes, useNavigate} from "react-router-dom";
import Manage from "../pages/Manage.tsx";
import BookDetails from "../pages/BookDetails.tsx";
import SearchResults from "../pages/SearchResults.tsx";


// Importiere die neuen Seiten

function App() {
    const navigate = useNavigate()
    return (
        <>
            <header>
                <h1>Book Library</h1>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/favorites">Favorites</Link>
                    <Link to="/manage">Manage</Link>
                </nav>
                <form
                    className="search-form"
                    onSubmit={(e) => {
                        e.preventDefault();
                        const searchInput = (e.target as HTMLFormElement).querySelector(
                            "input"
                        ) as HTMLInputElement;
                        const searchTerm = searchInput.value.trim();
                        if (searchTerm) {
                            console.log(searchTerm)
                           navigate({pathname:"/book/search/", search:"?title="+searchTerm})
                        }
                    }}
                >
                    <input
                        type="text"
                        placeholder="Search books..."
                        className="search-input"
                    />
                    <button type="submit" className="search-button">
                        🔍
                    </button>
                </form>
            </header>

            <main className="container">
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/favorites" element={<FavoritesPage/>}/>
                    <Route path="/manage" element={<Manage/>}/>
                    <Route path="/book/:id" element={<BookDetails/>}/>
                    <Route path="/book/search" element={<SearchResults />} />
                </Routes>
            </main>

            <footer>
                <p>&copy; 2025 Book Library. All rights reserved.</p>
            </footer>
        </>


    )
        ;
}

export default App;
