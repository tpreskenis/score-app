<template>
    <v-card
        class="mx-auto my-12 rounded-xl"
        depressed
        max-width="344"
        min-height="200"
        flat
    >
        <v-img
        :src="locationImage"
        height="200px"
        >
        <h1 class="dummy_text">Stadium</h1>
        </v-img>
        <v-card-title>
        {{this.site.site.name}}
        </v-card-title>

        <v-card-subtitle>
        {{this.site.site.city}}, {{this.site.site.state}}
        </v-card-subtitle>

        <v-card-actions>
        <v-col style="padding-left: 7px;">
            <v-card-subtitle style="padding: 0px; !important">
                {{this.formattedDate}}
            </v-card-subtitle>
            <v-card-subtitle style="padding: 0px; !important">
                {{this.formattedTime}}
            </v-card-subtitle>
        </v-col>
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
            I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
            </v-card-text>
        </div>
        </v-expand-transition>
    </v-card>
</template>
<script>
const dateformat = require('dateformat');
  export default {
      name:"stadium_card",
      data: () => ({
        show: false,
      }),
      props: {
        site: Object,
      },
      computed: {
          locationImage: function() {
            // We could pass this as a prop, but for now this is computed! (Or we could put this in the SRC)
              if (this.site.site.name == 'AmericanAirlines Arena')
                return "https://stadiumjourney.com/wp-content/uploads/2019/09/American-Airlines-Arena-View-from-300-Level-900x601.jpg"
              else if (this.site.site.name == 'Angel Stadium of Anaheim')
                return "https://www.ballparksofbaseball.com/wp-content/uploads/2016/02/angel15955.jpg"
              else 
                return ""
          },
          formattedDate: function() {
              return dateformat(new Date(this.site.start_date_time),'fullDate')
          },
          formattedTime: function() {
              return dateformat(new Date(this.site.start_date_time),'longTime')
          },
      }
  }
</script>
<style lang="scss" scoped>
.dummy_text {
    font-family: 'Nunito', sans-serif;
    margin-left: 5%;
    position: relative;
    bottom: -10px;
    color: white;
}
</style>