package com.example.webprojektfinal.data;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Champion {
    @Id
    private String name;
    private Integer hatred;

    public Champion(){}


    public Champion( String name, Integer hatred) {
        this.name = name;
        this.hatred = hatred;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getHatred() {
        return hatred;
    }

    public void setHatred(Integer hatred) {
        this.hatred = hatred;
    }

    @Override
    public String toString() {
        return "Champion{" +
                ", name='" + name + '\'' +
                ", hatred=" + hatred +
                '}';
    }
}
