package com.example.feast.recipe;

import com.example.feast.base.Base;
import com.example.feast.comment.Comment;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@RequiredArgsConstructor
@Entity
public class Recipe extends Base {
    private String image;
    private String label;

    @ElementCollection
    private ArrayList<String> ingredientLines;

    @ElementCollection
    private ArrayList<String> instructions;

    @OneToMany(mappedBy = "recipe", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Comment> comment;

}
