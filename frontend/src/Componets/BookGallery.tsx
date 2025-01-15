import {Book} from "../Book.ts";
import BookCard from "./BookCard.tsx";

type BookGalleryProps={
    books:Book[]
}
export default function BookGallery(books:BookGalleryProps){
    const bookcards=books.books.map((book:Book)=><BookCard title={book.title} isbn={book.isbn} author={book.author} image={book.image}/>)
    return(
        <>
            {bookcards}

        </>)
}