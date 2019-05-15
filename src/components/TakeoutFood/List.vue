<template>
    <div class="container">
      <swiper :options="swiperOption" v-if="showSwiper">
        <!-- slides -->
        <swiper-slide v-for="item of List"><img :src=item ></swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
</template>

<script>

  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  const List=[
    "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3509886255,542366336&fm=26&gp=0.jpg",
    "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1014867664,2475591227&fm=15&gp=0.jpg",
    "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2445026089,2585214350&fm=26&gp=0.jpg",
    "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=133132261,1608614564&fm=26&gp=0.jpg",
    "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1478397776,117892520&fm=26&gp=0.jpg"
  ]
    export default {
      components: {
        swiper,
        swiperSlide
      },
      name: 'carrousel',
      data() {
        return {
          List:List,
          swiperOption: {
            notNextTick: true,
            pagination: { el: ".swiper-pagination"},
            autoplay: true,
            speed: 300,
            loop: true,
            observeParents: true,
            observer: true,
          }
        }
      },
      computed: {
        showSwiper() {
          return this.List.length
        }
      },
      mounted () {
        // 这边就可以使用swiper这个对象去使用swiper官网中的那些方法

      },

    }
</script>

<style scoped lang="stylus">
  .container{
    width 100%
    overflow: hidden
    img{
      width 100%
      height 3.2rem
    }
  }
  .container >>> .swiper-pagination-bullet-active
    background: white
</style>
