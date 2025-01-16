import React from "react";
import BookForm from "../src/Componets/BookForm.tsx";
import BookGallery from "../src/Componets/BookGallery.tsx";

function HomePage() {
    return (
        <div>
            <h1>Willkommen in der Book Library!</h1>
            <p>Hier kannst du Bücher durchsuchen und deine Favoriten speichern.</p>

        </div>
    <div>
        <header>
            <h1>Books</h1>
            <BookForm fetchData={fetchData}/>
        </header>
        <div>
            <BookGallery books={data}/>
        </div>

    </div>
)
    ;
}

export default HomePage;
