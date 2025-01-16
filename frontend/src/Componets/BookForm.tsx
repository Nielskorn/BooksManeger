import {FormEvent, useState} from "react";
import axios from "axios";

export default function BookForm(){
    function OnSubmit(event:FormEvent<HTMLFormElement>){
        event.preventDefault();
        axios.post("/api/book",{titel:titel, author: author, image: image, isbn: isbn}).then().catch(error=>console.log(error))
    }
    function OnReset(){
        setIsbn("")
        setAuthor("")
        setTitel("")
        setImage("")
    }
    const [titel,setTitel]=useState<string>("")
    const [author,setAuthor]=useState<string>("")
    const [image,setImage]=useState<string>("")
    const [isbn,setIsbn]=useState<string>("")


    return(
        <>
             <form onSubmit={OnSubmit} onReset={OnReset}>
                <input type={"text"} onChange={event => {
                    setTitel(event.target.value)
                }}/>
                <input type={"text"} onChange={event => {
                    setAuthor(event.target.value)
                }}/>
                <input type={"text"} onChange={event => {
                    setImage(event.target.value)
                }}/>
                <input type={"text"} onChange={event => {
                    setIsbn(event.target.value)
                }}/>
                <button type={"submit"}>create Book</button>
                <button type={"reset"}>resetForm</button>
            </form>


        </>
    )
}