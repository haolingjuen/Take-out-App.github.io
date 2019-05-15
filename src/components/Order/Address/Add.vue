
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
       font-size 0.5rem
       font-weight bold
       margin 0.4rem 0.2rem 0.2rem 0.2rem
    }
    .title{
      width 4rem
      font-size 0.5rem
      text-align center
      margin 0.4rem auto

    }
  }
   .content{
     .label{
       padding 0.12rem
       border solid 0.01rem #eeeded
       width 1.6rem
       display inline-block
       text-align center
       float left
       margin-right 0.2rem
     }
   }
 }
</style>
<template>
    <div class="container">
      <header>
        <div class="iconfont left" @click="back">&#xe600;</div>
        <div class="iconfont right">&#xe623;</div>
        <div class="title">添加地址</div>
      </header>
      <div class="content">
        <mt-field label="联系人：" placeholder="请输入您的姓名" v-model="froms.username"></mt-field>
        <mt-field label="电话：" placeholder="请输入电话号码" type="tel" v-model="froms.phone"></mt-field>
        <mt-field label="地址：" placeholder="请选择地址" v-model="froms.Address" >
          <span class="iconfont" @click="gomap">&#xe646;</span>
        </mt-field>
        <mt-field label="门牌号：" placeholder="门牌号" type="text" v-model="froms.number">
        </mt-field>
        <mt-field label="标签：">
           <span class="label">家</span>    <span class="label">公司</span>    <span class="label">学校</span>
        </mt-field>
        <mt-field label="备注" placeholder="请输入备注" type="textarea" rows="4" v-model="froms.introduction"></mt-field>
        <mt-button type="primary" size="large">确定</mt-button>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Add",
      data(){
          return{
            froms:{
              username:"",
              Address:"",
              phone:"",
              number:"",
              introduction:""
            }
          }
      },
      methods:{
        gomap(){
          this.$router.push('/map')
        },
        back(){
          this.$router.go(-1)
        },
      },
      mounted() {
          this.froms.Address = this.$store.state.address
      }
    }
</script>


