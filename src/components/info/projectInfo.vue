<template>
  <v-card
    class="mx-auto my-12 rounded-xl"
    depressed
    max-width="344"
    flat
  >
    <h1 class="title_card_name">About</h1>
      <v-card-text class="about_text">
        This is an app that is developed using Vue and Vuetify.  The goal of this application is to complete the Barstool Sports Full Stack Developer Challenge.  The challenge requires to create an API that will gather data from a provided feed and store it in a database.  This app will then take that data and put it into a visual format.
      </v-card-text>
    <v-card-actions>
      <h3 class="mini_title">Resources</h3>
      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="show" style="height: 180px;">

        <v-card-actions style="place-content: center;">
          <h4 style="color: #42b883; margin-right: 25px;">
            Vue.js
          </h4>
          <v-btn
            :ripple="false"
            style="margin-left: 25px;"
            id="no-background-hover"
            class="about_button"
            href="https://vuejs.org/"
            target="_blank"
            icon
          >
            <v-icon color="#42b883" class="about_button_icon" large>mdi-vuejs</v-icon>
          </v-btn>
        </v-card-actions>
        <v-card-actions style="place-content: center;">
          <h4 style="color: #409EFF; margin-right: 25px;">
            Vuetify
          </h4>
          <v-btn
            :ripple="false"
            style="margin-left: 25px;"
            id="no-background-hover"
            class="about_button"
            href="https://vuetifyjs.com/en/styles/colors/"
            target="_blank"
            icon
          >
            <v-icon color="#409EFF" class="about_button_icon" large>mdi-vuetify</v-icon>
          </v-btn>
        </v-card-actions>
        <v-card-actions style="place-content: center;">
          <h4 style="color: #DC143C; margin-right: 25px;">
            Sports Data (Barstool Sports)
          </h4>
          <v-btn
            :ripple="false"
            style="margin-left: 25px;"
            id="no-background-hover"
            class="about_button"
            href="https://vuetifyjs.com/en/styles/colors/"
            target="_blank"
            icon
          >
            <v-icon color="#DC143C" class="about_button_icon" large>fa-football-ball</v-icon>
          </v-btn>
        </v-card-actions>
      </div>
    </v-expand-transition>
  </v-card>
</template>
<script>
  export default {
    name: "About",
    data: () => ({
      show: false,
    }),
  }
</script>
<style scoped lang="scss">
.rounded-self {
    contain: content;
    width: 35%;
    border-radius: 50%;
}
.about_text {
    position: relative;
    bottom: -8px;
}
.title_card_name {
    font-family: 'Nunito', sans-serif;
    margin-left: 5%;
    position: relative;
    bottom: -15px;
}
.mini_title {
    font-family: 'Nunito', sans-serif;
    margin-left: 5%;
}

.about_button {
  margin: 0px !important;
}

.about_button_icon{
   transition: all .2s ease-in-out;
}

.about_button:active {
  .about_button_icon{
    transform: scale(0.75);
  }
}

#no-background-hover::before {
   background-color: transparent !important;
}

</style>