<style scoped lang="stylus">
 .container{
   position absolute
   top 0
   left 0
   bottom 0
   right 0
   background-color #f1f1f1
   .imgs{
     position fixed
     top 10rem
     left 4rem
     opacity 0.6
   }
   header{
     margin 0.5rem 0 0.4rem 0.2rem
     font-size 0.6rem
     font-weight bold
   }
   .content{
     width 9.6rem
     margin-top 0.4rem
     margin-left 0.2rem
     .order{
       background-color white
       width 100%
       height 2.6rem
       display flex
       .left{
         line-height 2.6rem
         margin-left 0.2rem
       }
       .substance{
         margin-left 0.2rem
         .title{
           font-size 0.38rem
           font-weight bold
           margin-top 0.2rem
         }
         .info{
           font-size 0.38rem
           margin-top 0.4rem
           .s1{
             width 4rem
           }
         }
         .right{
           font-size 0.38rem
           margin-top 0.4rem
         }
       }
     }
   }
 }
</style>
<template>
    <div class="container">
      <header>历史订单:</header>
      <search></search>
      <div class="imgs"><img src="http://img1.imgtn.bdimg.com/it/u=1847266969,1789831068&fm=26&gp=0.jpg" style="width: 2rem"></div>
      <div class="content">
         <div class="order">
           <div class="left">
             <img :src=orderData[0].picture style="width: 2rem">
           </div>
          <div class="substance">
            <div class="title">
              <span>苏州麦当劳明智餐厅</span>
              <span class="iconfont"> &#xe646;</span>
             </div>
            <div class="info">
              <span class="s1">{{orderData[0].name}}等</span>
              <span> {{orderData.length}}件商品</span>
            </div>
            <div class="right">
              <span>￥{{totalprice}}</span>
            </div>
          </div>
         </div>
      </div>
    </div>
</template>

<script>
  import search from "../components/Order/Search"
    export default {
        name:"Order",
      components:{
        search,
      },
        computed:{
          totalprice(){
             let totalprice=0;
             this.orderData.forEach((item)=>{
                 totalprice+=(item.count*item.min_price)
           });
            return totalprice
          },
           orderData(){
             return JSON.parse(localStorage.getItem("orderData"));
           }
        },
      methods:{

      }
    }
</script>

