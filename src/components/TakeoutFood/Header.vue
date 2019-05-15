<style scoped lang="stylus">
  .header {
    height: 1.2rem
    width 100%
    background-color #00A6FF
    line-height: 1.2rem

    .left {
      display flex
      float: left
      width: 5.8rem;

      #address {
        font-size 0.5rem
        margin-left 0.24rem
      }

      span {
        color: white
        margin-left 0.12rem
        font-size 0.36rem
      }
    }

    .right {
      float right
      font-size: 0.36rem
      color: white
      margin-right 0.24rem

      span {
        margin-right 0.12rem
      }
    }
  }
</style>
<template>
  <div>
    <header class="header">
      <div class="left" @click="goto">
        <span class="iconfont" id="address">&#xe79c;</span>
        <span style="display:inline-block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;">{{address}}</span>
        <span class="iconfont">&#xe612;</span>
      </div>

      <div class="right">
        <span class="iconfont">&#xe624; 扫码 </span>
        <span class="iconfont">&#xe61a; 6℃</span>
      </div>
    </header>
  </div>
</template>

<script>
  export default {
    name: "Header",
    data(){
      return{
        location: null
      }
    },
    computed: {
      address () {
        return this.$store.state.address
      }
    },
    methods:{
      goto(){
         this.$router.push('/map')
      }
    },
    mounted() {
      // this.goto();
    }
  }
</script>


