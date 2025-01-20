package org.neuefische.backend.service;


import org.neuefische.backend.execaptions.NoIsbnExecaption;
import org.neuefische.backend.execaptions.NoTitleExecaption;

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
    public Book addBook(Book book) throws
            NoTitleExecaption, NoIsbnExecaption {
        if(book.title().isEmpty()||book.title().isBlank()){
            throw new NoTitleExecaption();
        }
        //TODO Add way to get Isbn over Title per 3deParty api or add generation by service
        if(book.isbn().isEmpty()||book.isbn().isBlank()){
            throw new NoIsbnExecaption();
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
