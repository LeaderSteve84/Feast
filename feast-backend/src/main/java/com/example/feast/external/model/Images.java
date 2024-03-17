package com.example.feast.external.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Images{
        @JsonProperty("THUMBNAIL")
        public THUMBNAIL tHUMBNAIL;
        @JsonProperty("SMALL")
        public SMALL sMALL;
        @JsonProperty("REGULAR")
        public REGULAR rEGULAR;
        @JsonProperty("LARGE")
        public LARGE lARGE;
    }
