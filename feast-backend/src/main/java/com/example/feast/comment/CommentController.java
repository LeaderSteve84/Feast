package com.example.feast.comment;

import com.example.feast.common.ApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/recipe")
@RequiredArgsConstructor
public class CommentController {

    public final CommentService commentService;


    @PostMapping("/comment/add")
    public ApiResponse<CommentResponse> createComment(
            @RequestBody CommentDto commentDto
    ) {
        return commentService.createComment(commentDto);
    }

    @PutMapping("comment/update")
    public ApiResponse<CommentResponse> editComment(
            @RequestBody ModifyCommentDto editCommentDto
    ) {
        return commentService.editComment(editCommentDto);
    }

    @DeleteMapping("comment/delete")
    public ApiResponse<CommentResponse> deleteComment(
            @RequestBody ModifyCommentDto deleteCommentDto
    ) {
        return commentService.deleteComment(deleteCommentDto);
    }
}
