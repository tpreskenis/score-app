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
            <v-img src="../../../../assets/team_logo/baseball/angles_logo.png" max-width="80px" style="left: 38px;"></v-img>
        </div>
        <div style="padding: 35px;"/>
        <div style="text-align: -webkit-center;">
            <v-img src="../../../../assets/team_logo/baseball/mariners-logo.png" max-width="145px" style="right: 3px;"></v-img>
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
            :home_errors="home_errors" 
            :away_errors="away_errors" 
            :home_hits="home_hits"
            :away_hits="away_hits"
            :home_abr="home_abr"
            :away_abr="away_abr"
            v-if="away_score && home_score"/>
          <pitchers            
            :home_pitchers="home_pitchers" 
            :away_pitchers="away_pitchers"/>
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>
<script>
  import scoreboard from "./scorebord"
  import pitchers from "./pitchers"
  export default {
    name:"scoreboard-baseball-card",
    props: {
      home_score: Array,
      away_score: Array,
      home_pitchers: Array,
      away_pitchers: Array,
      home_errors: Number,
      away_errors: Number,
      home_hits: Number,
      away_hits: Number,
      home_abr: String,
      away_abr: String,
    },
    components: {
      scoreboard,
      pitchers
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