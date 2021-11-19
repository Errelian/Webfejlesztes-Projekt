package com.example.webprojektfinal.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface ChampionRepository extends JpaRepository<Champion, Long> {

    @Query("SELECT t FROM Champion t WHERE t.name = ?1")
    Optional<Champion> findById(String championName);
}
