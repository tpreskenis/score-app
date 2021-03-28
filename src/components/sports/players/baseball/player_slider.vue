<template>
    <v-card
    class="mx-auto my-12 rounded-xl"
    depressed
    max-width="344"
    min-width="280"
    flat
  >
<h1 class="batting_text">Batting</h1>
  <batting-switch style="bottom: -15px;"
    :home_abr="home_team.abbreviation" 
    :away_abr="away_team.abbreviation" 
    v-if="away_team && home_team"
    />
  <p class="batter_info_warn">(Click Batter For Full Stats)</p>
  <swiper class="swiper" :options="swiperOption" v-if="!this.$store.state.away_home_baseball">
      <swiper-slide v-for="(item, i) in mlb_player_data_home" :key="i">
        <slider-card :player_data="item"/>
      </swiper-slide>
     <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
  <swiper class="swiper" :options="swiperOption" v-if="this.$store.state.away_home_baseball">
      <swiper-slide v-for="(item, i) in mlb_player_data_away" :key="i">
        <slider-card :player_data="item"/>
      </swiper-slide>
     <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
  </v-card>
</template>
<script>
  import battingSwitch from "./team_switch"
  import sliderCard from "./player_card"

export default {
    name: "baseball-slider",
    components: {
        battingSwitch,
        sliderCard
    },
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        },
      }
    },
    computed: {
      mlb_player_data_away: function() {
        return this.$store.state.mlb_game.away_batters
      },
      mlb_player_data_home: function() {
        return this.$store.state.mlb_game.home_batters
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
.batting_text {
    font-family: 'Nunito', sans-serif;
    text-align-last: center;
    position: relative;
    bottom: -10px;
}
.batter_info_warn {
    position: relative;
    bottom: -25px;
    margin-bottom: 0px;
    text-align: -webkit-center;
    font-size: x-small;
    font-style: italic;
    color: grey;
}
</style>
