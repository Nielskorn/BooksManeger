package org.neuefische.backend.controller;


import org.neuefische.backend.execaptions.NoIsbnExecaption;
import org.neuefische.backend.execaptions.NoTitleExecaption;

import org.neuefische.backend.model.Book;
import org.neuefische.backend.service.BookService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/api/book")
@RestController



public class BookController {
 private final BookService bookService;

    public BookController(BookService bookService) {
        this.bookService = bookService;
    }


    @PostMapping
public Book addBook (@RequestBody Book book) throws NoTitleExecaption, NoIsbnExecaption {
    return bookService.addBook(book);
}

@GetMapping ("/{id}")
public Book getBookById(@PathVariable String id){
     return bookService.getBookById(id);
}

@GetMapping
public List <Book> getAllBooks(){return
bookService.getAllBooks();
}
@GetMapping("/fav")
public List <Book> getBooksByFavorite (@RequestParam (value = "favorite" )boolean favorite){
        return bookService.getBookByFavorite(favorite);
}

@PutMapping("/{id}")
public Book updateBook(@PathVariable String id, @RequestBody Book book){
    return bookService.updateBook(book);
}

@DeleteMapping("/{id}")
    public void deleteBook(@PathVariable String id){
    bookService.deleteBook(id);
}
}
