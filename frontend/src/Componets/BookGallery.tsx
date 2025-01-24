import { Book } from "../types/Book.ts";
import BookCard from "./BookCard.tsx";

type BookGalleryProps = {
    books: Book[];
    managePage?: boolean; // Optional, da es nur auf der ManagePage benötigt wird
    onFavoriteRemoved?: (isbn: string) => void; // Neue Prop für das Entfernen von Favoriten
};

export default function BookGallery({ books, managePage = false,onFavoriteRemoved }: BookGalleryProps) {
    const bookcards = books.map((book: Book) => (
        <div className="book-card" key={book.isbn}>
            <BookCard
                book={book}
                managePage={managePage} // Prop an BookCard weitergeben
                onFavoriteRemoved={onFavoriteRemoved}
            />
        </div>
    ));

    return (
        <div className="book-gallery">
            {bookcards}
        </div>
    );
}
