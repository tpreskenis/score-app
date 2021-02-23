<template>
  <div>
    <scoreboard/>
    <news-slider/>
    <stats :home_stats="home_stats" :away_stats="away_stats" v-if="home_stats && away_stats"/>
    <stadium :site="site" v-if="site"/>
    <officals :officals="officals" v-if="officals"/>
  </div>
</template>
<script>
import newsSlider from "./slider/slider"
import scoreboard from "./scoreboard/baseball_score"

import stats from "./stats/baseball_stats"

import officals from "./misc/officals"

import stadium from "./misc/stadium_info"

  export default {
    name: "baseball_template",
    components: {
      newsSlider,
      scoreboard,
      stats,
      officals,
      stadium
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
      }
    }
  }
</script>
<style lang="scss" scoped>
</style>