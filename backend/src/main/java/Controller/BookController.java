package Controller;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequestMapping
@RestController

private final Bookservice bookservice;

public class BookController {
    this.bookService;
}

@PostMapping
public ResponseEntity<Book> addBook (RequestBody Book book){
    Book savedBook = bookService.addBook(book);
    return ResponseEntity.status(HttpStatus.CREATED).body(savedBook);
}

@GetMapping ("/{id}")
public ResponseEntity<Book> getBookById(@PathVariable String id){
    Book book =bookService.getBookById (id);
    return ResponseEntity.ok(book);
}

@GetMapping
public ResponseEntity<List<Book>> getAllBooks(){
    List<Book> books = bookService.getAllBooks();
    return ResponseEntity.ok(books);
}
