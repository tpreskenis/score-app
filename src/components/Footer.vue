<template>
  <v-bottom-navigation
   :value="value"
    color="primary"
    grow
    fixed
  >
    <v-btn class="navagation_button" id="no-background-hover" :ripple="false" @click="emit_nav('sports')">
      <v-icon class="navagation_icon" large>fa-baseball-ball</v-icon>
    </v-btn>
    <v-btn class="navagation_button" id="no-background-hover" :ripple="false" @click="emit_nav('info')">
      <v-icon class="navagation_icon" large>fa-info-circle</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>
<script>
  export default {
    data: () => ({ value: 0 }),
    methods: {
      // It will default to Sports
      emit_nav: function (event) {
          this.$emit('nav_clicked', event)
      }
    }
  }
</script>
<style scoped lang="scss">
#no-background-hover::before {
   background-color: transparent !important;
}

.navagation_button{
  align-self: center;
  background: none !important;
}

.navagation_icon{
   transition: all .2s ease-in-out;
}

.navagation_button:active {
  .navagation_icon{
    transform: scale(0.75);
  }
}

</style>