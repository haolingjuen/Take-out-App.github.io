
<style scoped lang="stylus">
 .star{
   .completely{
     color orange
   }
   .half{
     color orange
   }
   .empty{
     color orange
   }
 }
</style>

<template>
  <div class="star">
    <span class="iconfont completely" v-for="item of completelycount" v-if="completelycount">&#xe613;</span>
    <span class="iconfont half" v-for="item of halfcount" v-if="halfcount">&#xe67e;</span>
    <span class="iconfont empty" v-for="item of emptycount" v-if="emptycount">&#xe79f;</span>
  </div>
</template>

<script>
    export default {
        name: "stars",
      props:{
          count:{
            type:Number
          }
      },
      data(){
          return{
            completely:0,
            half:0,
            empty:0
          }
      },
      computed:{
        completelycount(){
              let score = parseInt(this.count) ;
              return score
        },
        halfcount(){
           if (Math.ceil(this.count) === this.count){
             return 0
           } else {
             return 1
           }
        },
        emptycount(){
           let score= parseInt(5-this.count);
           return score
        }
      }
    }
</script>


