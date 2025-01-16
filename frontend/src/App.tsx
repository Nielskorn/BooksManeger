
import './App.css';


import { Route, Routes } from "react-router-dom";

// Importiere die neuen Seiten
//import HomePage from "./pages/HomePage.tsx";

//import BookDetails from "../pages/BookDetails.tsx";
import HomePage from "../pages/HomePage.tsx";
import FavoritesPage from "../pages/FavoritesPages.tsx";
import BookDetails from "../pages/BookDetails.tsx";
import NavBar from "./Componets/NavBar.tsx";

function App() {

    return (
        <>

            {/* Routen-Setup */}
            <header>
                <NavBar />
            </header>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>

                    {/* Favoriten */}
                    <Route path="/favorites" element={<FavoritesPage/>}/>

                    {/* Buchdetails */}
                    <Route path="/book/:id" element={<BookDetails/>}/>
                </Routes>
            </>
            );
            }

            export default App;
