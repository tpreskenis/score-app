<template>
  <div>
    <scoreboard/>
    <stats :home_stats="home_stats" :away_stats="away_stats" v-if="home_stats && away_stats"/>
    <stadium :site="site" v-if="site"/>
    <officals :officals="officals" v-if="officals"/>
  </div>
</template>
<script>
import scoreboard from "./scoreboard/basketball_score"
import stats from "./stats/basketball_stats"
import stadium from "./misc/stadium_info"
import officals from "./misc/officals"

  export default {
    name: "basketball_template",
    components: {
      scoreboard,
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
      }
    }
  }
</script>
<style lang="scss" scoped>
</style>