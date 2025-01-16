package org.neuefische.backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


//@Document("book")
public record Book(@Id String isbn ,
                   String title,
                   String author,
                   String image) {
}
