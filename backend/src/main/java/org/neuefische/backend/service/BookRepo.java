package org.neuefische.backend.service;

import org.neuefische.backend.model.Book;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface BookRepo extends MongoRepository<Book, String> {
List<Book> getBookByFavorite(Boolean favorite);
List<Book> getBookByAuthor(String author);
List<Book> findByTitleContainingIgnoreCase(String title);
}
