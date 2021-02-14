<template>
    <div>
        <sports-switch @switch_clicked="switch_navigation"/>
        <transition name="fade" mode="out-in">
            <baseball v-if="current_sport == 'item_one'"/>
            <basketball v-if="current_sport == 'item_two'"/>
        </transition>
    </div>
</template>
<script>
import sportsSwitch from './sportsSwitch';

import baseball from './baseball';
import basketball from './basketball';

export default {
  name: 'sports_layout',

  components: {
    sportsSwitch,
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