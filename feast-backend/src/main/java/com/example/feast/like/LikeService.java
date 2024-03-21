package com.example.feast.like;

import com.example.feast.comment.Comment;
import com.example.feast.comment.CommentRepository;
import com.example.feast.common.ApiResponse;
import com.example.feast.recipe.RecipeRepository;
import com.example.feast.user.UserRepository;
import com.example.feast.user.UserUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Slf4j
@Service
@RequiredArgsConstructor
public class LikeService {

    private final RecipeRepository recipeRepository;

    private final CommentRepository commentRepository;

    private final UserRepository userRepository;

    private final LikeRepository likeRepository;

    public ApiResponse<String> likeRecipe(UUID recipeId) {
        var recipe = recipeRepository.findById(recipeId).get();
        var user = userRepository.findByEmailAddress(UserUtil.getLoggedInUser()).get();
        Optional<Like> existingLike = Optional.ofNullable(likeRepository.findByUser_EmailAddressAndRecipe_Id(
                user.getEmailAddress(), recipeId
        ));
        if (existingLike.isPresent()) {
            existingLike.get().setRecipe(null);
            existingLike.get().setUser(null);
            existingLike.ifPresent(likeRepository::delete);
            return new ApiResponse<>("Recipe unliked");

        }else {
            Like like = new Like();
            like.setRecipe(recipe);
            like.setUser(user);
            likeRepository.save(like);
            return new ApiResponse<>("Recipe liked");
        }

    }

    public ApiResponse<String> likeComment(UUID commentId) {
        var comment = commentRepository.findById(commentId).get();
        var user = userRepository.findByEmailAddress(UserUtil.getLoggedInUser()).get();
        Optional<Comment> existingLike = Optional.ofNullable(commentRepository.findByUser_EmailAddressAndId(
                user.getEmailAddress(), commentId
        ));
        if (existingLike.isPresent()) {
            commentRepository.delete(existingLike.get());
            return new ApiResponse<>("Comment unliked");

        }else {
            Like like = new Like();
            like.setComment(comment);
            like.setUser(user);
            likeRepository.save(like);
            return new ApiResponse<>("Comment liked");
        }
    }
}
