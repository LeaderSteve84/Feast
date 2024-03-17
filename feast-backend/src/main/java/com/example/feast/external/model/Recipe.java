package com.example.feast.external.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.ArrayList;

public class Recipe{
        public String uri;
        public String label;
        public String image;
        public Images images;
        public String source;
        public String url;
        public String shareAs;
        @JsonProperty("yield")
        public int myyield;
        public ArrayList<String> dietLabels;
        public ArrayList<String> healthLabels;
        public ArrayList<String> cautions;
        public ArrayList<String> ingredientLines;
        public ArrayList<Ingredient> ingredients;
        public int calories;
        public int glycemicIndex;
        public int inflammatoryIndex;
        public int totalCO2Emissions;
        public String co2EmissionsClass;
        public int totalWeight;
        public ArrayList<String> cuisineType;
        public ArrayList<String> mealType;
        public ArrayList<String> dishType;
        public ArrayList<String> instructions;
        public ArrayList<String> tags;
        public String externalId;
        public TotalNutrients totalNutrients;
        public TotalDaily totalDaily;
        public ArrayList<Digest> digest;
    }
