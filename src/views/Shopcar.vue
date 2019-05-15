<template>
  <div>
    <Header></Header>
    <Nav></Nav>
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from '../components/TakeoutFood/shopcar/Header'
  import Nav from '../components/TakeoutFood/shopcar/Nav'
  export default {
    name: "Shopcar",
    components:{
      Header,
      Nav
    }
  }
</script>

<style scoped lang="stylus">

</style>
