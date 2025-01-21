package org.neuefische.backend.service;


import org.neuefische.backend.execaptions.NoIsbnExecaption;
import org.neuefische.backend.execaptions.NoTitleExecaption;

import org.neuefische.backend.model.Book;
import org.springframework.lang.NonNull;
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

        if(book.isbn().isEmpty()||book.isbn().isBlank()){
            throw new NoIsbnExecaption();
        }
        if(book.image().isEmpty()||book.image().isBlank()){
           book= getCoverImage(book);
        }
        return  bookRepo.save(book);
    }

    public Book getCoverImage(@NonNull Book book) {
      String coverUrl ="https://covers.openlibrary.org/b/isbn/"+book.isbn()+"-M.jpg";
      return  new Book(book.isbn(), book.title(),book.author(),coverUrl,book.favorite());
    }

    public Book updateBook(Book book) {
        return bookRepo.save(book);
    }

    public void deleteBook(String id) {
        System.out.println("My Service delete");
         bookRepo.deleteById(id);
    }

    public List<Book> getBooksByAuthor(String author) {
        return bookRepo.getBookByAuthor(author);
    }
}
