package com.example.webprojektfinal.data;


import com.example.webprojektfinal.exception.ChampionNotFoundException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class ChampionController {

    Logger logger = LoggerFactory.getLogger(ChampionController.class);

    @Autowired
    private ChampionRepository repository;

    @GetMapping("/example/fill")
    List<Champion> exampleFill(){
        List<Champion> champions= new ArrayList<>();
        champions.add(new Champion("Master Jóska", 11));
        champions.add(new Champion("Volibeááá", 4));
        champions.add(new Champion("Queen", -2000));
        champions.add(new Champion("Caster Minion", 5));
        champions.add(new Champion("Blitzcrank", 5555));
        champions.add(new Champion("Vex", 0));
        repository.saveAll(champions);
        return champions;
    }

    @GetMapping("/example")
    Champion example(){
        return new Champion("Aphelios", 10);
    }

    @GetMapping("/champions")
    List<Champion> findAll() {
        return repository.findAll();
    }

    @GetMapping("/champions/{championName}/{hatredValue}")
    Champion newChampion(@PathVariable String championName, @PathVariable Integer hatredValue) {
        return repository.save(new Champion(championName, hatredValue));
    }

    @GetMapping("/champions/{name}")
    Champion findChampion(@PathVariable String name) {
        return repository
                .findById(name)
                .orElseThrow(() -> new ChampionNotFoundException(name));
    }

    @PutMapping("/champions/{name}")
    Champion saveOrUpdate(@RequestBody Champion madeChampion, @PathVariable String name){
        return repository.findById(name)
                .map(champion -> {
                    champion.setName(name);
                    champion.setHatred(madeChampion.getHatred());
                    return repository.save(champion);
                })
                .orElseGet(() -> {
                    madeChampion.setName(name);
                    return repository.save(madeChampion);
                });
    }

    @DeleteMapping("/champions/{name}")
    void deleteChampion(@PathVariable Long name) {
        repository.deleteById(name);
    }
}