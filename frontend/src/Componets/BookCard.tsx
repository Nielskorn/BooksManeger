import {Book} from "../Book.ts";
import {useNavigate} from "react-router-dom";

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