package com.example.feast.external.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.ArrayList;

public class Root {
    public int from;
    @JsonProperty("to")
    public int myto;
    public int count;
    public Links _links;
    public ArrayList<Hit> hits;
}


