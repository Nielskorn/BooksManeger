import {FormEvent, useState} from "react";
import axios from "axios";

export default function BookForm({fetchData}:{fetchData:()=>void}){
    function OnSubmit(event:FormEvent<HTMLFormElement>){
        event.preventDefault();
        axios.post("/api/book",{titel:titel, author: author, image: image, isbn: isbn}).then(fetchData
        ).catch(error=>console.log(error))
        OnReset()
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
                <label> Titel:
                    <input type={"text"} onChange={event => {
                        setTitel(event.target.value)
                    }}/>
                </label>
                <label> Author:
                <input type={"text"} onChange={event => {
                    setAuthor(event.target.value)
                }}/>
                </label>
                <label> ImageUrl:
                    <input type={"text"} onChange={event => {
                        setImage(event.target.value)
                    }}/>
                    </label>
                <label> ISBN:
                    <input type={"text"} onChange={event => {
                        setIsbn(event.target.value)
                    }}/>
                </label>
                    <button type={"submit"}>create Book</button>
                    <button type={"reset"}>resetForm</button>
            </form>


        </>
    )
}