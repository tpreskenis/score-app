<template>
  <v-simple-table dense>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Team
          </th>
          <th class="score">
            1
          </th>
          <th class="score">
            2
          </th>
          <th class="score">
            3
          </th>
          <th class="score">
            4
          </th>
          <th class="score border">
            Total
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in score_data"
          :key="item.name"
        >
          <td>{{ item.name }}</td>
          <td class="score">{{ item.quarter_1 }}</td>
          <td class="score">{{ item.quarter_2 }}</td>
          <td class="score">{{ item.quarter_3 }}</td>
          <td class="score">{{ item.quarter_4 }}</td>
          <td class="score border">{{ item.T }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>
<script>
  export default {
    name: "scoreboard-basketball-scoreboard",
    props: {
      home_score: Array,
      away_score: Array,
      home_abr: String,
      away_abr: String,
    },
    data () {
      return {
      }
    },
    computed: {
        score_data: function() {
            return [
                {
                    name: this.home_abr,
                    quarter_1: this.home_score[0],
                    quarter_2: this.home_score[1],
                    quarter_3: this.home_score[2],
                    quarter_4: this.home_score[3],
                    T: this.home_sum,
                },
                {
                    name: this.away_abr,
                    quarter_1: this.away_score[0],
                    quarter_2: this.away_score[1],
                    quarter_3: this.away_score[2],
                    quarter_4: this.away_score[3],
                    T: this.away_sum,
                }
            ]
        },
      home_sum: function() {
        return this.home_score.reduce(function(a, b){
          return a + b;
        }, 0);
      },
      away_sum: function() {
        return this.away_score.reduce(function(a, b){
          return a + b;
        }, 0);
      },
    }
  }
</script>
<style lang="scss">
.flex_scoreboard {
    display: flex;
    justify-content: space-evenly;
}
.innings {
    margin-bottom: 0px;
    font-size: medium;
    margin-top: 8px;
}
.score {
    padding: 2px !important;
}
.border {
    border-left-style: solid;
    border-left-color: lightgrey;
    border-left-width: thin;
}
</style>