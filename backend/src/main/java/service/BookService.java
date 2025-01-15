package service;

import lombok.RequiredArgsConstructor;
import model.Book;
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
    public Book addBook(Book book) {
        return  bookRepo.save(book);
    }

    public Book updateBook(Book book) {
        return bookRepo.save(book);
    }

    public void deleteBook(String id) {
         bookRepo.deleteById(id);
    }
}
