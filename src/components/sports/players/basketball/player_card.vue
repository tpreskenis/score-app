<template>
  <div>
    <v-card
      class="mx-auto my-12 rounded-xl"
      depressed
      max-width="344"
      flat
      style="text-align: -webkit-center;"
    >

    <v-list-item-avatar
      size="80"
      >
      <v-img
        aspect-ratio="1"
        class="rounded-self"
        :src="profile_pictures"
        @click="batter_info(profile_pictures)"
      ></v-img>
    </v-list-item-avatar>
    <h2 class="name_text">{{player_data.display_name}} - {{player_data.position}}</h2>
    <h4 class="job_text">{{player_data.batting_highlights}}</h4>
    </v-card>
    <div class="text-center">
      <v-dialog
        v-model="dialog"
        width="342"
        class="rounded-xl"
      >
          <v-card style="text-align: -webkit-center;">
            <v-card-title class="headline" style="place-content: center;">
              {{player_data.display_name}}
            </v-card-title>
              <div>
                <v-list-item-avatar class="batter_pic_dialog">
                  <v-img
                    :src="dialog_batter_image"
                  ></v-img>
                </v-list-item-avatar>
              </div>
              <v-card flat width="322" class="rounded-xl">
                  <v-simple-table>
                    <template v-slot:default>
                      <tbody>
                        <tr
                          v-for="item in batting_stats"
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
      name:"basketball-card",
      props: {
        player_data: Object
      },
    data () {
      return {
        dialog: false,
        dialog_batter_image: null,
      }
    },
      computed: {
        batting_stats: function() {
          return [ 
              {
                name: 'Order',
                number: this.player_data.bat_order,
              },
              {
                name: 'Batting',
                number: this.player_data.batting_highlights,
              },
              {
                name: 'Walks',
                number: this.player_data.walks,
              },
              {
                name: 'AVG.',
                number: this.player_data.avg_string,
              },
              {
                name: 'OBP.',
                number: this.player_data.obp_string,
              },
              {
                name: 'OPS.',
                number: this.player_data.ops_string,
              },
              {
                name: 'SLG.',
                number: this.player_data.slg_string,
              },
              {
                name: 'Strike Out Rate',
                number: this.player_data.strikeout_rate,
              },
          ]
        },
        profile_pictures: function() {
          // These images would most likly be stored on the backend, for now we will use the image location from ESPN
          // Home Players 
          if (this.player_data.display_name == 'LeBron James')
            return 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1966.png&w=350&h=254'
          if (this.player_data.display_name == 'Dwyane Wade')
            return 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1987.png&w=350&h=254'
          if (this.player_data.display_name == 'Chris Bosh')
            return 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1977.png&w=350&h=254'
          if (this.player_data.display_name == 'Mario Chalmers')
            return 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3419.png&w=350&h=254'
          if (this.player_data.display_name == 'Shane Battier')
            return 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/976.png&w=350&h=254'
          if (this.player_data.display_name == 'Mike Miller')
            return 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/558.png&w=350&h=254'
          if (this.player_data.display_name == 'Norris Cole')
            return 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6431.png&w=350&h=254'
          if (this.player_data.display_name == 'Udonis Haslem')
            return 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2184.png&w=350&h=254'
          if (this.player_data.display_name == 'James Jones')
            return 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2009.png&w=350&h=254'
          if (this.player_data.display_name == 'Juwan Howard')
            return 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/351.png&w=350&h=254'
          if (this.player_data.display_name == 'Ronny Turiaf')
            return 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2789.png&w=350&h=254'
          if (this.player_data.display_name == 'Terrel Harris')
            return 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6490.png&w=350&h=254'
          // Away Players
          if (this.player_data.display_name == 'Kevin Durant')
            return 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3202.png&w=350&h=254'
          if (this.player_data.display_name == 'Russell Westbrook')
            return 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3468.png&w=350&h=254'
          if (this.player_data.display_name == 'Serge Ibaka')
            return 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3439.png&w=350&h=254'
          if (this.player_data.display_name == 'Kendrick Perkins')
            return 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2018.png&w=350&h=254'
          if (this.player_data.display_name == 'Thabo Sefolosha')
            return 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3028.png&w=350&h=254'
          if (this.player_data.display_name == 'James Harden')
            return 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3992.png&w=350&h=254'          
          if (this.player_data.display_name == 'Derek Fisher')
            return 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/246.png&w=350&h=254'
          if (this.player_data.display_name == 'Nick Collison')
            return 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1978.png&w=350&h=254'
          if (this.player_data.display_name == 'Daequan Cook')
            return 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3196.png&w=350&h=254'
          if (this.player_data.display_name == 'Cole Aldrich')
            return 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4267.png&w=350&h=254'      
          if (this.player_data.display_name == 'Lazar Hayward')
            return 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4277.png&w=350&h=254'   
          if (this.player_data.display_name == 'Royal Ivey')
            return 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2387.png&w=350&h=254'   
          else 
            return ''
        },
      },
    methods: {
      batter_info: function(image) {
        this.dialog = !this.dialog
        this.dialog_batter_image = image
      }
    }
  }
</script>
<style lang="scss" scoped>
.dummy_text {
    font-family: 'Nunito', sans-serif;
    margin-left: 5%;
    position: relative;
    bottom: -10px;
}
.rounded-self {
    contain: content;
    width: 35%;
    border-radius: 50%;
    cursor: pointer;
}
.button_text {
    font-family: 'Nunito', sans-serif;
}
.name_text {
    font-family: 'Nunito', sans-serif;
    position: relative;
}
.job_text {
    font-family: 'Nunito', sans-serif;
    position: relative;
    color: #2185FF;
}
.title_card_name {
    font-family: 'Nunito', sans-serif;
    margin-left: 5%;
    position: relative;
    bottom: -10px;
}
.batter_pic_dialog {
    height: 100px !important;
    min-width: 40px;
    width: 100px !important;
    margin: 0px !important;
    margin-bottom: 15px !important;
}
</style>