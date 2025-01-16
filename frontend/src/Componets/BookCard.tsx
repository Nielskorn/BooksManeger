import {Book} from "../Book.ts";

export default function BookCard(book:Book){
    return(
        <>
        <h2>{book.titel}</h2>
         <img src={book.image} />
         <p>author: {book.author}</p>
        <p>isbn:{book.isbn}</p>
        </>

    )
}