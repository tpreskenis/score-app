<template>
    <div>
        <div class="container pitchers">
            <div style="text-align: -webkit-center;">
              <v-list-item-avatar class="pitcher_pic">
                <v-img
                  src="https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/29984.png&w=350&h=254"
                  @click="pictcher_info(home_pitcher,'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/29984.png&w=350&h=254')"
                ></v-img>
              </v-list-item-avatar>
              <p class="pitcher_name">{{pitcher_name(home_pitcher)}}</p>
              <p class="pitcher_win_loss">{{pitcher_win_loss(home_pitcher)}}</p>
            </div>
            <v-divider
              vertical
            ></v-divider>
            <div style="text-align: -webkit-center;">
              <v-list-item-avatar class="pitcher_pic">
                <v-img
                  src="https://s.yimg.com/it/api/res/1.2/odUhiZQ_jvhlmC74_9Sa1w--~A/YXBwaWQ9eW5ld3M7dz0zMDA7aD0yMDA7cT0xMDA-/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/20150420/9202.png"
                  @click="pictcher_info(away_pitcher,'https://s.yimg.com/it/api/res/1.2/odUhiZQ_jvhlmC74_9Sa1w--~A/YXBwaWQ9eW5ld3M7dz0zMDA7aD0yMDA7cT0xMDA-/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/20150420/9202.png')"
                ></v-img>
              </v-list-item-avatar>
              <p class="pitcher_name">{{pitcher_name(away_pitcher)}}</p>
              <p class="pitcher_win_loss">{{pitcher_win_loss(away_pitcher)}}</p>
            </div>
        </div> 
        <p class="pitcher_info_warn">(Click Pitcher For Full Stats)</p>
        <div class="text-center">
            <v-dialog
              v-model="dialog"
              width="342"
              class="rounded-xl"
            >
                <v-card style="text-align: -webkit-center;">
                  <v-card-title class="headline" style="place-content: center;">
                    {{dialog_pitcher_object.display_name}}
                  </v-card-title>
                    <div>
                      <v-list-item-avatar class="pitcher_pic_dialog">
                        <v-img
                          :src="dialog_pitcher_image"
                        ></v-img>
                      </v-list-item-avatar>
                    </div>
                    <v-card flat width="322" class="rounded-xl">
                        <v-simple-table>
                          <template v-slot:default>
                            <tbody>
                              <tr
                                v-for="item in pitcher_stats"
                                :key="item.name"
                              >
                                <td>{{ item.name }}</td>
                                <td>{{ item.number }}</td>
                              </tr>
                            </tbody>
                          </template>
                        </v-simple-table>
                    </v-card>
                  <v-card-actions style="place-content: center;">
                    <v-btn
                      color="grey"
                      icon
                      @click="dialog = false"
                    >
                      <v-icon>mdi-close</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
            </v-dialog>
        </div>
    </div>
</template>
<script>
export default {
    name: "pitchers",
    props: {
      home_pitchers: Array,
      away_pitchers: Array,
    },
    data () {
      return {
        dialog: false,
        dialog_pitcher_object: {
          display_name: null,
          innings_pitched: null,
          era: null,
          earned_runs: null,
          walks:null,
          strike_outs: null,
          hits_allowed: null,
          errors: null
        },
        dialog_pitcher_image: null,
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
          },
          {
            name: 'Eclair',
            calories: 262,
          },
          {
            name: 'Cupcake',
            calories: 305,
          },
          {
            name: 'Gingerbread',
            calories: 356,
          },
          {
            name: 'Jelly bean',
            calories: 375,
          },
          {
            name: 'Lollipop',
            calories: 392,
          },
          {
            name: 'Honeycomb',
            calories: 408,
          },
          {
            name: 'Donut',
            calories: 452,
          },
          {
            name: 'KitKat',
            calories: 518,
          },
        ],
      }
    },
    computed: {
      // This will get the pitcher who won and lost, or who was the most recent pitcher
      away_pitcher: function() {
        if(this.away_pitchers.find(pitcher => pitcher.loss === true) != undefined)
          return this.away_pitchers.find(pitcher => pitcher.loss === true)
        else if(this.away_pitchers.find(pitcher => pitcher.win === true) != undefined)
          return this.away_pitchers.find(pitcher => pitcher.win === true)
        else 
          return this.away_pitchers[this.away_pitchers.length - 1]
      },
      home_pitcher: function() {
        if(this.home_pitchers.find(pitcher => pitcher.loss === true) != undefined)
          return this.home_pitchers.find(pitcher => pitcher.loss === true)
        else if(this.home_pitchers.find(pitcher => pitcher.win === true) != undefined)
          return this.home_pitchers.find(pitcher => pitcher.win === true)
        else 
          return this.home_pitchers[this.home_pitchers.length - 1]
      },
      pitcher_stats: function() {
          return [ 
              {
                name: 'Innings',
                number: this.dialog_pitcher_object.innings_pitched,
              },
              {
                name: 'ERA',
                number: this.dialog_pitcher_object.era,
              },
              {
                name: 'Runs',
                number: this.dialog_pitcher_object.earned_runs,
              },
              {
                name: 'Hits',
                number: this.dialog_pitcher_object.hits_allowed,
              },
              {
                name: 'Strike Outs',
                number: this.dialog_pitcher_object.strike_outs,
              },
              {
                name: 'Pitch Count',
                number: this.dialog_pitcher_object.pitch_count,
              },
              {
                name: 'Walks',
                number: this.dialog_pitcher_object.walks,
              },
              {
                name: 'Errors',
                number: this.dialog_pitcher_object.errors,
              },
          ]
      }
    },
    methods: {
      pitcher_name: function(pitcher) {
        return pitcher.first_name.charAt(0) + '. ' + pitcher.last_name
      },
      pitcher_win_loss: function(pitcher) {
        if(pitcher.loss == true)
          return "(Loss)"
        if(pitcher.win == true)
          return "(Win)"
        else 
          return "On Mound"       
      },
      pictcher_info: function(pitcher,image) {
        this.dialog = !this.dialog
        this.dialog_pitcher_object = pitcher
        this.dialog_pitcher_image = image
      }
    }
  }
</script>
<style lang="scss" scoped>
.pitchers {
    margin-top: 10px;;
    display: flex;
    justify-content: space-evenly;
}
.pitcher_pic {
    height: 50px !important;
    width: 50px !important;
    cursor: pointer;
}
.pitcher_pic_dialog {
    height: 100px !important;
    min-width: 40px;
    width: 100px !important;
}
.pitcher_info_warn {
  margin-bottom: 0px;
    text-align: -webkit-center;
    font-size: x-small;
    font-style: italic;
    color: grey;
}
.pitcher_name {
  margin-bottom: 0px;
}
.pitcher_win_loss {
  margin-bottom: 0px;
  font-weight: bold;
}
</style>
