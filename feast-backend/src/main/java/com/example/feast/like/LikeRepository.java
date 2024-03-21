package com.example.feast.like;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface LikeRepository extends JpaRepository<Like, UUID> {

    public Like findByUser_EmailAddressAndRecipe_Id(String userEmail, UUID recipeId);
}
