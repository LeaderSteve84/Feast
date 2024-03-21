package com.example.feast.comment;

import java.util.UUID;

public record CommentDto(
        UUID recipeId,
        String comment
) {
}
