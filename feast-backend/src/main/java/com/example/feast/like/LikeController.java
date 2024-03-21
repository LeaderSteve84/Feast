package com.example.feast.like;

import com.example.feast.common.ApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

@RestController
@RequestMapping("api/v1/like")
@RequiredArgsConstructor
public class LikeController {

    public final LikeService likeService;

    @PostMapping("/recipe")
    public ApiResponse<String> likeRecipient(@RequestParam UUID recipeId) {
        return likeService.likeRecipe(recipeId);
    }

    @PostMapping("/comment")
    public ApiResponse<String> likeComment(@RequestParam UUID commentId) {
        return likeService.likeComment(commentId);
    }
}
