package org.neuefische.backend.model;

import org.springframework.data.annotation.Id;

public record Book(@Id long isbn , String titel, String author, String image) {
}
