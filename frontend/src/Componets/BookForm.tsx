import {FormEvent, useState} from "react";
import axios from "axios";



export default function BookForm({fetchData}:{fetchData:()=>void}){
    const [title,setTitle]=useState<string>("")
    const [author,setAuthor]=useState<string>("")
    const [image,setImage]=useState<string>("")
    const [isbn,setIsbn]=useState<string>("")
    function OnSubmit(event:FormEvent<HTMLFormElement>){
        event.preventDefault();
        axios.post("/api/book",{title:title, author: author, image: image, isbn: isbn, favorite: false}).then(
            fetchData
        ).catch(error=>{console.log(error); alert(error.response.data.message)})

    OnReset()
    }
    function OnReset(){
        setIsbn("")
        setAuthor("")
        setTitle("")
        setImage("")

    }




    return(
        <>
            <form
                className="addform"
                onSubmit={OnSubmit} onReset={OnReset}>
                <label> Title:
                    <input type={"text"} value={title} onChange={event => {
                        setTitle(event.target.value)
                    }}/>
                </label>
                <label> Author:
                    <input type={"text"} value={author} onChange={event => {
                        setAuthor(event.target.value)
                    }}/>
                </label>
                <label> ImageUrl:
                    <input type={"text"} value={image} onChange={event => {
                        setImage(event.target.value)
                    }}/>
                </label>
                <label> ISBN:
                    <input type={"text"} value={isbn} onChange={event => {
                        setIsbn(event.target.value)
                    }}/>
                </label>
                <button type={"submit"}>create Book</button>
                <button type={"reset"}>resetForm</button>
            </form>




        </>
    )
}