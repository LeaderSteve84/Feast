package com.example.feast.recipe;

import com.example.feast.base.Base;
import com.example.feast.comment.Comment;
import com.example.feast.like.Like;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "recipe")
public class Recipe extends Base {
    private String image;
    private String label;
    private String recipeId;

    @ElementCollection
    private List<String> ingredientLines;

    @ElementCollection
    private List<String> instructions;

    @OneToMany(mappedBy = "recipe", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Comment> comment;

    @OneToMany(mappedBy = "recipe", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Like> likes;

}
