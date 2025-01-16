import { useState,useEffect } from 'react'

import './App.css'

import {Book} from "./Book.ts";
import axios from "axios"
import BookGallery from "./Componets/BookGallery.tsx";


function App() {
    const [data,setData]=useState<Book[]>([])
    function fetchData(){
        axios.get("/api/book").then(response=>{setData(response.data);console.log(response.data.title)}

        ).catch(error=>{console.log(error)
            const book1:Book={author:"jim" , isbn:1234, image:"https://picsum.photos/50/150",title:"test"}
            const Books:Book[]=[book1]

            setData(Books);
        })
    }
    useEffect(() => {
        fetchData()
    }, [])

  return(
    <>
        <header>
            <h1>Book</h1>
        </header>
        <div>
        <BookGallery books={data} />
     </div>
    </>
  )
}

export default App
