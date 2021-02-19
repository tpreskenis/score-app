<template>
  <div>
    <swiper class="swiper" :options="swiperOption" v-if="smallScreenSize">
      <swiper-slide>
        <slider-card/>
      </swiper-slide>
      <swiper-slide>
        <slider-card/>
      </swiper-slide>
      <swiper-slide>
        <slider-card/>
      </swiper-slide>
      <swiper-slide>
        <slider-card/>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <swiper class="swiper" :options="swiperOption_large" v-if="!smallScreenSize">
      <swiper-slide>
        <slider-card/>
      </swiper-slide>
      <swiper-slide>
        <slider-card/>
      </swiper-slide>
      <swiper-slide>
        <slider-card/>
      </swiper-slide>
      <swiper-slide>
        <slider-card/>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>

  import sliderCard from "./card_slider"

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
        if (this.windowWidth <= 540)
          return true
        else 
          return false
      }
    }  
  }
</script>

<style lang="scss" scoped>
.swiper-button-prev {
  left: 25%;
}
.swiper-button-next {
  right: 25%;
}
</style>