package org.neuefische.backend.service;

import org.neuefische.backend.model.Book;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {

   private final BookRepo bookRepo;

    public BookService(BookRepo bookRepo) {
        this.bookRepo = bookRepo;
    }

    public List<Book> getAllBooks() {
        return bookRepo.findAll();
    }
    public Book getBookById(String id) {
        return bookRepo.findById(id).orElseThrow();
    }
    public List <Book> getBookByFavorite(Boolean favorite) {
        return bookRepo.getBookByFavorite(favorite);
    }
    public Book addBook(Book book)  {
        if(book.title().isEmpty()||book.title().isBlank()){

        }

        return  bookRepo.save(book);
    }

    public Book updateBook(Book book) {
        return bookRepo.save(book);
    }

    public void deleteBook(String id) {
         bookRepo.deleteById(id);
    }

}
