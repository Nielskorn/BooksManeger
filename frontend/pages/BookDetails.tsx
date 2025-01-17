import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Book } from "../src/types/Book.ts";

function BookDetails() {
    const { id } = useParams();
    const [data, setData] = useState<Book>();


    const styles = {
        container: {
            padding: "2rem",
            textAlign: "center",
            backgroundColor: "white",
            minHeight: "100vh",
        },
        title: {
            fontSize: "2rem",
            color: "darkblue",
            marginBottom: "0.5rem",
        },
        image: {
            width: "300px",
            height: "auto",
            borderRadius: "8px",
            marginBottom: "1.5rem",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        },
        text: {
            fontSize: "1.1rem",
            color: "darkslategray",
            margin: "0.5rem 0",
        },
    };

    function getBook() {
        axios
            .get("/api/book/" + id)
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        getBook();
    }, []);

    const book = data;
    if (!book) {
        return <div>Buch nicht gefunden!</div>;
    }

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>{book.title}</h1>
            <img src={book.image} alt={book.title} style={styles.image} />
            <p style={styles.text}>Autor: {book.author}</p>
            <p style={styles.text}>ISBN: {book.isbn}</p>
        </div>
    );
}

export default BookDetails;