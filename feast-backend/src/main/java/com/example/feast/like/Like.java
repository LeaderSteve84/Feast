package com.example.feast.like;

import com.example.feast.base.Base;
import com.example.feast.comment.Comment;
import com.example.feast.recipe.Recipe;
import com.example.feast.user.User;
import jakarta.persistence.Entity;
import jakarta.persistence.ForeignKey;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@Entity(name = "likes")
public class Like extends Base {
    @ManyToOne
    @JoinColumn(
            name = "user_id",
            referencedColumnName = "id",
            foreignKey = @ForeignKey(name = "like_user_foreign_key")
    )
    private User user;

    @ManyToOne
    @JoinColumn(
            name = "recipe_id",
            referencedColumnName = "id",
            foreignKey = @ForeignKey(name = "like_recipe_foreign_key")
    )
    private Recipe recipe;

    @ManyToOne
    @JoinColumn(
            name = "comment_id",
            referencedColumnName = "id",
            foreignKey = @ForeignKey(name = "like_comment_foreign_key")
    )
    private Comment comment;

}
