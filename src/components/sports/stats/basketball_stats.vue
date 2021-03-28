<template>
  <v-card
    class="mx-auto my-12 rounded-xl"
    depressed
    max-width="344"
    min-width="280"
    min-height="200"
    flat
  >
<h1 class="dummy_text">Team Stats</h1>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide>
    <v-simple-table style="margin-top: 10px; padding-bottom: 30px;">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              
            </th>
            <th class="text-left">
                <v-img src="../../../assets/team_logo/basketball/miami-heat-logo.png" max-width="60px" style="right: 5px;"></v-img>
            </th>
            <th class="text-left">
                <v-img src="../../../assets/team_logo/basketball/oklahoma-city-thunder-logo.png" max-width="40px" style="right: 10px;"></v-img>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="hit in hits"
            :key="hit.name"
          >
            <td>{{ hit.name }}</td>
            <td>{{ hit.home }}</td>
            <td>{{ hit.away }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
     </swiper-slide>
    <swiper-slide>
    <v-simple-table style="margin-top: 10px; padding-bottom: 30px;">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              
            </th>
            <th class="text-left">
                <v-img src="https://1000logos.net/wp-content/uploads/2017/04/Miami-Heat-Logo.png" max-width="60px" style="right: 5px;"></v-img>
            </th>
            <th class="text-left">
                <v-img src="https://cdn.freebiesupply.com/images/large/2x/oklahoma-city-thunder-logo-transparent.png" max-width="40px" style="right: 10px;"></v-img>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="stat in stats"
            :key="stat.name"
          >
            <td>{{ stat.name }}</td>
            <td>{{ stat.home }}</td>
            <td>{{ stat.away }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
     </swiper-slide>
     <div class="swiper-pagination" slot="pagination"></div>
</swiper>
  </v-card>
</template>
<script>
  export default {
    name:"basketball-stats",
    props: {
      home_stats: Object,
      away_stats: Object,
    },
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        },
      }
    },
    computed: {
        hits: function() {
            return [
                {
                    name: "Points",
                    home: this.home_stats.points,
                    away: this.away_stats.points,
                },
                {
                    name: "Assists",
                    home: this.home_stats.assists,
                    away: this.away_stats.assists,
                },
                {
                    name: "Blocks",
                    home: this.home_stats.blocks,
                    away: this.away_stats.blocks,
                },
                {
                    name: "Def. Rebounds",
                    home: this.home_stats.defensive_rebounds,
                    away: this.away_stats.defensive_rebounds,
                },
                {
                    name: "Off. Rebounds",
                    home: this.home_stats.offensive_rebounds,
                    away: this.away_stats.offensive_rebounds,
                },
                {
                    name: "Steals",
                    home: this.home_stats.steals,
                    away: this.away_stats.steals,
                },
                {
                    name: "Turnovers",
                    home: this.home_stats.turnovers,
                    away: this.away_stats.turnovers,
                },
                {
                    name: "Personal Fouls",
                    home: this.home_stats.personal_fouls,
                    away: this.away_stats.personal_fouls,
                },
            ]
        },
        stats: function() {
            return [
                {
                    name: "FG Percentage",
                    home: this.home_stats.field_goal_percentage,
                    away: this.away_stats.field_goal_percentage,
                },
                {
                    name: "FG Attempted",
                    home: this.home_stats.field_goals_attempted,
                    away: this.away_stats.field_goals_attempted,
                },
                {
                    name: "FG Made",
                    home: this.home_stats.field_goals_made,
                    away: this.away_stats.field_goals_made,
                },
                {
                    name: "FT Percentage",
                    home: this.home_stats.free_throw_percentage,
                    away: this.away_stats.free_throw_percentage,
                },
                {
                    name: "FT Attempted",
                    home: this.home_stats.free_throws_attempted,
                    away: this.away_stats.free_throws_attempted,
                },
                {
                    name: "FT Made",
                    home: this.home_stats.free_throws_made,
                    away: this.away_stats.free_throws_made,
                },
                {
                    name: "Three Percentage",
                    home: this.home_stats.three_point_percentage,
                    away: this.away_stats.three_point_percentage,
                },
                {
                    name: "Threes Attempted",
                    home: this.home_stats.three_point_field_goals_attempted,
                    away: this.away_stats.three_point_field_goals_attempted,
                },
                {
                    name: "Threes Made",
                    home: this.home_stats.three_point_field_goals_made,
                    away: this.away_stats.three_point_field_goals_made,
                },
            ]
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
</style>