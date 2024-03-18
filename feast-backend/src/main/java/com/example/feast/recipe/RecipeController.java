package com.example.feast.recipe;

import com.example.feast.external.model.Root;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Slf4j
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
//        String uri = edamamBaseUrl + edamamApiId + "/" + edamamAppKeys;
        String requestUri = "https://api.edamam.com/api/recipes/v2?type=public&app_id=7b6bc7d2&app_key=%2086969d07c7c1ae899323ad85b6eca8ef&dishType=Main%20course";
        RestTemplate restTemplate = new RestTemplate();
        var result = restTemplate.getForObject(requestUri, Root.class);
        System.out.println("getRecipes: " + result);
        assert result != null;
        log.info(result.toString());
    }
}
