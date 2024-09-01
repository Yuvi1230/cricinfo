package com.CrickInfo.repositories;

import com.CrickInfo.entities.Match;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MatchRepo extends JpaRepository<Match,Integer> {
    //fetching the match
    Optional<Match> findByTeamHeading(String teamHeading);
}
