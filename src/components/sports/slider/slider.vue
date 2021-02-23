<template>
  <div>
    <swiper class="swiper" :options="smallScreenSize" >
      <swiper-slide v-for="(item, i) in mlb_player_data" :key="i">
        <slider-card :name="item.last_name"/>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    <div style="color: crimson;" class="swiper-button-prev" slot="button-prev" v-if="smallScreenSize == swiperOption_large"></div>
    <div style="color: crimson;" class="swiper-button-next" slot="button-next" v-if="smallScreenSize == swiperOption_large"></div>
    </swiper>
  </div>
</template>

<script>

  import sliderCard from "./player_card"

  export default {
    name: 'news_slider',
    components: {
      sliderCard,
    },
    data() {
      return {
        windowWidth: window.innerWidth,
        swiperOption: {
          slidesPerView: 1.25,
          spaceBetween: 20,
          centeredSlides: true,
          freeMode: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        },
        swiperOption_large: {
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    },
    mounted() {
      window.addEventListener('resize', () => {
        this.windowWidth = window.innerWidth
      })
    },
    computed: {
      smallScreenSize: function() {
        if (this.windowWidth <= 700)
          return this.swiperOption
        else 
          return this.swiperOption_large
      },
      mlb_player_data: function() {
        return this.$store.state.mlb_game.away_batters
      }
    }  
  }
</script>
<style lang="scss">
.swiper-pagination-bullet {
    opacity: 0.3;
    background-color: #000000 !important;
}

.swiper-pagination-bullet-active {
    opacity: 1;
}
</style>
<style lang="scss" scoped>
.swiper-button-prev {
  left: 15%;
}
.swiper-button-next {
  right: 15%;
}
</style>