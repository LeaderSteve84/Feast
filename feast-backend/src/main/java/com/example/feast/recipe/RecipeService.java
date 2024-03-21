package com.example.feast.recipe;

import com.example.feast.external.model.Root;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Service
@RequiredArgsConstructor
public class RecipeService {
    @Value("${edamam_base_url}")
    private String edamamBaseUrl;

    @Value("${edamam_api_id}")
    private String edamamApiId;

    @Value("${edamam_api_app_keys}")
    private String edamamAppKeys;

    public final RecipeRepository recipeRepository;

    public List<Recipe> getAllRecipes() {

        String mainCourse = "Main course";
        String uri = edamamBaseUrl + "?type=public&app_id=" + edamamApiId + "&app_key=" + edamamAppKeys + "&dishType=" + mainCourse;
        RestTemplate restTemplate = new RestTemplate();
//        Root response = restTemplate.getForObject(uri, Root.class);
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Language", "en");
        HttpEntity<String> request = new HttpEntity<>(headers);
        Root response = restTemplate.exchange(uri, HttpMethod.GET, request, Root.class).getBody();
        assert response != null;
        response.hits.forEach(r -> {
            Recipe recipe = new Recipe();
            recipe.setImage(r.recipe.images.lARGE != null ? r.recipe.images.lARGE.url : r.recipe.image);
            recipe.setLabel(r.recipe.label);
            recipe.setRecipeId(r.recipe.externalId);
            recipe.setIngredientLines(r.recipe.ingredientLines);
            recipe.setInstructions(r.recipe.instructions);
            recipeRepository.save(recipe);
        });
        return recipeRepository.findAll();
    }


}
