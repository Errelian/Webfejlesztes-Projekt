package com.example.webprojektfinal.exception;

public class ChampionNotFoundException extends RuntimeException{
    public ChampionNotFoundException(String name){
        super("Champion not found: " + name);
    }
}
