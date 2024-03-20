package com.example.feast.recipe;

import com.example.feast.external.model.Root;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Objects;

@RequiredArgsConstructor
@Slf4j
@RestController
@RequestMapping("/api/v1/recipes")
public class RecipeController {
    @Value("${edamam_base_url}")
    private String edamamBaseUrl;

    @Value("${edamam_api_id}")
    private String edamamApiId;

    @Value("${edamam_api_app_keys}")
    private String edamamAppKeys;

    private final RecipeRepository recipeRepository;

    @GetMapping("/")
    public List<Recipe> getRecipes() {
        String uri = edamamBaseUrl + "?type=public&app_id=" + edamamApiId + "&app_key=" + edamamAppKeys;
        RestTemplate restTemplate = new RestTemplate();
//        Root response = restTemplate.getForObject(uri, Root.class);
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Language", "en");
        HttpEntity<String> request = new HttpEntity<>(headers);
        Root response = restTemplate.exchange(uri, HttpMethod.GET, request, Root.class).getBody();
        assert response != null;
        response.hits.forEach(r -> {
            Recipe recipe = new Recipe(
                    r.recipe.image,
                    r.recipe.label,
                    r.recipe.ingredientLines,
                    r.recipe.instructions,
                    List.of(null),
                    List.of(null)
            );
            recipeRepository.save(recipe);
        });
       return recipeRepository.findAll();
    }
}
