<style scoped lang="stylus">
  .page-tabbar {
    overflow: hidden;
    height: 100px;
    .iconfont{
      font-size 0.6rem
      margin-bottom : 0.12rem
    }
  }
</style>

<template>
  <div>

    <div class="page-tabbar">
      <mt-tabbar v-model="selected" >
        <mt-tab-item id="外卖">
          <router-link to="/" tag="div">
            <div class="iconfont">&#xe722;</div>
            外卖
          </router-link>
        </mt-tab-item>

        <mt-tab-item id=" 发现">
          <router-link to="/Search" tag="div">
            <div class="iconfont">&#xe647;</div>
            发现
          </router-link>
        </mt-tab-item>

        <mt-tab-item id=" 订单">
          <router-link to="/Order" tag="div">
            <div class="iconfont">&#xe68f;</div>
            订单
          </router-link>
        </mt-tab-item>

        <mt-tab-item id="我的">
          <router-link to="/PersonalCenter" tag="div">
            <div class="iconfont">&#xe60d;</div>
            我的
          </router-link>
        </mt-tab-item>

      </mt-tabbar>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'home',
    data() {
      return {
        selected: '外卖'
      }
    }
  }
</script>
