package org.neuefische.backend.Controller;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.neuefische.backend.model.Book;
import org.neuefische.backend.service.BookRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;

import java.util.List;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@AutoConfigureMockMvc
@SpringBootTest
 class BooksControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private BookRepo bookRepo;

    @BeforeEach
    void setUp() {
        bookRepo.deleteAll();
    }

    @Test

    void getAllBooks_ShouldReturnAllBooks() throws Exception {
        bookRepo.saveAll(List.of(
                new Book("1a", "Hamburger Coders", "Niels and Emre", "TestImage1"),
                new Book("1b", "Hamburger Coders 2", "Niels and Emre", "TestImage2")
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


}
