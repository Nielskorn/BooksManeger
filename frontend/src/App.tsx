
import './App.css';
import './style.css'

import HomePage from "../pages/HomePage.tsx";
import FavoritesPage from "../pages/FavoritesPages.tsx";
import BookDetails from "../pages/BookDetails.tsx";
//import NavBar from "./Componets/NavBar.tsx";
import {Link, Route, Routes} from "react-router-dom";
import Manage from "../pages/Manage.tsx";
// das ist ein komentar import AuthorPage from "../pages/AuthorPage.tsx";

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
                {/* Routen-Setup */}
                <Routes>
                    {/* Startseite */}
                    <Route path="/" element={<HomePage/>}/>

                    {/* Favoriten */}
                    <Route path="/favorites" element={<FavoritesPage/>}/>

                    {/*AuthorPage
                  <Route> path="/author" element={<AuthorPage author={"test"}/>} </Route>
                 */}
                    <Route path="/manage" element={<Manage/>}/>


                    {/* Buchdetails */}
                    <Route path="/book/:id" element={<BookDetails/>}/>
                </Routes>
            </main>
            <footer>
                <p>&copy; 2025 Book Library. All rights reserved.</p>
            </footer>
        </>
    );
}

export default App;
