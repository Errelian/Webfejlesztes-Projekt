package com.example.webprojektfinal.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;


@Repository
public interface ChampionRepository extends JpaRepository<Champion, Long> {

    @Query("SELECT t FROM Champion t WHERE t.name = ?1")
    Optional<Champion> findByName(String name);

    @Modifying
    @Transactional
    void deleteByName(String name);
}
