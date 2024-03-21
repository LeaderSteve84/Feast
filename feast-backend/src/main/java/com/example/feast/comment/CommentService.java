package com.example.feast.comment;

import com.example.feast.common.ApiResponse;
import com.example.feast.recipe.RecipeRepository;
import com.example.feast.user.UserRepository;
import com.example.feast.user.UserUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CommentService {


    private final RecipeRepository recipeRepository;

    private final UserRepository userRepository;

    private final CommentRepository commentRepository;

    public ApiResponse<CommentResponse> createComment(CommentDto commentDto) {
        var recipe = recipeRepository.findById(commentDto.recipeId());
        var user = userRepository.findByEmailAddress(UserUtil.getLoggedInUser());
        Comment newComment = new Comment();
        if( recipe.isPresent() && user.isPresent()) {
            newComment.setContent(commentDto.comment());
            newComment.setRecipe(recipe.get());
            newComment.setUser(user.get());
            commentRepository.save(newComment);
        }
        return new ApiResponse<>(new CommentResponse(
                newComment.getId(),
                newComment.getContent()
        ), "Comment successfully created.");

    }

    public ApiResponse<CommentResponse> editComment(ModifyCommentDto editCommentDto) {
        var commentUpdate = commentRepository.findById(editCommentDto.commentId()).get();

            commentUpdate.setContent(editCommentDto.comment());
            var updatedComment = commentRepository.save(commentUpdate);

        return new ApiResponse<>(new CommentResponse(
                updatedComment.getId(),
                updatedComment.getContent()
        ), "Comment successfully updated.");
    }

    public ApiResponse<CommentResponse> deleteComment(ModifyCommentDto deleteCommentDto) {
        var commentToDelete = commentRepository.findById(deleteCommentDto.commentId());
        commentToDelete.ifPresent(commentRepository::delete);
        return new ApiResponse<>("Comment deleted.");
    }
}
