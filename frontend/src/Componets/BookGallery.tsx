import {Book} from "../types/Book.ts";
import BookCard from "./BookCard.tsx";

type BookGalleryProps={
    books:Book[]
}
export default function BookGallery(books:BookGalleryProps){
    const bookcards=books.books.map((book:Book)=><BookCard key={book.isbn} title={book.title} isbn={book.isbn} author={book.author} image={book.image} favorite={book.favorite} />)
    return(
        <>
            {bookcards}

        </>)
}