
<style scoped lang="stylus">
  .container{
    position relative
    overflow hidden
    width 100%
    height 21.666rem
    background: -webkit-linear-gradient(#0aa0e6,#ffffff)
    .information{
      margin-left 0.2rem
      .goback{
        position fixed
        top 0.2rem
        left 0.2rem
        font-size 0.48rem
        color white
        font-weight bold
      }
      .title{
        color #f1f1f1
        margin-top 1rem
        font-size 0.38rem
      }
      .address{
        margin-top 0.32rem
        color #f1f1f1
        display flex
        .s1{
          font-weight bold
          width 9rem
          font-size 0.52rem
          overflow:hidden;
          display block
          text-overflow:ellipsis;
          white-space: nowrap;
        }
        .s2{
          font-size 0.42rem
        }
      }
      .info{
        font-size 0.38rem
        color #f1f1f1
        margin-top 0.4rem
      }
    }
    .mode{
      margin-left 0.2rem
      font-weight bold
      width 96%
      height 2.4rem
      background-color #f1f1f1
      margin-top 0.46rem
      .time{
        width 9rem
        margin 0 auto
        border-bottom solid 0.02rem #CCCCCC
        height 0.86rem
        line-height 0.86rem
        padding 0.2rem
        .left {
          float: left
          font-size 0.38rem
        }
        .right{
          float: right
          .s3{
            font-size 0.38rem
            color #0aa0e6
            margin-right 0.2rem
          }
          .s4{
            color #CCCCCC
          }
        }
      }
      .payment{
        line-height 0.8rem
        margin 0 auto
        width 9rem
        height 1rem
        padding 0.21rem
        .left {
          float: left
          font-size 0.38rem
        }
        .right{
          float: right
          .s5{
            font-size 0.38rem
            color #0aa0e6
            margin-right 0.2rem
          }
          .s6{
            color #CCCCCC
          }
        }
      }
    }
    .content{
      margin-left 0.2rem
      margin-top 0.32rem
      width 96%
      background-color  #f1f1f1
      .header{
        width 9rem
        height 1.2rem
        font-size 0.38rem
        font-weight bold
        line-height 1.2rem
        border-bottom 0.02rem #CCCCCC solid
        margin 0 auto
      }
     .goodlist{
       overflow hidden
       max-height 13rem
       .goods{
         display flex
         line-height 2rem
         width 9.2rem
         height 2rem
         margin-left 0.2rem
         border-bottom 0.02rem solid #ccccff
         .left{
           margin-top 0.2rem
         }
         .name{
           font-size 0.38rem
           margin-left 0.2rem
           width 5.2rem
           font-weight bold
           overflow:hidden;
           text-overflow:ellipsis;
           white-space: nowrap;
         }
         .right{
           span{
             font-size 0.38rem
             margin-left  0.4rem

           }
         }
       }
     }
    }
    .footer{
      position fixed
      left 0
      bottom 0
      width 100%
      height 1.4rem
      background-color #2a2a2a
      font-size 0.38rem
      color #f1f1f1
      .totalprice{
        float left
        line-height 1.4rem
        height 100%
        span{
          margin-left 0.2rem
        }
      }
      .confirmpayment{
         float right
         width 2.6rem
         height 100%
         background-color #00EE00
         text-align center
         line-height 1.4rem
      }
    }
  }
</style>

<template>
  <div>
    <div class="container">

      <div class="information" @click="goAddress">
        <span class="iconfont goback" @click="goback">&#xe600;</span>
        <div class="title">订单配送至:</div>
        <div class= "address">
          <span class="s1">太仓市科技创业园苏州安软信息科技有限公司</span>
          <span class="iconfont s2">&#xe646;</span>
        </div>
        <div class="info">
          <span>吴浩菱（先生）</span><span>15972224885</span>
        </div>
      </div>

      <div class="mode">
        <div class="time">
          <div class="left">请选择配送时间</div>
          <div class="right" @click="open('picker')">
            <!--<TimeSelentor class="s3"></TimeSelentor>-->
            <!--<span >尽快送达(14.24送达)</span>-->
            <span class="s3">预计 ：{{time}} 送达</span>
            <span class="iconfont s4">&#xe646;</span>
          </div>
          <mt-datetime-picker
            ref="picker"
            type="time"
            v-model="value"
            :startHour= "hours"
            @confirm="handleChange">
          </mt-datetime-picker>
        </div>
        <div class="payment">
          <div class="left" >支付方式</div>
          <div class="right">
            <span class="s5">支付宝</span>
            <span class="iconfont s6">&#xe646;</span>
          </div>
        </div>
      </div>
      <div class="content">
        <header class="header">苏州麦当劳明智餐厅</header>
        <div class="goodlist" ref="goodlist">
          <div>
            <div class="goods" v-for="item in order">
              <div class="left"><img :src=item.picture style="width: 1.6rem"></div>
              <div class="name"><span>{{item.name}}</span></div>
              <div class="right">
                <span>×{{item.count}}</span>
                <span>￥{{item.min_price}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer class="footer">
        <div class="totalprice">
          <span style=" font-weight: bold">共计￥:</span>
          <span style=" font-weight: bold">{{totalprice}}</span>
          <span style="font-size: 0.32rem">(含配送费9元)</span>
        </div>
        <div class="confirmpayment" @click="localStorageData(order);triggertoast()" style=" font-weight: bold">确认支付</div>
      </footer>
    </div>
  </div>
</template>

<script>
    import BScroll from 'better-scroll'
    import {mapActions,mapState} from 'vuex'
    import { Toast } from 'mint-ui'
    export default {
        name: "ConfirmPayment",
      components:{
      },
      data(){
          return{
            hours:8,
            value: null,
            newValue:0,
            newHours:0,
            arr:[]
          }
      },
      computed:{
          time(){
            let now = new Date();
            let time = now.getTime() + 1000*60*30;
            let currentTime = new Date(time);
            let hours =currentTime.getHours();
            let minutes =currentTime.getMinutes()>10 ? currentTime.getMinutes() : `0${currentTime.getMinutes()}`;
            let DeliveryTime =` ${hours} : ${minutes}` ;
            this.hours =hours;
            this.arr = [];
             `${this.value}`.split(":").forEach((item)=>{
               this.arr.push(parseFloat(item));
             });
             this.newValue = this.arr[0]+this.arr[1];
             this.newHours =parseFloat( minutes) + parseFloat( hours);

            if(this.value===null){
              return DeliveryTime
            }
            else if(this.newValue < this.newHours && this.arr[0] <= this.hours){
              return DeliveryTime;
            }
            else {
              return this.value
            }
          },
          ...mapState({
            order:"order",
          }),
        totalprice(){
          this.$nextTick(() => { //这个函数是指页面的DOM渲染完成之后才进行
            // 执行滚动方法
            this.setScroll();

          });
            let totalprice=0;
           this.order.forEach((item)=>{
            totalprice+=(item.count*item.min_price)
          });
          return (totalprice+9)
        }
      },
      methods:{
        goAddress(){
          this.$router.push("/Address")
        },
        open(picker) {
          this.$refs[picker].open();
        },
        handleChange(value) {
          console.log(this.arr[0]);
          if (this.newValue < this.newHours && this.arr[0] <= this.hours) {
             var msg = '商家至少需要30分钟准备时间，请重新选择'
          }else {
             var msg = `您选择的时间是 ${value} 请耐心等待`
          }
          Toast({
            message: msg,
            position: 'center'
          })
        },
        ...mapActions({
           localStorageData:"PaidOrderdDdta"
          }),
        setScroll(){
          this.goodlist =	new BScroll (this.$refs.goodlist,{probeType:3,click:true});
        },
        goback(){
          this.$router.go(-1)
        },
        triggertoast(){
          this.$toast({
            message: '免密支付成功',
            iconClass: '&#xe613;'
          });
          setTimeout(() =>{
            this.$router.push({path: "/Order"})
          },3000)
        },
      },
    }
</script>


