<template>
  <div>
    <scoreboard
      :away_score="away_score" 
      :home_score="home_score" 
      :home_abr="home_team.abbreviation" 
      :away_abr="away_team.abbreviation" 
      v-if="away_score && home_score"
      />
    <player-stats/>
    <stats 
      :home_stats="home_stats" 
      :away_stats="away_stats" 
      v-if="home_stats && away_stats"
      />
    <stadium 
      :site="site" 
      v-if="site"
      />
    <officals 
      :officals="officals" 
      v-if="officals"
      />
  </div>
</template>
<script>
import scoreboard from "./scoreboard/basketball/card"
import playerStats from "./players/basketball/player_slider"
import stats from "./stats/basketball_stats"
import stadium from "./misc/stadium_info"
import officals from "./misc/officals"

  export default {
    name:"basketball-template",
    components: {
      scoreboard,
      playerStats,
      stats,
      stadium,
      officals
    },
    data: () => ({
    }),
    computed: {
      site: function() {
        return this.$store.state.nba_game.event_information
      },
      officals: function() {
        return this.$store.state.nba_game.officials
      },
      home_stats: function() {
        return this.$store.state.nba_game.home_totals
      },
      away_stats: function() {
        return this.$store.state.nba_game.away_totals
      },
      // Scoreboard
      home_score: function() {
        return this.$store.state.nba_game.home_period_scores
      },
      away_score: function() {
        return this.$store.state.nba_game.away_period_scores
      },
      home_team: function() {
        return this.$store.state.nba_game.home_team
      },
      away_team: function() {
        return this.$store.state.nba_game.away_team
      },
    }
  }
</script>
<style lang="scss" scoped>
</style>