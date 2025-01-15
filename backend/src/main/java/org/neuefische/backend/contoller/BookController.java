package org.neuefische.backend.contoller;

import lombok.RequiredArgsConstructor;
import org.neuefische.backend.model.Book;
import org.neuefische.backend.service.BookService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/books")
@RequiredArgsConstructor
public class BookController {
    private final BookService bookService;
    @GetMapping()
    public List<Book> getAllBooks() {

     return  bookService.getAllBooks();
    }

}
