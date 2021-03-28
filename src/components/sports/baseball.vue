<template>
  <div>
    <scoreboard 
      :away_score="away_score" 
      :home_score="home_score" 
      :away_pitchers="away_pitchers" 
      :home_pitchers="home_pitchers" 
      :home_errors="home_errors"
      :away_errors="away_errors"
      :home_hits="home_stats.hits" 
      :away_hits="away_stats.hits" 
      :home_abr="home_team.abbreviation" 
      :away_abr="away_team.abbreviation" 
      v-if="away_score && home_score && away_pitchers && home_pitchers && home_stats && away_stats"/>
    <player-stats/>
    <stats 
      :home_stats="home_stats" 
      :away_stats="away_stats" 
      v-if="home_stats && away_stats"/>
    <stadium 
      :site="site" 
      v-if="site"/>
    <officals 
      :officals="officals" 
      v-if="officals"/>
  </div>
</template>
<script>
import scoreboard from "./scoreboard/baseball/card"

import stats from "./stats/baseball_stats"

import officals from "./misc/officals"

import stadium from "./misc/stadium_info"

import playerStats from "./players/baseball/player_slider"

  export default {
    name:"baseball-template",
    components: {
      scoreboard,
      stats,
      officals,
      stadium,
      playerStats
    },
    data: () => ({
    }),
    computed: {
      site: function() {
        return this.$store.state.mlb_game.event_information
      },
      officals: function() {
        return this.$store.state.mlb_game.officials
      },
      home_stats: function() {
        return this.$store.state.mlb_game.home_batter_totals
      },
      away_stats: function() {
        return this.$store.state.mlb_game.away_batter_totals
      },
      // Scoreboard
      home_score: function() {
        return this.$store.state.mlb_game.home_period_scores
      },
      away_score: function() {
        return this.$store.state.mlb_game.away_period_scores
      },
      home_pitchers: function() {
        return this.$store.state.mlb_game.home_pitchers
      },
      away_pitchers: function() {
        return this.$store.state.mlb_game.away_pitchers
      },
      away_errors: function() {
        return this.$store.state.mlb_game.away_errors
      },
      home_errors: function() {
        return this.$store.state.mlb_game.home_errors
      },
      home_team: function() {
        return this.$store.state.mlb_game.home_team
      },
      away_team: function() {
        return this.$store.state.mlb_game.away_team
      },
    }
  }
</script>
<style lang="scss" scoped>
</style>