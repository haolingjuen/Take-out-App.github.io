
<style scoped lang="stylus">
 .search{
   width 94%
   height 0.8rem
   background-color #e0e2e5
   color #a1a1a2
   font-size 0.3rem
   border-radius 0.4rem
   line-height 0.8rem
   margin 0 auto
   .content{
     margin 0 auto
     text-align center
     line-height 0.7rem
   }
 }
</style>

<template>
    <div class="search" @click="goto">
      <div class="content">
        <span class="iconfont">&#xe62b;</span>
        <span>搜索商家、商品名称</span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Search",
      methods:{
        goto(){
          this.$router.push("/Search")
        }
      }
    }
</script>

