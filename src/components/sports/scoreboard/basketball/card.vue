<template>
  <v-card
    class="mx-auto my-12 rounded-xl"
    depressed
    max-width="344"
    min-width="280"
    min-height="200"
    flat
  >
  <v-card-text>
      <div class="container flex_logo">
        <div style="text-align: -webkit-center;">
            <v-img src="https://1000logos.net/wp-content/uploads/2017/04/Miami-Heat-Logo.png" max-width="110px" style="left: 15px;"></v-img>
        </div>
        <div style="padding: 35px;"/>
        <div style="text-align: -webkit-center;">
            <v-img src="https://cdn.freebiesupply.com/images/large/2x/oklahoma-city-thunder-logo-transparent.png" max-width="80px" style="right: 25px;"></v-img>
        </div>
      </div>
      <div class="container flex_stats">
        <div style="text-align: -webkit-center;">
            <p :class="home_score_class">{{this.home_sum}}</p>
        </div>
        <v-divider
          vertical
        ></v-divider>
        <div style="text-align: -webkit-center;">
            <p :class="away_score_class">{{this.away_sum}}</p>
        </div>
      </div>    
  </v-card-text>
        <v-card-actions style="place-content: center; margin-top: -20px;">
        <v-btn
            icon
            @click="show = !show"
        >
            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
        </v-card-actions>

        <v-expand-transition>
      <div v-show="show">
        <v-card-text>
          <scoreboard 
            :home_score="home_score" 
            :away_score="away_score" 
            :home_abr="home_abr"
            :away_abr="away_abr"
            v-if="away_score && home_score"
            />
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>
<script>
  import scoreboard from "./scoreboard"

  export default {
    name:"scoreboard-basketball-card",
    props: {
      home_score: Array,
      away_score: Array,
      home_abr: String,
      away_abr: String
    },
    components: {
        scoreboard
    },
    data () {
      return {
        show: false,
      }
    },
    computed: {
      home_sum: function() {
        return this.home_score.reduce(function(a, b){
          return a + b;
        }, 0);
      },
      away_sum: function() {
        return this.away_score.reduce(function(a, b){
          return a + b;
        }, 0);
      },
      home_score_class: function() {
        if (this.home_sum >= this.away_sum)
          return "score_win"
        else 
          return "score_loss"
      },
      away_score_class: function() {
        if (this.away_sum >= this.home_sum)
          return "score_win"
        else 
          return "score_loss"
      },
    },
    methods: {
    }
  }
</script>
<style lang="scss" scoped>
.score_loss {
    font-size: xx-large;
    margin-bottom: 0px !important;
}
.score_win {
    font-size: xx-large;
    margin-bottom: 0px !important;
    color: #000;
}

.flex_logo {
    display: flex;
    justify-content: space-evenly;
}
.flex_stats {
    display: flex;
    justify-content: space-evenly;
}

</style>