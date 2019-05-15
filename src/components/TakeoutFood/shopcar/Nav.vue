<style scoped lang="stylus">
 .container{
   height 1rem
   width 100%
   display flex
   line-height 1rem
   border-bottom solid 0.02rem #CCCCCC
   .div{
     width 33.33%
     height 100%
     font-size 0.42rem
     text-align center
     span{
       width 60%
       display inline-block
       height 96%
     }
   }
   .is-active span{
     color #0aa0e6
     font-weight bold
     border-bottom 0.04rem solid #0aa0e6
   }
 }
</style>
<template>
    <div class="container">
      <router-link tag="div" to="/Shopcar" exact class="div"><span>点菜</span></router-link>
      <router-link tag="div" to="/Shopcar/Ratings" exact class="div"><span>评价</span></router-link>
      <router-link tag="div" to="/Shopcar/Seller" exact class="div"><span>商家详情</span></router-link>
    </div>
</template>

<script>
    export default {
        name: "Nav"
    }
</script>


