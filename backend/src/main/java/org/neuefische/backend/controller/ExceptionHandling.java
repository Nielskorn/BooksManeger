package org.neuefische.backend.controller;

import org.neuefische.backend.model.ErrorMessage;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.time.Instant;

@RestControllerAdvice
@ResponseStatus
public class ExceptionHandling {

    @ExceptionHandler(org.neuefische.backend.execaptions.NoTitleExecaption.class)
    public ErrorMessage handelNoTitelExecaption(Exception exception){
        return new ErrorMessage( exception.getMessage(), Instant.now());
    }
    @ExceptionHandler(org.neuefische.backend.execaptions.NoIsbnExecaption.class)
    public ErrorMessage handelNoIsbnExecaption(Exception exception){
        return new ErrorMessage( exception.getMessage(), Instant.now());
    }

    @ExceptionHandler(org.neuefische.backend.execaptions.NoSuchIsbn.class)
    public ErrorMessage handelNoSuchIsbnExecaption(Exception exception){
        return new ErrorMessage( exception.getMessage(), Instant.now());
    }


}
