<template>
    <div>
        <no-data v-if="!this.$store.state.api_connection"/>
        <div v-if="this.$store.state.api_connection">
        <sports-switch @switch_clicked="switch_navigation"/>
        <transition name="fade" mode="out-in">
            <baseball v-if="!this.$store.state.sport_checkbox"/>
            <basketball v-if="this.$store.state.sport_checkbox"/>
        </transition>
        </div>
    </div>
</template>
<script>
import sportsSwitch from './misc/sportsSwitch';

import noData from './api_error';

import baseball from './baseball';
import basketball from './basketball';

export default {
  name: 'sports_layout',

  components: {
    sportsSwitch,
    noData,
    baseball,
    basketball
  },

  data: () => ({
    current_sport: 'item_one',
  }),
  methods: {
    switch_navigation (value) {
      this.current_sport = value
    }
  }
};
</script>