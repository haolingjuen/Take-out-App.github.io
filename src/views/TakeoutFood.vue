
<style scoped lang="stylus">
  .TakeoutFood {
    height 100%

    .header {
      position fixed;
      left 0
      top 0
      z-index 999
    }

    .Search {
      margin-top: 1.4rem
    }

    .List {
      margin-top: 0.2rem
    }

    .Swipe{
      margin-top: 0.2rem
    }
    .spinner_par{
      position fixed
      top 16rem
      left 4.2rem
      margin 0.4rem auto
      height 1rem
      width 1rem
    }
  }
</style>

<template>
  <div class="TakeoutFood">
    <Header class="header"></Header>
    <Search class="Search"></Search>
    <List class="List"></List>
    <Swipe class="Swipe"></Swipe>
    <Business  v-on:headCallBack="headCall"></Business>
    <div class="spinner_par" v-if="Show">
      <mt-spinner :size="50" type="fading-circle" color="#0aa0e6" ></mt-spinner>
    </div>
  </div>
</template>

<script>
  import Header from '../components/TakeoutFood/Header'
  import Search from '../components/TakeoutFood/Search'
  import List  from '../components/TakeoutFood/List'
  import Swipe from '../components/TakeoutFood/Swipe'
  import Business from '../components/TakeoutFood/Business'
    export default {
        name:"TakeoutFood",
      components:{
        Header,
        Search,
        List,
        Swipe,
        Business
      },
      data(){
          return{
            Show:false
        }
      },
      methods:{
        headCall(data){
          this.Show=data;
          console.log(data)
        }
      }
    }
</script>


