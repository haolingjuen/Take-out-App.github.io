
<style scoped lang="stylus">
  .container{
    overflow hidden
    width 100%
    .splice{
      width 100%
      height 0.3rem
      background-color #EEEEEE
    }
    .content_top{
      .address{
        margin 0 auto
        width 96%
        height 1.8rem
        display flex
        border-bottom 0.02rem solid #EEEEEE
        &:hover{
          color black
        }
        .address_left{
          font-size 0.5rem
          margin 0.4rem
          color #aaaaaa
        }
        .address_right{
          font-size 0.38rem
          width 6.4rem
          height 1rem
          margin-top 0.36rem
          color #aaaaaa
        }
        .phone{
          height 0.36rem
          width 1rem
          font-size 0.72rem
          margin 0.36rem 0 0 0.2rem
          text-align center
          color #aaaaaa
        }
        span{
          height 0.36rem
          width 0.03rem
          background-color #ccc
          margin 0.5rem 0 0 0.4rem
        }
      }
      .pics-wrapper{
        .pics-list{
          margin-top 0.2rem
          display flex
          overflow hidden
          .pics-item{
            box-sizing border-box
            height 2.1rem
            margin-left  0.24rem
          }
        }
      }
      .archives{
        &:hover{
          color black
        }
        border-top 0.02rem solid #EEEEEE
        line-height 0.8rem
        padding 0.2rem
        color #aaaaaa
        font-size 0.36rem
        height 0.8rem
        width 96%
        margin 0.2rem auto
        .right{
          display inline-block
          float right
          font-size 0.32rem
        }
      }
      .Delivery{
        &:hover{
          color black
        }
        width 96%
        border-bottom  0.02rem solid #EEEEEE
        margin 0 auto
        height 0.8rem
        padding 0.2rem
        font-size 0.38rem
        color #aaaaaa
        line-height 0.8rem
        &:hover{
          color black
        }
      }
      .Time{
        &:hover{
          color black
        }
        width 96%
        margin 0 auto
        height 0.8rem
        padding 0.2rem
        font-size 0.38rem
        color #aaaaaa
        line-height 0.8rem
      }
      .service{
        &:hover{
          color black
        }
        width 96%
        margin 0 auto
        height 0.8rem
        padding 0.2rem
        font-size 0.38rem
        color #aaaaaa
        line-height 0.8rem
        span{
          margin-left 0.2rem
        }
      }
      .Discount{
        &:hover{
          color black
        }
        width 96%
        margin 0 auto
        height 2rem
        padding 0.2rem
        font-size 0.38rem
        color #aaaaaa
        line-height 0.8rem
        span{
          margin-left 0.2rem
        }
      }
    }
  }
</style>
<template>
  <div class="container">

    <div class="splice"></div>

    <div class="content_top">

      <div class="address">
        <div class="iconfont address_left">&#xe79c;</div>
        <div class="address_right">{{seller.address}}</div>
        <span></span>
        <div class="iconfont phone">&#xe60e;</div>
      </div>

      <div class="pics-wrapper"  ref="picsView">
        <div class="pics-list" ref="picsList">
          <div
            ref="picsItem"
            class="pics-item"
            v-for="(item,index) in poi_env.thumbnails_url_list"
            :key="index"
          >
            <img :src="item" style="height: 100%;width: 2.6rem ">
          </div>
        </div>
      </div>

      <div class="archives">
        查看食品安全档案
        <span class="iconfont right">&#xe646;</span>
      </div>

      <div class="splice"></div>

      <div class="Delivery">
        <span class="iconfont">&#xe610;</span>
        配送服务: {{seller.app_delivery_tip}}
      </div>

      <div class="Time">
        <span class="iconfont">&#xe627;</span>
        配送时间: {{seller.shipping_time}}
      </div>

      <div class="splice"></div>

      <div class="service">
        <span class="iconfont">&#xe611;</span>
        <span> 商家服务</span>
        <span> 可开发票</span>
      </div>

      <div class="Discount">
        <span style="height: 1.8rem;display: inline-block;width: 0.5rem;float: left;margin-left: 0.1rem;">
          <div  style="color: white;background-color: orange;padding: 0.06rem;width: 0.4rem;height: 0.4rem;line-height: 0.4rem;float: left">首</div>
        </span>
        <span>新用户立减17元，首次使用银行卡支付最高可再减5元（在线支付专享）</span>
      </div>

    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
    export default {
        name: "Seller",
      data(){
          return{
            seller:{},
            poi_env:{},
            Imgs:[],
            Font_Size:0
          }
      },
      methods:{
        initScroll(){
          this.Font_Size= document.getElementsByTagName('html')[0].style.fontSize;//根元素大小
          const FontSize =parseFloat(this.Font_Size);
          this.Imgs = this.$refs.picsView.getElementsByClassName("pics-item");
          let width=0;
          Array.from(this.Imgs).forEach((item)=>{
            width+=item.clientWidth;
          });
          let Width =width/FontSize;
          let margin = 0.24;
          console.log(Width);
          this.$refs.picsList.style.width=Width + margin*(this.Imgs.length+1) + "rem";
          // let width = (imgW + marginR) * this.poi_env.thumbnails_url_list.length;
          // this.$refs.picsList.style.width = width + "px";
          this.picsView =	new BScroll (this.$refs.picsView,{
            probeType:3,click:true, scrollX:true
           });
          }
      },
      created() {
        fetch("https://www.easy-mock.com/mock/5c495bf428a69b32a72d285e/example/seller")
          .then((res) =>res.json())
          .then(res =>{
            this.seller =res.data;
            this.poi_env=this.seller.poi_env;
            this.$nextTick(() => { //这个函数是指页面的DOM渲染完成之后才进行
              // 执行滚动方法
              this.initScroll();
            });
          })
          .catch(err =>{
            console.log(err)
          });

      }
    }
</script>


