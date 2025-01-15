export default function BookCard(){
    return(
        <>
        <h2>{title}</h2>
         <img src={picUrl} />
         <p>author: {author}</p>
        <p>isbn:{isbn}</p>
        </>

    )
}