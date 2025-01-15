package org.neuefische.backend.repo;

import org.neuefische.backend.model.Book;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface BookRepo extends MongoRepository<Book, String> {
}
