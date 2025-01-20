package org.neuefische.backend.model;


import java.time.Instant;

public record ErrorMessage(String message, Instant timestamp) {
}
