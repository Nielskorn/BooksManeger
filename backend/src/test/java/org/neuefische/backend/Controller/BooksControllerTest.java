package org.neuefische.backend.Controller;


import org.junit.jupiter.api.Test;
import org.neuefische.backend.model.Book;
import org.neuefische.backend.service.BookRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.List;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@AutoConfigureMockMvc
@SpringBootTest
 class BooksControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private BookRepo bookRepo;

    @Test
    void getAllBooks_ShouldReturnAllBooks() throws Exception {
        bookRepo.saveAll(List.of(
                new Book("1a", "Hamburger Coders", "Niels and Emre", "TestImage1",false),
                new Book("1b", "Hamburger Coders 2", "Niels and Emre", "TestImage2",false)
        ));
        // Act & Assert: API-Aufruf und Validierung
        mockMvc.perform(get("/api/book"))
                .andExpect(status().isOk())
                .andExpect(content().json("""
                [
                    {
                        "isbn": "1a",
                        "title": "Hamburger Coders",
                        "author": "Niels and Emre",
                        "image": "TestImage1"
                    },
                    {
                        "isbn": "1b",
                        "title": "Hamburger Coders 2",
                        "author": "Niels and Emre",
                        "image": "TestImage2"
                    }
                ]
                """));
    }

    @Test
    void getBookById_ShouldReturnBook() throws Exception{
       Book book =bookRepo.save (new Book("1a", "Hamburger Coders", "Niels and Emre", "TestImage",false));
       mockMvc.perform(get("/api/book/1a"))
               .andExpect(status().isOk())
               .andExpect(content().json("""
                       {
                        "isbn": "1a",
                        "title": "Hamburger Coders",
                        "author": "Niels and Emre",
                        "image": "TestImage"
                       }
                       """));

    }

    @Test
    void updateBook_ShouldUpdateBook() throws Exception{
        Book existintBook =bookRepo.save(new Book("1a", "Hamburger Coders", "Niels and Emre", "TestImage",false));
        String updateBook= """
                {
                "isbn": "1d",
                "title": "Updated Book",
                "author": "Updated Author",
                "image": "UpdatedImage"
                "favorite":"false"
                }
                """;
        mockMvc.perform(put("/api/book/"+existintBook.isbn())
                .contentType(MediaType.APPLICATION_JSON)
                .content(updateBook))
                .andExpect(status().isOk())
                .andExpect(content().json("""
                 {
                                    "isbn": "1d",
                                    "title": "Updated Book",
                                    "author": "Updated Author",
                                    "image": "UpdatedImage",
                                    "favorite":"false"
                                }
                """));
    }

    @Test
    void updateBook_ShouldNotUpdateBook() throws Exception{
        Book existintBook =bookRepo.save(new Book("1a", "Hamburger Coders", "Niels and Emre", "TestImage",false));
        String updateBook= """
                {
                "isbn": "1b",
                "title": "Updated Book",
                "author": "Updated Author",
                "image": "UpdatedImage",
                "favorite":"false"
                }
                """;
        mockMvc.perform(put("/api/book/"+existintBook.isbn())
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(updateBook))
                .andExpect(status().isOk())
                .andExpect(content().json("""
                 {
                                    "isbn": "1d",
                                    "title": "Updated Book",
                                    "author": "Updated Author",
                                    "image": "UpdatedImage",
                                    "Favorite": false
                                }
                """));
    }

    @Test
    void deleteBook_ShouldDeleteBook() throws Exception{
        Book book = bookRepo.save(new Book("1e", "Book to Delete", "Author", "Image",false));
        mockMvc.perform(delete("/api/book/1e"))
                .andExpect(status().isOk());

        mockMvc.perform(get("/api/book"))
                .andExpect(status().isOk());


    }


}
