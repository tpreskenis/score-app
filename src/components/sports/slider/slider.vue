<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide>
      <slider-card/>
    </swiper-slide>
    <swiper-slide>
      <slider-card/>
    </swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide>
    <swiper-slide>Slide 5</swiper-slide>
    <swiper-slide>Slide 6</swiper-slide>
    <swiper-slide>Slide 7</swiper-slide>
    <swiper-slide>Slide 8</swiper-slide>
    <swiper-slide>Slide 9</swiper-slide>
    <swiper-slide>Slide 10</swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  import sliderCard from "./card_slider"

  export default {
    name: 'news_slider',
    components: {
      sliderCard
    },
    data() {
      return {
        swiperOption: {
          slidesPerView: 1.25,
          spaceBetween: 30,
          freeMode: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>