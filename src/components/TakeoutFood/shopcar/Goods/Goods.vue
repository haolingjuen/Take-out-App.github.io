<style scoped lang="stylus">
.container {
  width: 100%;
  position: absolute;
  top: 5rem;
  bottom: 0;
  display: flex;
  overflow: hidden;

  .menu {
    background-color: #EEEEEE;
    height: 100%;
    flex: 0 0 2.2rem;
    overflow: hidden;

    .goods {
      font-size: 0.38rem;
      height: 1.3rem;
      width: 100%;
      border-bottom: 0.02rem solid #CCCCCC;
      line-height: 1.2rem;
      overflow: hidden;
      display: block;
      text-overflow: ellipsis;
      white-space: nowrap;
      padding-left: 0.2rem;
      color: #222222;
      position: relative;

      .iconfont {
        color: red;
      }

      .count {
        width: 0.36rem;
        height: 0.36rem;
        color: white;
        background-color: red;
        border-radius: 50%;
        position: absolute;
        top: 0.1rem;
        right: 0.2rem;
        font-size: 0.32rem;
        text-align: center;
        line-height: 0.4rem;
      }
    }

    .current {
      background-color: white;
      font-weight: bold;
    }
  }

  .content {
    flex: 1;
    height: 100%;
    overflow: hidden;

    .category {
      padding: 0.2rem;
      font-size: 0.34rem;

      .icon {
        color: orange;
        font-weight: bold;
        margin-right: 0.2rem;
      }

      .commodity {
        width: 100%;
        height: 3.4rem;
        display: flex;
        overflow: hidden;

        .commodity_left {
          width: 2rem;
        }

        .commodity_right {
          width: 5.8rem;
          margin-left: 0.2rem;
          overflow: hidden;
          position: relative;

          div {
            width: 100%;
            margin-top: 0.32rem;
            font-size: 0.32rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            color: #BBBBBB;
          }
        }

        .CarContral {
          position: absolute;
          top: 1.6rem;
          right: 0.4rem;
          background-color: yellow;
          height: 1rem;
          width: 1rem;
        }
      }
    }
  }
}
</style>
<template>
  <div class="container">
    <!-- 分类列表 -->
    <div class="menu" ref="menuScroll">
      <div>
        <div
          v-for="(item ,index) of goods"
          class="goods"
          :key="index"
          :class="{current:count===index}"
          @click="LinkTo(index)"
        >
          <span class="iconfont" v-if="index==0">&#xe69a;</span>
          <span
            class="count"
            v-for="(count,indexs,index) of counts"
            v-show="indexs===index"
            v-if="counts[indexs]"
            :key="index"
          >{{count}}</span>
          {{item.name}}
        </div>
      </div>
    </div>
    <!-- 商品列表 -->
    <div class="content" ref="foodScroll">
      <div>
        <div class="category" v-for="(item,index) in goods" :key="index" ref="category">
          <div>
            <span class="icon">|</span>
            <span>{{item.name}}</span>
          </div>
          <div
            class="commodity"
            v-for="(food,index) in item.spus"
            :key="index"
            @click="detailmethod(food)"
          >
            <div class="commodity_left" @click="GoodDetailmethod">
              <img :src="food.picture" style="width: 2rem">
            </div>
            <div class="commodity_right">
              <div style="font-size: 0.42rem;color: #303030">{{food.name}}</div>
              <div>{{food.description}}</div>
              <div>
                <span style="margin-right: 0.32rem">{{food.month_saled_content}}</span>
                <span>{{food.praise_content}}</span>
              </div>
              <div>
                <span
                  class="text"
                  style="color: red;font-size: 0.36rem;margin-right: 0.06rem"
                >￥{{food.min_price}}</span>
                <span class="unit">/{{food.unit}}</span>
              </div>
              <CarContral :food="food"></CarContral>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--购物车-->
    <Car class="Car" :SetCount="SetCount" :goodsList="goodsList"></Car>
    <!--商品详情-->
    <GoodDetail
      :detail="detail"
      v-show="GoodDetailShow"
      v-on:returnGoodDetailShow="returnGoodDetailShow"
    ></GoodDetail>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import CarContral from "./CarContral";
import Car from "./Car";
import GoodDetail from "./GoodDetails";

