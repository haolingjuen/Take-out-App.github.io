<style scoped lang="stylus">
 .container{
   header{
     background-color #0aa0e6
     height 3rem
     color white
     position absolute
     top 0
     left 0
     right 0
     .my{
       font-size 0.4rem
       position absolute
       top 0.4rem
       left 0.3rem
     }
     .user-info{
       margin-top 1.2rem
       /*padding 0.4rem*/
       height 1rem
       .HeadPortrait{
         float left
         display inline-block
         font-size 1.2rem
         margin-left 0.4rem
       }
       .AccountNumber{
         float left
         font-size 0.4rem
         margin-left 0.44rem
         display inline-block
         height 1rem
         background-color #0aa0e6
         line-height 1rem
       }
     }
		 .Sing_Register{
			 margin: 0.4rem 0.2rem;
			 color: white;
			 font-size: 0.4rem;
			 float: right;
			 span{
				 margin-right: 0.1rem;
				 margin-left: 0.1rem;
			 }
		 }
   }
   .info{
     margin-top 3rem
     width 100%
     display flex
     height 2rem
     div{
       text-align center
       width 33%
       border-left solid 0.02rem #CCCCCC
       .count{
         font-size 0.52rem
         margin 0.4rem auto
         border none
       }
       div{
         margin 0.4rem auto
         border none
         font-size 0.38rem
       }
     }
     .money{
       border none
     }
   }
   .splic{
     width 100%
     height 0.5rem
     background-color #eeeeee
   }
   .content{
     padding 0 0.2rem
     line-height 1.2rem
     font-size 0.4rem
     border-bottom solid 0.02rem #eeeded
     height 1.2rem
     .title{
       margin-left 0.6rem
     }
   }
 }
</style>
<template>
  <div class="container">
     <header>
			 <div class="Sing_Register">
			 	<router-link to='./Sign' tag=span> <span>登录</span> </router-link>
			 	<span>|</span>
				<router-link to='./Register' tag=span> 	<span>注册</span> </router-link>
			 </div>
       <div class="my">我的</div>
       <div class="user-info">
         <span class="iconfont HeadPortrait">&#xe620;</span>
         <span class="AccountNumber">15972224885</span>
       </div>
		
     </header>
     <div class="info">
       <div class="money" >
         <div class="count" style="color: orange">0元</div>
         <div>余额</div>
       </div>
       <div class="RedEnvelopes">
         <div class="count" style="color: red">0个</div>
         <div>红包</div>
       </div>
       <div class="GoldCoin">
         <div class="count" style="color: green">0个</div>
         <div>金币</div>
       </div>
     </div>
    <div class="splic"></div>


     <div class="content" @click="goto">
       <span class="iconfont " style="float: left;font-size: 0.5rem;color: #0aa0e6">&#xe79c;</span>
       <span class="iconfont " style="float: right;color: #aaaaaa">&#xe646;</span>
       <span class="title">收货地址</span>
     </div>
    <div class="content">
      <span class="iconfont "  style="float: left;font-size: 0.5rem;color: #0aa0e6">&#xe643;</span>
      <span class="iconfont " style="float: right;color: #aaaaaa">&#xe646;</span>
      <span class="title">推荐有奖</span>
    </div>
    <div class="content">
    <span class="iconfont "  style="float: left;font-size: 0.5rem;color: #0aa0e6">&#xe60f;</span>
    <span class="iconfont " style="float: right;color: #aaaaaa">&#xe646;</span>
    <span class="title">我的心意卡片</span>
  </div>
    <div class="content">
    <span class="iconfont "  style="float: left;font-size: 0.5rem;color: #0aa0e6">&#xe610;</span>
    <span class="iconfont " style="float: right;color: #aaaaaa">&#xe646;</span>
    <span class="title">服务中心</span>
  </div>

    <div class="content">
    <span class="iconfont "  style="float: left;font-size: 0.5rem;color: #0aa0e6">&#xe60d;</span>
    <span class="iconfont " style="float: right;color: #aaaaaa">&#xe646;</span>
    <span class="title">我的客服</span>
  </div>
    <div class="content">
    <span class="iconfont "  style="float: left;font-size: 0.5rem;color: #0aa0e6">&#xe607;</span>
    <span class="iconfont " style="float: right;color: #aaaaaa">&#xe646;</span>
    <span class="title">规则中心</span>
  </div>


    <mt-button  size="large" type="danger" style="margin-top: 1.6rem">退出</mt-button>

  </div>

</template>

<script>
    export default {
        name:"PersonalCenter",
      data(){
          return{
            // List:[
            //   {
            //     id:'001',
            //     icon1:`&#xe79c;`,
            //     icon2:`&#xe646;`,
            //     title:'地址管理'
            //   }
            // ]
          }
      },
      methods:{
        goto(){
          this.$router.push("/Address")
        }
      }
    }
</script>


