package org.neuefische.backend.execaptions;

public class NoIsbnExecaption extends Exception {
    public NoIsbnExecaption() {
        super("No Isbn execaption you need to given a ISBN number");
    }
}
