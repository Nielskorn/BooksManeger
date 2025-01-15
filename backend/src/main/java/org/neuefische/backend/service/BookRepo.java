package org.neuefische.backend.service;

import org.neuefische.backend.model.Book;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface BookRepo extends MongoRepository<Book, String> {

}
