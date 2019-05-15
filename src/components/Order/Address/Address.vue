
<style scoped lang="stylus">
  .container{
    header{
      height 1.4rem
      overflow hidden
      border-bottom solid 0.02rem #cccccc
      .left{
        float left
        font-size 0.5rem
        font-weight bold
        margin 0.4rem 0.2rem 0.2rem 0.2rem
      }
      .right{
        float right
        font-size 0.4rem
        font-weight bold
        margin 0.5rem 0.2rem 0.2rem 0.2rem
        color #0aa0e6
      }
      .title{
        width 4rem
        font-size 0.5rem
        text-align center
        margin 0.4rem auto
      }
    }
    .content{
      font-size 0.4rem
      height  2rem
      border-bottom solid 0.02rem #eeeded
      .left{
        float left
        margin-left 0.2rem
        div{
          margin-top 0.2rem
        }
      }
      .right{
        float right
        .iconfont{
          font-size 0.68rem
          margin 0.7rem 0.2rem
        }

      }
    }
  }
</style>
<template>
   <div class="container">
     <header>
       <div class="iconfont left" @click="back">&#xe600;</div>
       <div class="iconfont right" @click="goAdd">新增地址 &#xe605;</div>
       <div class="title">地址管理</div>
     </header>
     <div class="content">
       <div class="left">
         <div style="font-weight: bold">国家级科技企业孵化器</div>
         <div>生活区二栋三单元206</div>
         <div>
           <span style="margin-right: 0.3rem">吴浩菱</span>  <span>15972224885</span>
         </div>
       </div>
       <div class="right">
          <div class="iconfont">&#xe652;</div>
       </div>
     </div>
   </div>
</template>

<script>
    export default {
        name: "Address",
      data(){
          return{

          }
      },
      methods:{
        back(){
          this.$router.go(-1)
        },
        goAdd(){
          this.$router.push("/Address/add")
        }
      }
    }
</script>


