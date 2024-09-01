package com.CrickInfo.services;

import com.CrickInfo.entities.Match;

import java.util.List;
import java.util.Map;

public interface MatchService {
    //we will build getallmatches get live matches and get cwc points table
    List<Match> getAllMatches();
    List<Match> getLiveMatches();
    List <List<String>> getPointsTable();
    List <Match> getMatchHistory();

}
