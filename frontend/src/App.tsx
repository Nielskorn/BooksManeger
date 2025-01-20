
import './App.css';
import './style.css'

import HomePage from "../pages/HomePage.tsx";
import FavoritesPage from "../pages/FavoritesPages.tsx";
import {Link, Route, Routes} from "react-router-dom";
import Manage from "../pages/Manage.tsx";


// Importiere die neuen Seiten

function App() {

    return (
        <>
            <header>
                <h1>Book Library</h1>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/favorites">Favorites</Link>
                    <Link to="/manage">Manage</Link>
                </nav>
            </header>

            <main className="container">
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/favorites" element={<FavoritesPage/>}/>
                    <Route path="/manage" element={<Manage/>}/>
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
