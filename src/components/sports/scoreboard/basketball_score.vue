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
            <p style="font-size: xx-large;">121</p>
        </div>
        <v-divider
          vertical
        ></v-divider>
        <div style="text-align: -webkit-center;">
            <p style="font-size: xx-large;">106</p>
        </div>
      </div>    
  </v-card-text>
  </v-card>
</template>
<script>
  export default {
    name:"scoreboard",
    data () {
      return {
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
  }
</script>
<style lang="scss" scoped>
.dummy_text {
    font-family: 'Nunito', sans-serif;
    margin-left: 5%;
    position: relative;
    bottom: -10px;
}
.basketball_background {
    background: rgb(152,0,46);
background: linear-gradient(90deg, rgba(152,0,46,1) 0%, rgba(255,255,255,1) 50%, rgba(0,45,98,1) 100%);
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