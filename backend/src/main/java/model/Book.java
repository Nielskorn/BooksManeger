package model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collation = "book")
public record Book(@Id String isbn ,
                   String titel,
                   String author,
                   String image) {
}
