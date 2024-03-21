package com.example.feast.comment;

import java.util.UUID;

public record ModifyCommentDto(
        UUID commentId,

        String comment
) {
}
