<template>
  <div>
    <blank-card/>
    <stadium :site="site" v-if="site"/>
  </div>
</template>
<script>
import blankCard from "./blankcard"
import stadium from "./misc/stadium_info"

  export default {
    name: "basketball_template",
    components: {
      blankCard,
      stadium
    },
    data: () => ({
    }),
    computed: {
      site: function() {
        return this.$store.state.nba_game.event_information
      }
    }
  }
</script>
<style lang="scss" scoped>
</style>