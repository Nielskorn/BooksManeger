package org.neuefische.backend.execaptions;

public class NoSuchIsbn extends Exception {
    public NoSuchIsbn(String message) {
        super("No such ISBN"+message);
    }
}
