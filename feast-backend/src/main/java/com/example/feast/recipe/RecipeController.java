package com.example.feast.recipe;

import com.example.feast.external.model.Root;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@RestController
@RequestMapping("/api/v1/recipes")
public class RecipeController {
    @Value("{edamam.base.url}")
    private String edamamBaseUrl;

    @Value("{edamam.api.id}")
    private String edamamApiId;

    @Value("{edamam.api.app_keys}")
    private String edamamAppKeys;

    @GetMapping("/")
    public void getRecipes() {
        String uri = edamamBaseUrl + edamamApiId + "/" + edamamAppKeys;
        RestTemplate restTemplate = new RestTemplate();
        var result = restTemplate.getForObject(uri, Root.class);
        System.out.println(result);
    }
}
