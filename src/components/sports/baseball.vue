<template>
  <div>
    <news-slider/>
    <blank-card/>
    <blank-card/>
  </div>
</template>
<script>
import newsSlider from "./slider/slider"
import blankCard from "./basketball"

  export default {
    name: "baseball_template",
    components: {
      newsSlider,
      blankCard
    }
  }
</script>
<style lang="scss" scoped>
</style>