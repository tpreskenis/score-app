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
              <v-img src="https://i.pinimg.com/originals/01/5f/aa/015faa55b6c400afbef50fcd47fa8bc1.png" max-width="32px" style="right: 5px;"></v-img>
            </th>
            <th class="text-left">
              <v-img src="https://logos-world.net/wp-content/uploads/2020/05/Seattle-Mariners-Logo.png" max-width="60px" style="right: 18px;"></v-img>
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
              <v-img src="https://i.pinimg.com/originals/01/5f/aa/015faa55b6c400afbef50fcd47fa8bc1.png" max-width="32px" style="right: 5px;"></v-img>
            </th>
            <th class="text-left">
              <v-img src="https://logos-world.net/wp-content/uploads/2020/05/Seattle-Mariners-Logo.png" max-width="60px" style="right: 18px;"></v-img>
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
    name:"stats",
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
                    name: "At Bats",
                    home: this.home_stats.at_bats,
                    away: this.away_stats.at_bats
                },
                {
                    name: "Walks",
                    home: this.home_stats.walks,
                    away: this.away_stats.walks
                },
                {
                    name: "Hits",
                    home: this.home_stats.hits,
                    away: this.away_stats.hits
                },
                {
                    name: "Singles",
                    home: this.home_stats.singles,
                    away: this.away_stats.singles
                },
                {
                    name: "Doubles",
                    home: this.home_stats.doubles,
                    away: this.away_stats.doubles
                },
                {
                    name: "Triples",
                    home: this.home_stats.triples,
                    away: this.away_stats.triples
                },
                {
                    name: "Home Runs",
                    home: this.home_stats.home_runs,
                    away: this.away_stats.home_runs
                },
                {
                    name: "Sacrifices",
                    home: this.home_stats.sacrifices,
                    away: this.away_stats.sacrifices
                },
            ]
        },
        stats: function() {
            return [
                                {
                    name: "AVG.",
                    home: this.home_stats.avg,
                    away: this.away_stats.avg
                },
                {
                    name: "RBI",
                    home: this.home_stats.rbi,
                    away: this.away_stats.rbi
                },
                {
                    name: "OBP",
                    home: this.home_stats.obp,
                    away: this.away_stats.obp
                },
                {
                    name: "OPS",
                    home: this.home_stats.ops,
                    away: this.away_stats.ops
                },
                {
                    name: "SLG",
                    home: this.home_stats.slg,
                    away: this.away_stats.slg
                },
                {
                    name: "Strikeout Rate",
                    home: this.home_stats.strikeout_rate,
                    away: this.away_stats.strikeout_rate
                },
                {
                    name: "Walk Rate",
                    home: this.home_stats.walk_rate,
                    away: this.away_stats.walk_rate
                },
                {
                    name: "Caught Stealing",
                    home: this.home_stats.caught_stealing,
                    away: this.away_stats.caught_stealing
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