export default {
  name: "Goods",
  components: {
    Car,
    CarContral,
    GoodDetail
  },
  data() {
    return {
      container: {},
      goods: [],
      poiInfo: {},
      scrollYrem: 0,
      Categorys: [],
      CategorysHeight: [],
      ListHeight: 0,
      Font_Size: 0,
      GoodDetailShow: false,
      detail: {}
    };
  },
  computed: {
    counts() {
      //获得各菜单的所有count数渲染到页面上
      let countsdata = [];
      this.goods.forEach(items => {
        let counts = 0;
        items.spus.forEach(item => {
          if (item.count) {
            counts += item.count;
          }
        });
        countsdata.push(counts);
      });
      return countsdata;
    },
    SetCount() {
      //为点击的商品添加一个count属性
      const Listdata = [];
      this.goods.forEach(items => {
        items.spus.forEach(item => {
          if (item.count) {
            Listdata.push(item.count);
          }
        });
      });
      return Listdata;
    },
    goodsList() {
      //获得有count属性的商品集合
      const goodsList = [];
      this.goods.forEach(items => {
        items.spus.forEach(item => {
          if (item.count) {
            goodsList.push(item);
          }
        });
      });
      return goodsList;
    },
    count() {
      //根据下滑的距离判断对应左方导航的高亮位置
      this.ListHeight = this.CategorysHeight[0];
      for (let i = 0; i < this.CategorysHeight.length; i++) {
        if (this.scrollYrem < this.ListHeight) {
          return i;
        }
        this.ListHeight += this.CategorysHeight[i + 1];
      }
    }
  },
  methods: {
    detailmethod(food) {
      this.detail = food;
    },
    GoodDetailmethod() {
      this.GoodDetailShow = true;
      return this.food;
    },
    returnGoodDetailShow(data) {
      this.GoodDetailShow = data;
    },
    LinkTo(index) {
      // 发生点击事件时，将被点击菜单栏的索引传递过来，与右侧food列表区域绑定，实现滚动。
      console.log(index);
      let FoodList = this.$refs.foodScroll.getElementsByClassName("category");
      let element = FoodList[index]; // 获取当前点击菜单栏对应的food列表区间，
      this.foodScroll.scrollToElement(element, 300); // 调动接口函数，使得food列表实时滚动到element所在区间，300表示滚动时间。
    },
    initScroll() {
      this.menuScroll = new BScroll(this.$refs.menuScroll, {
        probeType: 3,
        click: true
      }); //probeType:3,探针，获取滑动距离必备
      this.foodScroll = new BScroll(this.$refs.foodScroll, {
        probeType: 3,
        click: true
      });
      this.Font_Size = document.getElementsByTagName("html")[0].style.fontSize; //根元素大小
      const FontSize = parseFloat(this.Font_Size);
      this.foodScroll.on("scroll", pos => {
        let scrollY = Math.abs(Math.round(pos.y));
        this.scrollYrem = scrollY / FontSize;
        // console.log(this.scrollYrem);
      });
    },
    GetcategoryHeight() {
      this.Categorys = this.$refs.foodScroll.getElementsByClassName("category"); //这是一个类数组
      this.Font_Size = document.getElementsByTagName("html")[0].style.fontSize;
      const FontSize = parseFloat(this.Font_Size);
      Array.from(this.Categorys).forEach(item => {
        let itemHeight = item.clientHeight / FontSize;
        this.CategorysHeight.push(itemHeight);
      });
    },
    GetData() {
      fetch(
        "https://www.easy-mock.com/mock/5c495bf428a69b32a72d285e/example/goods"
      )
        .then(res => {
          return res.json();
        })
        .then(this.Res)
        .catch(this.Err);
    },
    Res(res) {
      http: this.container = res.data.container_operation_source;
      this.goods = res.data.food_spu_tags;
      this.poiInfo = res.data.poi_info;
      this.$nextTick(() => {
        //这个函数是指页面的DOM渲染完成之后才进行
        // 执行滚动方法
        this.initScroll();
        this.GetcategoryHeight();
      });
    },
    Err(err) {
      console.log(err);
    }
  },

  created() {
    this.GetData();
  },
  mounted() {}
};
</script>


