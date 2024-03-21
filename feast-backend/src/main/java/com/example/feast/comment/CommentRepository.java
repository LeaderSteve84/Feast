package com.example.feast.comment;

import com.example.feast.like.Like;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface CommentRepository extends JpaRepository<Comment, UUID> {

    public Comment findByUser_EmailAddressAndId(String userEmail, UUID commentId);
}
