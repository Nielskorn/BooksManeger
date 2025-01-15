package model;

import org.springframework.data.annotation.Id;

public record Book(@Id String isbn , String titel, String author, String image) {
}
