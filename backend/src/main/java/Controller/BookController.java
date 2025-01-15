package Controller;


import lombok.RequiredArgsConstructor;
import org.neuefische.backend.model.Book;
import org.neuefische.backend.service.BookService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/api/book")
@RestController
@RequiredArgsConstructor


public class BookController {
    private final BookService  bookservice;



@PostMapping
public ResponseEntity<Book> addBook (RequestBody Book book){
    Book savedBook = bookservice.addBook(book);
    return ResponseEntity.status(HttpStatus.CREATED).body(savedBook);
}

@GetMapping ("/{id}")
public ResponseEntity<Book> getBookById(@PathVariable String id){
    Book book =bookservice.getBookById (id);
    return ResponseEntity.ok(book);
}

@GetMapping
public ResponseEntity<List<Book>> getAllBooks(){
    List<Book> books = bookservice.getAllBooks();
    return ResponseEntity.ok(books);
}
}
