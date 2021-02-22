<template>
  <div>
    <news-slider/>
    <blank-card/>
    <stadium :site="site" v-if="site"/>
  </div>
</template>
<script>
import newsSlider from "./slider/slider"
import blankCard from "./blankcard"
import stadium from "./misc/stadium_info"

  export default {
    name: "baseball_template",
    components: {
      newsSlider,
      blankCard,
      stadium
    },
    data: () => ({
    }),
    computed: {
      site: function() {
        return this.$store.state.mlb_game.event_information
      }
    }
  }
</script>
<style lang="scss" scoped>
</style>