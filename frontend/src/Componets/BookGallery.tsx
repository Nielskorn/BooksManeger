import { Book } from "../types/Book.ts";
import BookCard from "./BookCard.tsx";
import './Book.css'

type BookGalleryProps = {
    books: Book[];
}

export default function BookGallery({ books }: BookGalleryProps) {
    const bookcards = books.map((book: Book) => (
        <div className="book-card" key={book.isbn}>
            <BookCard
                title={book.title}
                isbn={book.isbn}
                author={book.author}
                image={book.image}
                favorite={book.favorite}
            />
        </div>
    ));

    return (
        <div className="book-gallery">
            {bookcards}
        </div>
    );
}