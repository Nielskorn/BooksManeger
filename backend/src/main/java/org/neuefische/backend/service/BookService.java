package org.neuefische.backend.service;

import lombok.RequiredArgsConstructor;
import org.neuefische.backend.model.Book;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BookService {
   final BookRepo bookRepo;
    public List<Book> getAllBooks() {
        return bookRepo.findAll();
    }
    public Book getBookById(String id) {
        return bookRepo.findById(id).orElseThrow();
    }
    public Book addBook(Book book) {
        return  bookRepo.save(book);
    }
}
