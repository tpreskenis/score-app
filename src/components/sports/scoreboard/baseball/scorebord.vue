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
          <th class="score">
            5
          </th>
          <th class="score">
            6
          </th>
          <th class="score">
            7
          </th>
          <th class="score">
            8
          </th>
          <th class="score">
            9
          </th>
          <th class="score border">
            R
          </th>
          <th class="score">
            H
          </th>
          <th class="score">
            E
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in score_data"
          :key="item.name"
        >
          <td>{{ item.name }}</td>
          <td class="score">{{ item.inning_1 }}</td>
          <td class="score">{{ item.inning_2 }}</td>
          <td class="score">{{ item.inning_3 }}</td>
          <td class="score">{{ item.inning_4 }}</td>
          <td class="score">{{ item.inning_5 }}</td>
          <td class="score">{{ item.inning_6 }}</td>
          <td class="score">{{ item.inning_7 }}</td>
          <td class="score">{{ item.inning_8 }}</td>
          <td class="score">{{ item.inning_9 }}</td>
          <td class="score border">{{ item.R }}</td>
          <td class="score">{{ item.H }}</td>
          <td class="score">{{ item.E }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>
<script>
  export default {
    name: "scoreboard-baseball-scoreboard",
    props: {
      home_score: Array,
      away_score: Array,
      home_errors: Number,
      away_errors: Number,
      home_hits: Number,
      away_hits: Number,
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
                    inning_1: this.home_score[0],
                    inning_2: this.home_score[1],
                    inning_3: this.home_score[2],
                    inning_4: this.home_score[3],
                    inning_5: this.home_score[4],
                    inning_6: this.home_score[5],
                    inning_7: this.home_score[6],
                    inning_8: this.home_score[7],
                    inning_9: this.home_score[8],
                    R: this.home_sum,
                    H: this.home_hits,
                    E: this.home_errors
                },
                {
                    name: this.away_abr,
                    inning_1: this.away_score[0],
                    inning_2: this.away_score[1],
                    inning_3: this.away_score[2],
                    inning_4: this.away_score[3],
                    inning_5: this.away_score[4],
                    inning_6: this.away_score[5],
                    inning_7: this.away_score[6],
                    inning_8: this.away_score[7],
                    inning_9: this.away_score[8],
                    R: this.away_sum,
                    H: this.away_hits,
                    E: this.away_errors
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