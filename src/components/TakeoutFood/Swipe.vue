<template>
    <div class="swipe">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide class="slide" v-for="(page ,index) of pages" :key="index">
            <div  class="content" v-for="item of page" :key="item.id">
              <div class="imgs"><img :src=item.image_url></div>
              <div class="title">{{item.title}}</div>
            </div>
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
</template>

<script>
  import axios from 'axios'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    components: {
      swiper,
      swiperSlide
    },
    name: 'carrousel',
    data() {
      return {
        // ListData:ListData,
        List:[],
        swiperOption: {
          notNextTick: true,
          pagination: { el: ".swiper-pagination"},
          autoplay: false,
          loop: true,
        }
      }
    },
    computed:{
      pages(){
        const pages =[];
        this.List.forEach((item,index)=>{
            let page =Math.floor(index/8);
            if (!pages[page]){
              pages[page]=[]
            }
            pages[page].push(item);
        });
        return pages
      }
    },
    methods: {
       loadData(){
         axios.get('https://www.easy-mock.com/mock/5c495bf428a69b32a72d285e/example/mock').then(this.ListData).catch(this.Err)
       },
      ListData(res){
         this.List =res.data

  },
      Err(err){
         console.log(err);
      },

    },
   created() {
     this.loadData()
   },

  }
</script>

<style scoped lang="stylus">
 .swipe{
   width 100%
   height 5rem
   background-color #EEEEEE
   .slide{
     display flex
     justify-content center
     flex-wrap wrap
     .content{
       width 2.49rem
       height 2.49rem
       text-align center
       box-sizing border-box
       .imgs{
         width 100%
         height 1.7rem
         img{
           width 70%
         }
       }
     }
   }
 }
</style>
