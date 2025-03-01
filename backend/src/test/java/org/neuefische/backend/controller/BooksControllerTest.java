package org.neuefische.backend.controller;


import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.neuefische.backend.execaptions.NoSuchIsbn;
import org.neuefische.backend.model.Book;
import org.neuefische.backend.service.BookRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertInstanceOf;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.assertj.core.api.Assertions.assertThat;
@AutoConfigureMockMvc
@SpringBootTest
 class BooksControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private BookRepo bookRepo;
    @Autowired
    ObjectMapper objectMapper;


    @DirtiesContext
    @Test
    void expectSuccessfulPost() throws Exception {
        String actual = mockMvc.perform(
                        post("/api/book")
                                .contentType(MediaType.APPLICATION_JSON)
                                .content("""

                                        {"isbn":"1a","title": "Omar", "author": "omar","image": "testImage","favorite": false}
                                    """)
                )
                .andExpect(status().isOk())
                .andExpect(content().json("""
                         {
                      "isbn":"1a",
                      "title": "Omar",
                       "author": "omar",
                       "image": "testImage",
                       "favorite": false
                    }
                    """))
                .andReturn()
                .getResponse()
                .getContentAsString();

        Book actualBook = objectMapper.readValue(actual, Book.class);
        assertThat(actualBook.isbn())
                .isNotBlank();
    }
    @Test
    @DirtiesContext
    void getAllBooks_ShouldReturnAllBooks() throws Exception {
        bookRepo.saveAll(List.of(
                new Book("1a", "Hamburger Coders", "Niels and Emre", "TestImage1" ,false),
                new Book("1b", "Hamburger Coders 2", "Niels and Emre", "TestImage2" ,false)
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
    @DirtiesContext
    void getAllFavoriteBooks_ShouldReturnfristBook() throws Exception {
        bookRepo.saveAll(List.of(
                new Book("1a", "Hamburger Coders", "Niels and Emre", "TestImage1" ,true),
                new Book("1b", "Hamburger Coders 2", "Niels and Emre", "TestImage2" ,false)
        ));
        // Act & Assert: API-Aufruf und Validierung
        mockMvc.perform(get("/api/book/fav").param("favorite", "true"))
                .andExpect(status().isOk())
                .andExpect(content().json("""
                         [
                    {
                        "isbn": "1a",
                        "title": "Hamburger Coders",
                        "author": "Niels and Emre",
                        "image": "TestImage1",
                        "favorite": true
                    }
                  ]
                
                """));
    }

    @Test
    @DirtiesContext
    void getBookById_ShouldReturnBook() throws Exception{
       Book book =bookRepo.save(new Book("1a", "Hamburger Coders", "Niels and Emre", "TestImage", false));
        mockMvc.perform(get("/api/book/" + book.isbn()))
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
    @DirtiesContext
    void updateBook_ShouldUpdateBook() throws Exception{

        Book existintBook =bookRepo.save(new Book("1d", "Hamburger Coders", "Niels and Emre", "TestImage",false));

        String updateBook= """
                {
                "isbn": "1d",
                "title": "Updated Book",
                "author": "Updated Author",
                "image": "UpdatedImage",
                "favorite":"false"
                }
                """;
        mockMvc.perform(put("/api/book/"+existintBook.
                        isbn())
                .contentType(
                        MediaType.APPLICATION_JSON)
                .content(updateBook))
                .andExpect(status().isOk())
                .
                        andExpect(content().json(
                        """
                 {
                                    "isbn": "1d",
                                    "title":
                        "Updated Book",
                                    "author": "Updated Author",
                                    "image":
                        "UpdatedImage",
                                    "favorite":false
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
                .andExpect(status().is5xxServerError()).andExpect(result -> assertInstanceOf(NoSuchIsbn.class, result.getResolvedException())).andExpect(result -> assertTrue(result.getResolvedException().getMessage().contains("No such ISBN")));



    }


    @Test
    @DirtiesContext
    void deleteBook_ShouldDeleteBook() throws Exception{
        bookRepo.save(new Book("1e", "Book to Delete", "Author", "Image",false));
        mockMvc.perform(delete("/api/book/1e"))
                .

    andExpect(status().isOk());

        mockMvc.perform(get("/api/book"))
                .andExpect(status().isOk());


    }
    @Test
    @DirtiesContext
    void getBooksByAuthor_ShouldReturnAllBooks() throws Exception {
        bookRepo.saveAll(List.of(
                new Book("1a", "Hamburger Coders", "Niels and Emre", "TestImage1",true),
                new Book("1b", "Hamburger Coders 2", "Niels", "TestImage2",false)
        ));
        // Act & Assert: API-Aufruf und Validierung
        mockMvc.perform(get("/api/book/author").param("author", "Niels and Emre"))
                .andExpect(status().isOk())
                .andExpect(content().json("""
                [
                    {
                        "isbn": "1a",
                        "title": "Hamburger Coders",
                        "author": "Niels and Emre",
                        "image": "TestImage1",
                        "favorite": true
                    }
                  ]
                
                """));
    }
    @Test
    @DirtiesContext
    void getBooksByTitle_ShouldReturnAllBooksWithCoders() throws Exception {
        bookRepo.saveAll(List.of(
                new Book("1a", "Hamburger Coders", "Niels and Emre", "TestImage1",true),
                new Book("1b", "Hamburger Coders 2", "Niels", "TestImage2",false),
                new Book("1c", "Hamburg", "Niels", "TestImage2",false)
        ));
        mockMvc.perform(get("/api/book/search").param("title", "coders"))
                .andExpect(status().isOk())
                .andExpect(content().json("""

                        [
                        {
                        "isbn": "1a",
                        "title":"Hamburger Coders",
                        "author": "Niels and Emre",
                          "image": "TestImage1",
                         "favorite":true
                        },
                        {
                         "isbn":"1b",
                        "title": "Hamburger Coders 2",
                        "author": "Niels",
                        "image": "TestImage2",
                        "favorite": false
                      }

                  ]

                """));
    }
}