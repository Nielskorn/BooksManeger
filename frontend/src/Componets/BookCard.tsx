
import {useNavigate} from "react-router-dom";
import {Book} from "../types/Book.ts";

export default function BookCard(book:Book){
    const navigate = useNavigate();
    function navigateToDetailspage(){
        navigate("/book/"+book.isbn)
    }
    return(
        <div  onClick={navigateToDetailspage}>
            <h2 >{book.title}</h2>
            <img src={book.image} alt={book.title}/>
            <p>author: {book.author}</p>
            <p>isbn:{book.isbn}</p>
        </div>

    )
}