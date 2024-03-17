package com.example.feast.comment;

import com.example.feast.Like;
import com.example.feast.base.Base;
import com.example.feast.recipe.Recipe;
import com.example.feast.user.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@RequiredArgsConstructor
@Entity
public class Comment extends Base {
    @Column(name = "content", columnDefinition = "TEXT")
    private String content;

    @JsonIgnore
    @ManyToOne(fetch= FetchType.LAZY)
    @JoinColumn(
            name = "user_id",
            referencedColumnName = "id",
            foreignKey = @ForeignKey(name = "comment_user_foreign_key")
    )
    private User user;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(
            name = "recipe_id",
            referencedColumnName = "id",
            foreignKey = @ForeignKey(name = "comment_recipe_foreign_key")
    )
    private Recipe recipe;

    @OneToMany(mappedBy = "comment")
    private List<Like> likes;
}
