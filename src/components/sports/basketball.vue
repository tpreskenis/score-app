<template>
  <div>
    <blank-card/>
    <stadium :site="site" v-if="site"/>
    <officals :officals="officals" v-if="officals"/>
  </div>
</template>
<script>
import blankCard from "./blankcard"
import stadium from "./misc/stadium_info"
import officals from "./misc/officals"

  export default {
    name: "basketball_template",
    components: {
      blankCard,
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
      }
    }
  }
</script>
<style lang="scss" scoped>
</style>