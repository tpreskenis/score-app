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
      name:"baseball-card",
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
          // These images would most likly be stored on the backend, for now we will use the image location online
          // Away Team 
          if (this.player_data.display_name == 'Dustin Ackley')
            return 'https://s.yimg.com/it/api/res/1.2/X8B83AtHcA0afc_M.4nICg--~A/YXBwaWQ9eW5ld3M7dz0zMDA7aD0yMDA7cT0xMDA-/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/03222019/8648.1.png'
          if (this.player_data.display_name == 'Franklin Gutierrez')
            return 'https://s.yimg.com/it/api/res/1.2/cT0pCDa2dODkObplIwzcqw--~A/YXBwaWQ9eW5ld3M7dz0zMDA7aD0yMDA7cT0xMDA-/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/10162017/7644.1.png'
          if (this.player_data.display_name == 'Kyle Seager')
            return 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/30819.png'
          if (this.player_data.display_name == 'Jesús Montero')
            return 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/29448.png&w=350&h=254'
          if (this.player_data.display_name == 'Justin Smoak')
            return 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/30175.png'
          if (this.player_data.display_name == 'Miguel Olivo')
            return 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/5355.png&w=350&h=254'
          if (this.player_data.display_name == 'Casper Wells')
            return 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/30069.png&w=350&h=254'
          if (this.player_data.display_name == 'Chone Figgins')
            return 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/5302.png&w=350&h=254'
          if (this.player_data.display_name == 'Brendan Ryan')
            return 'https://s.yimg.com/it/api/res/1.2/H8rgUH4N1URKcf_3GFbE3A--~A/YXBwaWQ9eW5ld3M7dz0zMDA7aD0yMDA7cT0xMDA-/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/20170403/8042.png'
          // Home Batters
          if (this.player_data.display_name == 'Mike Trout')
            return 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/30836.png&w=350&h=254'
          if (this.player_data.display_name == 'Torii Hunter')
            return 'https://s.yimg.com/it/api/res/1.2/V12llZoLhFFj_Hz6xsU6WA--~A/YXBwaWQ9eW5ld3M7dz0zMDA7aD0yMDA7cT0xMDA-/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/20150406/5884.png'
          if (this.player_data.display_name == 'Albert Pujols')
            return 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/4574.png&w=350&h=254'
          if (this.player_data.display_name == 'Kendrys Morales')
            return 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/6188.png'
          if (this.player_data.display_name == 'Alberto Callaspo')
            return 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/28541.png&w=350&h=254'
          if (this.player_data.display_name == 'Howie Kendrick')
            return 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/6524.png&w=350&h=254'          
          if (this.player_data.display_name == 'Erick Aybar')
            return 'https://a.espncdn.com/i/headshots/mlb/players/full/6522.png'
          if (this.player_data.display_name == 'Mark Trumbo')
            return 'https://a.espncdn.com/i/headshots/mlb/players/full/29322.png'
          if (this.player_data.display_name == 'Bobby Wilson')
            return 'https://a.espncdn.com/i/headshots/mlb/players/full/29115.png'
          if (this.player_data.display_name == 'Maicer Izturis')
            return 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/6087.png&w=350&h=254'      
          if (this.player_data.display_name == 'Chris Iannetta')
            return 'https://lh3.googleusercontent.com/proxy/cXo8BdhM_TmzWm5b3j7QfFE1EvOmnvQS3Ra1lEXFvkPWP_CB8vAUTRJ-XfqgyX_yDt70sCFHX5wk51-Oon1evDqLh9k7USrL7V1aex8FBivUeIwBTLQuRn8sX4dh9v0-dghYSplPsk0pDIx70ft6QmdZSun2LNMP'   
          if (this.player_data.display_name == 'Peter Bourjos')
            return 'https://s.yimg.com/it/api/res/1.2/vPS8KF1HVdRpYKrBS6n.bA--~A/YXBwaWQ9eW5ld3M7dz0zMDA7aD0yMDA7cT0xMDA-/https://s.yimg.com/xe/i/us/sp/v/mlb_cutout/players_l/04182019/8777.png'   
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