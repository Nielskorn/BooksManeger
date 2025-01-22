package org.neuefische.backend.service;

import org.junit.jupiter.api.Test;
import org.neuefische.backend.execaptions.NoIsbnExecaption;
import org.neuefische.backend.execaptions.NoTitleExecaption;
import org.neuefische.backend.model.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
@SpringBootTest
 class BookServiceTest {

    @Autowired
    private BookService bookService;
    @Test
    void addedBook_shouldThrowNoTitle() {
        Book book = new Book("1234", "", "Author", "Image",false);
        assertThrows(NoTitleExecaption.class,()->bookService.addBook(book)) ;
    }
    @Test
    void addedBookBlankTitle_shouldThrowNoTitle() {
        Book book = new Book("1234", "   ", "Author", "Image",false);
        assertThrows(NoTitleExecaption.class,()->bookService.addBook(book)) ;
    }
    @Test
    void addedBook_shouldThrowNoIsbn(){
        Book book =new Book("", "test", "Author", "Image",false);
        assertThrows(NoIsbnExecaption.class,()->bookService.addBook(book)) ;
    }
    @Test
    void addedBookWithBlankIsbn_shouldThrowNoIsbn(){
        Book book =new Book("   ", "test", "Author", "Image",false);
        assertThrows(NoIsbnExecaption.class,()->bookService.addBook(book)) ;
    }

    @Test
    void addedBook_shoudImageCreation() throws NoIsbnExecaption, NoTitleExecaption {
        Book test =new Book("9783442457397", "Der Zeitdieb", "Terry Pratchett", "",false);
        Book expected =new Book ("9783442457397", "Der Zeitdieb", "Terry Pratchett", "https://covers.openlibrary.org/b/isbn/9783442457397-M.jpg",false) ;
        Book actual= bookService.addBook(test);
        assertEquals(actual.image(),(expected.image()));
    }
}
