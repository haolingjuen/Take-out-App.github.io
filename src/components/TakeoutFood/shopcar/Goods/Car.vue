
<style scoped lang="stylus">
.body {
  .mask {
    background-color: black;
    opacity: 0.4;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .shopcart-list {
    position: fixed;
    bottom: 1.4rem;
    left: 0;
    width: 100%;
    background-color: #EEEEEE;

    .header {
      text-align: center;
      line-height: 0.8rem;
      height: 0.8rem;
      width: 100%;
      background-color: #f3e6c6;
      color: #1a1a1a;
    }

    .list-header {
      border-left: solid 0.1rem yellowgreen;
      padding: 0.2rem;
      height: 0.4rem;
      line-height: 0.4rem;

      .title {
        float: left;
        font-size: 0.32rem;
      }

      .empty {
        float: right;
        font-size: 0.32rem;
      }
    }

    .list-content {
      max-height: 6rem;
      overflow: hidden;
      padding-bottom: 0.25rem;

      .food {
        position: relative;
        width: 100%;
        height: 1.2rem;
        display: flex;
        background-color: #EEEEEE;
        line-height: 1.2rem;
        font-size: 0.4rem;

        .name {
          margin-left: 0.2rem;
        }

        .price {
          position: absolute;
          top: 0.06rem;
          right: 3.2rem;
        }

        .cartcontrol-wrapper {
          .Cartcontrol {
            position: absolute;
            top: - 2rem;
            right: 0.2rem;
            z-index: 9999;
          }
        }
      }
    }
  }

  .container {
    height: 1.4rem;
    width: 100%;
    background-color: #5a5a5a;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 99;

    .left {
      float: left;
      width: 1.4rem;
      height: 1.4rem;
      border-radius: 50%;
      background-color: #aaaaaa;
      line-height: 1.4rem;
      text-align: center;
      position: absolute;
      top: -0.5rem;
      left: 0.4rem;

      .iconfont {
        font-size: 0.72rem;
        color: #5a5a5a;
      }

      .carfoll {
        color: white;
      }
    }

    .car {
      background-color: #0aa0e6;
    }

    .parentCount {
      .count {
        position: absolute;
        top: -0.6rem;
        left: 1.36rem;
        background-color: red;
        color: white;
        width: 0.46rem;
        height: 0.46rem;
        font-size: 0.32rem;
        text-align: center;
        line-height: 0.46rem;
        border-radius: 50%;
      }
    }

    .right {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      width: 2.4rem;
      background-color: #a1a1a1;
      line-height: 1.4rem;
      text-align: center;
      font-size: 0.38rem;
      color: white;

      .Settlement {
        background-color: #00EE00;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        width: 2.4rem;
        font-size: 0.38rem;
        font-weight: bold;
      }
    }

    .Distribution {
      color: #CCCCCC;
      position: absolute;
      top: 0.5rem;
      left: 2rem;

      .outprice {
        margin-top: -0.2rem;
      }

      .totalprice {
        margin-top: 0.2rem;
      }
    }
  }
}
</style>

<template>
  <div class="body">
    <div class="mask" v-show="maskShow" @click="carShow"></div>
    <transition name="fade">
      <div class="shopcart-list" v-show="this.DetailShow">
        <header class="header">新用户立减15元，首次使用银行卡最高再减5元</header>
        <div class="list-header">
          <h1 class="title">深圳麦当劳明智餐厅</h1>
          <span class="empty iconfont" @click="empty">&#xe623;&nbsp 清空购物车</span>
        </div>
        <div class="list-content" ref="listContent">
          <div>
            <div class="food" v-for="(item,index) in goodsList" :key="index">
              <div class="name">{{item.name}}</div>
              <div class="price">
                <span>￥{{item.min_price}}</span>
              </div>
              <div class="cartcontrol-wrapper">
                <!-- 记得将cartcontrol组件import到shopcart中，并注册components-->
                <Cartcontrol :food="item" class="Cartcontrol"></Cartcontrol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <div class="container">
      <div class="left" :class="{car:totalcount}" @click="DetailShowmethod">
        <span class="iconfont" :class="{carfoll:totalcount}">&#xe60a;</span>
      </div>
      <div class="parentCount" v-show="this.totalcountShow">
        <span class="count">{{totalcount}}</span>
      </div>
      <div class="Distribution">
        <div class="outprice">另需配送费￥9</div>
        <div class="totalprice" v-show="totalprice">{{totalprice}}元</div>
      </div>
      <div class="right">
        <span class="send" v-show="!this.totalpricesShows">起送￥30</span>
        <span
          class="Settlement"
          v-show="this.totalpricesShows"
          @click="setOrderdDdta(SetOrderdata);toConfirmPayment()"
        >去结算</span>
        <!--<router-link class="Settlement" v-show="this.totalpricesShows" tag="span" to="/Order/ConfirmPayment"-->
        <!--@click="setOrderdDdta">-->
        <!--去结算-->
        <!--</router-link>-->
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import BScroll from "better-scroll";
import Cartcontrol from "./CarContral";
export default {
  name: "Car",
  components: {
    Cartcontrol
  },
  data() {
    return {
      totalcountShow: 0,
      totalpricesShows: 0,
      DetailShow: false,
      maskShow: false
    };
  },
  props: {
    SetCount: {
      type: Array
    },
    goodsList: {
      type: Array
    }
  },
  computed: {
    SetOrderdata() {
      return this.goodsList;
    },
    totalcount() {
      let totalcount = 0; //count的总数
      this.SetCount.forEach(item => {
        totalcount += item;
      });
      this.totalcountShow = totalcount;
      if (totalcount === 0) {
        // 如果totalcount为0则隐藏购物车详情列表和蒙版
        this.maskShow = false;
        this.DetailShow = false;
      }
      return totalcount;
    },
    totalprice() {
      let totalprices = 0; //总价格
      this.goodsList.forEach(item => {
        let price = item.count * item.min_price;
        totalprices += price;
      });
      if (totalprices >= 30) {
        this.totalpricesShows = true;
      } else {
        this.totalpricesShows = false;
      }
      return totalprices;
    }
  },
  methods: {
    ...mapActions({
      setOrderdDdta: "ActsetOrderdDdta"
    }),
    toConfirmPayment() {
      this.$router.push({ path: "/Order/ConfirmPayment" });
    },
    empty() {
      //清空购物车
      this.goodsList.forEach(item => {
        item.count = 0;
      });
      // 如果清空购物车则隐藏购物车详情列表和蒙版
      this.DetailShow = false;
      this.maskShow = false;
    },
    DetailShowmethod() {
      //控制购物车详情列表的显影
      this.maskShow = !this.maskShow;
      if (this.totalcountShow > 0) {
        this.DetailShow = !this.DetailShow;
      }
    },
    setScroll() {
      this.foodScroll = new BScroll(this.$refs.listContent, {
        probeType: 3,
        click: true
      });
    },
    carShow() {
      // 点击蒙版让购物车详情列表和自己隐藏
      this.DetailShow = false;
      this.maskShow = false;
    }
  },
  created() {
    this.$nextTick(() => {
      //这个函数是指页面的DOM渲染完成之后才进行
      // 执行滚动方法
      this.setScroll();
    });
  }
};
</script>


