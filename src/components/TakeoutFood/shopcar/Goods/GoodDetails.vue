<style scoped lang="stylus">
.container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #EEEEEE;
  overflow: hidden;

  header {
    background-color: white;
    padding: 0.2rem;

    span {
      display: inline-block;
      width: 0.8rem;
      height: 0.8rem;
      background-color: #6c6c6c;
      font-size: 0.6rem;
      color: white;
      border-radius: 50%;
      text-align: center;
      line-height: 0.8rem;
    }

    .s2, .s3 {
      float: right;
      margin-left: 0.48rem;
    }
  }

  .infos {
    width: 100%;
    height: 12rem;
    background-color: white;
    margin-bottom: 0.32rem;

    .imgs {
      img {
        width: 100%;
      }
    }

    .info {
      position: relative;
      font-size: 0.38rem;
      margin-left: 0.2rem;

      div {
        margin-bottom: 0.2rem;
      }

      .CarContral {
        position: absolute;
        top: -1 rem;
        right: 0.2rem;
      }
    }
  }

  .evaluate {
    background-color: white;
    width: 100%;
    height: 8rem;

    .nav {
      width: 100%;
      height: 0.6rem;
      padding: 0.2rem;
      font-size: 0.36rem;
      line-height: 0.6rem;

      .s1 {
        float: left;
      }

      .s2 {
        float: right;
        margin-right: 0.36rem;
      }

      .s3 {
        float: right;
        margin-right: 0.36rem;
        font-size: 0.32rem;
      }
    }

    .foodView {
      overflow: hidden;
      max-height: 6.4rem;

      .concrete_content {
        padding: 0.2rem;
        width: 95%;
        height: 2rem;

        .left {
          text-align: center;
          line-height: 1.5rem;
          float: left;
          width: 1.5rem;
          height: 2rem;
        }

        .parent {
          .header {
            height: 0.6rem;
          }

          .content {
            font-size: 0.38rem;
            line-height: 0.4rem;
          }
        }
      }
    }
  }
}
</style>

<template>
  <div>
    <div class="container">
      <header>
        <span class="iconfont s1" @click="Passvalue">&#xe600;</span>
        <span class="iconfont s2">&#xe7ea;</span>
        <span class="iconfont s3">&#xe633;</span>
      </header>

      <div class="infos">
        <div class="imgs">
          <img :src="detail.picture">
        </div>
        <div class="info">
          <div style="font-size: 0.42rem;font-weight: bold">{{detail.name}}</div>
          <div>
            <span style="margin-right: 0.32rem">{{detail.month_saled_content}}</span>
            <span>{{detail.praise_content}}</span>
          </div>
          <div>
            <span
              class="text"
              style="color: red;font-size: 0.42rem;margin-right: 0.06rem"
            >￥{{detail.min_price}}</span>
            <span class="unit">/{{detail.unit}}</span>
          </div>
          <CarContral :food="detail" class="CarContral"></CarContral>
        </div>
      </div>

      <div class="evaluate">
        <nav class="nav">
          <span class="s1">外卖评价</span>
          <span class="iconfont s3">&#xe646;</span>
          <span class="s2" v-show="detail.rating.comment_count">{{detail.rating.comment_count}}条评论</span>
          <span class="s2" v-show="!detail.rating.comment_count">暂无评论</span>
        </nav>
        <div ref="foodView" class="foodView">
          <div>
            <div class="concrete_content" v-for="(comment,index) in changedata" :key="index">
              <div class="left">
                <img
                  :src="comment.user_icon"
                  v-if="comment.user_icon"
                  style="width: 80%;border-radius: 50%"
                >
              </div>
              <div class="parent">
                <div class="header">
                  <span style="float: left">{{comment.user_name}}</span>
                  <span style="float: right">{{comment.comment_time}}</span>
                </div>
                <div class="content">{{comment.comment_content}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import CarContral from "./CarContral";

export default {
  name: "GoodDetails",
  components: {
    CarContral
  },
  props: {
    detail: {
      type: Object
    }
  },
  data() {
    return {
      data: false,
      comment_lists: []
    };
  },
  computed: {
    changedata() {
      this.$nextTick(() => {
        //这个函数是指页面的DOM渲染完成之后才进行
        this.showView();
      });
      let data = this.detail.rating;
      this.comment_lists = data.comment_list;
      return this.comment_lists;
    }
  },
  methods: {
    Passvalue() {
      this.$emit("returnGoodDetailShow", false);
      console.log(this.detail);
    },
    showView() {
      this.foodView = new BScroll(this.$refs.foodView, {
        probeType: 3,
        click: true
      });
    }
  },
  created() {}
};
</script>


