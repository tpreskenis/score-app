<template>
  <v-card
    class="mx-auto my-12 rounded-xl"
    depressed
    max-width="344"
    flat
  >
    <v-list-item three-line class="center-button">
        <v-btn
          fab
          rounded
          class="button_text"
          href="https://github.com/tpreskenis"
          target="_blank"
          color="white"
        >
          <i class="fab fa-github icon_color"></i>
        </v-btn>
    </v-list-item>

    <v-card-actions>
        <h2 class="warning_text">API is not active, please download from Github and refresh (either in browser or with the refresh icon).</h2>
    </v-card-actions>
  </v-card>
</template>
<script>
  export default {
    name:"api-error",
  }
</script>
<style scoped lang="scss">
.icon_color {
  font-size: xx-large;
    color: crimson;
}
.center-button {
  place-content: center;
}
.button_text {
    font-family: 'Nunito', sans-serif;
}
.warning_text {
    font-family: 'Nunito', sans-serif;
    position: relative;
    bottom: 15px;
    text-align: -webkit-center;
    font-size: inherit;
}
</style>