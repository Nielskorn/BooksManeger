package org.neuefische.backend.model;

import org.springframework.data.annotation.Id;



//@Document("book")
public record Book(@Id String isbn ,
                   String title,
                   String author,
                   String image,
                   Boolean favorite) {
}
