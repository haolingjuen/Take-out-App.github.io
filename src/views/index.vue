<template>
    <div class="index">
      <router-view></router-view>
      <Tabbar class="Tabbar"></Tabbar>
    </div>
</template>

<script>
  import Tabbar from './Tabbar'
    export default {
        name: "index",
      components:{
        Tabbar
      }
    }
</script>

<style scoped lang="stylus">
 .index{
   .Tabbar{
     width: 100%;
     height: 1rem;
     position: fixed;
     bottom: 0;
     left: 0;
     background-color: yellow
   }
 }
</style>
