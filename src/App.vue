<template>
  <v-app>
    <v-app-bar
      app
      style="height: 70px;"
      color="white"
      dark
      flat
    >
      <div class="container" style="display: flex; justify-content: center;">
        <h1 style="position: relative;" class="app_title">{{page_title}}</h1>

        <div style="width: 180px;"></div>

        <!--This will open up my GitHub -->
        <v-btn
          style="position: relative;" 
          :ripple="false"
          id="no-background-hover"
          class="app_title_button"
          icon
        >

          <v-icon :color="topIconColor" class="app_title_button_icon" large>fa-sync-alt</v-icon>
        </v-btn>
      </div>
    </v-app-bar>
        <v-main :class="background_class">
            <transition name="fade" mode="out-in">
            <sports-layout v-if="top_level_navigation == 'sports'" key="sports"/>
            <info-layout v-if="top_level_navigation == 'info'" key="info"/>
            </transition>
        </v-main>
    <vue-footer @nav_clicked="navigation"/>
  </v-app>
</template>

<script>

import vueFooter from './components/btn_footer';

import infoLayout from './components/info/layout';
import sportsLayout from './components/sports/layout';


export default {
  name: 'App',

  components: {
    vueFooter,
    sportsLayout,
    infoLayout
  },

  data: () => ({
    page_title: "Scores",
    top_level_navigation: 'sports',
  }),
  computed: {
    background_class: function() {
      if (this.top_level_navigation == 'sports' && this.$store.state.sport_checkbox) {
        // Basketball
        return "basketball_background"
      }
      else if (this.top_level_navigation == 'sports' && !this.$store.state.sport_checkbox) {
        // Baseball
        return "baseball_background"
      }
      else if (this.top_level_navigation == 'info') {
        // Info
        return "info_background"
      }
      else 
        return "info_background"
    },
    topIconColor: function() {
      if (this.top_level_navigation == 'sports' && this.$store.state.sport_checkbox) {
        // Basketball
        return "rgba(255,132,0,1)"
      }
      else if (this.top_level_navigation == 'sports' && !this.$store.state.sport_checkbox) {
        // Baseball
        return "rgba(170,10,10,1)"
      }
      else if (this.top_level_navigation == 'info') {
        // Info
        return "#1E88E5"
      }
      else 
        return "#1E88E5"
    }
  },
  methods: {
    navigation (value) {
      this.top_level_navigation = value
      if (this.top_level_navigation == 'sports')
        this.page_title = "Scores"
      if (this.top_level_navigation == 'info')
        this.page_title = "Information"
    },
    mlbDataFetch() {
      // Dev Use: http://localhost:3000/mlb_game
      // Actual Use: "https://scoredatabaseapi.azurewebsites.net/mlb_game"
      fetch("https://scoredatabaseapi.azurewebsites.net/mlb_game", {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
      })
        .then(async response => {
          const data = await response.json();
          this.$store.commit('updating_mlb',data[0])
          console.log(this.$store.state.mlb_game)
          // check for error response
          if (!response.ok) {
            // get error message from body or default to response statusText
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
          }
        })
        .catch(error => {
          this.errorMessage = error;
          console.error("There was an error!", error);
        });
    },
    nbaDataFetch() {
      // Dev Use: http://localhost:3000/nba_game
      // Actual Use: "https://scoredatabaseapi.azurewebsites.net/nba_game"
      fetch("https://scoredatabaseapi.azurewebsites.net/nba_game", {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
      })
        .then(async response => {
          const data = await response.json();
          this.$store.commit('updating_nba',data[0])
          console.log(this.$store.state.nba_game)
          // check for error response
          if (!response.ok) {
            // get error message from body or default to response statusText
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
          }
        })
        .catch(error => {
          this.errorMessage = error;
          console.error("There was an error!", error);
        });
    } 
  },
  created() {
    this.mlbDataFetch();
    this.nbaDataFetch();
  }
};
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Maven+Pro:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@700&display=swap');

// This alters Vuetifys Light Theme
.theme--light.v-bottom-navigation .v-btn:not(.v-btn--active) {
    color: rgba(0, 0, 0, 0.3) !important;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.v-toolbar__content {
  display: block !important;
}

</style>
<style scoped lang="scss">

// Using Maven Pro --> Similar to ars-maquette
.app_title {
  font-family: 'Nunito', sans-serif;
  color: black;
}

.app_title_button {
  margin: 0px !important;
}

.app_title_button_icon{
   transition: all .2s ease-in-out;
}

.app_title_button:active {
  .app_title_button_icon{
    transform: scale(0.75) rotate(180deg);
  }
}

#no-background-hover::before {
   background-color: transparent !important;
}

.baseball_background {
  margin-bottom: 56px;
  background: linear-gradient(180deg, rgba(170,10,10,1) 0%, rgba(252,170,170,1) 27%, rgba(247,247,247,1) 67%, rgba(235,235,235,1) 100%);
}
.basketball_background {
  margin-bottom: 56px;
  background: linear-gradient(180deg, rgba(255,132,0,1) 0%, rgba(224,146,0,1) 27%, rgba(235,235,235,1) 67%, rgba(235,235,235,1) 100%);
}
.info_background {
  margin-bottom: 56px;
  background: linear-gradient(180deg, rgba(0,168,255,1) 0%, rgba(0,140,213,1) 27%, rgba(235,235,235,1) 67%, rgba(235,235,235,1) 100%);
}

</style>