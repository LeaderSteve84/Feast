package com.example.feast.comment;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import java.util.UUID;


public class CommentResponse {
    UUID commentId;

    String comment;

    public CommentResponse(UUID commentId, String comment) {
        this.commentId = commentId;
        this.comment = comment;
    }
}
