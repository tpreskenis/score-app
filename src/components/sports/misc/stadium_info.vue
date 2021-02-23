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
            <v-list-item
              v-for="item in site_misc"
              :key="item.label"
            >
              <v-list-item-title>{{ item.label }}</v-list-item-title>

              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-subtitle class="text-right">
                {{ item.value }}
              </v-list-item-subtitle>
            </v-list-item>
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
          site_misc: function() {
              return [
                { label: 'Game Duration', icon: 'mdi-clock', value: this.site.duration },
                { label: 'Attendance', icon: 'mdi-account-group', value: this.site.attendance },
                { label: 'Temperature', icon: 'mdi-white-balance-sunny', value: this.site.temperature },
                { label: 'Surface', icon: 'mdi-grass', value: this.site.site.surface },
            ]
          },
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