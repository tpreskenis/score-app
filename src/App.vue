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
        <h1 style="position: relative; bottom: -10px;" class="app_title">{{page_title}}</h1>

        <div style="width: 180px;"></div>

        <!--This will open up my GitHub -->
        <v-btn
          style="position: relative; bottom: -10px;" 
          :ripple="false"
          id="no-background-hover"
          class="app_title_button"
          icon
        >

          <v-icon color="#1E88E5" class="app_title_button_icon" large>fa-sync-alt</v-icon>
        </v-btn>
      </div>
    </v-app-bar>
        <v-main class="app_background">
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
  methods: {
    navigation (value) {
      this.top_level_navigation = value
      if (this.top_level_navigation == 'sports')
        this.page_title = "Scores"
      if (this.top_level_navigation == 'info')
        this.page_title = "Information"
    },
    mlbDataFetch() {
      // GET request using fetch with error handling
      fetch("https://scoredatabaseapi.azurewebsites.net/mlb_game", {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
      })
        .then(async response => {
          const data = await response.json();
          this.$store.commit('updating_mlb',data)
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
    } 
  },
  created() {
    this.mlbDataFetch();
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

.app_background {
  margin-bottom: 56px;
  background: rgb(255,255,255);
  background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 8%, rgba(235,235,235,1) 100%);
}

</style>