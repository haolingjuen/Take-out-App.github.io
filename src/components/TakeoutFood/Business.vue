
<style scoped lang="stylus">
 .container{
   margin-top 0.2rem
   padding-top 0.02rem
   margin-bottom 1.5rem
   .nav{
     height 0.6rem
     line-height 0.6rem
     background-color #EEEEEE
     width 100%
     div{
       opacity 0.6
       float left
       margin-left 0.1rem
     }
   }
   .content{
     margin-top 0.2rem
     width 100%
     height 2.2rem
     display flex
     .left{
       width 2.5rem
       height 2rem
       background-color #0aa0e6
     }
     .center{
       width 5.5rem
       height 2rem
       margin-left 0.4rem
       div{
         margin-bottom  0.4rem
         .s1{
           background-color rgb(255,215,0)
           font-size 0.32rem
           font-weight bold
         }
         .s2{
           margin-left 0.2rem
           font-size 0.44rem
           font-weight bold
           opacity 0.8
         }
         .s3{
           opacity 0.8
           margin-left 0.2rem
         }
         .s4{
           opacity 0.8
         }
       }
     }
     .right{
       width 2rem
       height 2rem
       text-align center
       border-left :dashed 0.04rem  rgb(255,215,0)
       .baopiao{
         margin-top 0.4rem
         font-size 0.36rem
         color rgb(255,215,0)
       }
       .fengniao{
         margin-top 0.4rem
         color #0aa0e6
       }
     }
   }
 }
</style>

<template>
   <div>
     <div class="container" >
       <div class="nav">
         <div class="iconfont">&#xe638;</div>
         <div>附近商家</div>
       </div>

       <div class="content" v-for="item of List" @click="Linkto" >
       <div class="left">
         <img :src=item.image_url style="width: 100%;height: 100%">
       </div>
       <div class="center">

         <div>
           <span class="s1">品牌</span>
           <span class="s2">{{item.title}}</span>
         </div>

         <div>
           <span class="iconfont" style="font-size: 0.2rem ;color:orange " >&#xe613;&#xe613;&#xe613;&#xe613;&#xe67e;{{item.star}}</span>
           <span class="s3">月售{{item.dingdang}}</span>
         </div>

         <div>
           <span class="s4">￥20起送/配送￥5</span>
         </div>
       </div>
       <div class="right">
         <div class="baopiao">保证票</div>
         <div class="fengniao">蜂鸟专送</div>
       </div>
       </div>
     </div>
   </div>
</template>

<script>
  // const imgs=[
  //   "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4110063758,2238686547&fm=15&gp=0.jpg",
  //   "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1633215316,3420711383&fm=15&gp=0.jpg",
  //  "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2793597301,1455620291&fm=26&gp=0.jpg",
  //   "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=670520166,1468282015&fm=15&gp=0.jpg",
  //   "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3077694540,3647836026&fm=15&gp=0.jpg",
  //   "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2133178056,513796128&fm=26&gp=0.jpg",
  //   "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2164823535,3349089147&fm=26&gp=0.jpg",
  //   "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2394445501,842016778&fm=15&gp=0.jpg",
  //   "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1764631038,168321528&fm=15&gp=0.jpg",
  //   "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2500114683,404546866&fm=15&gp=0.jpg",
  //   "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1485992408,2458498882&fm=15&gp=0.jpg",
  //   "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3772064757,3106643896&fm=15&gp=0.jpg"
  // ]
  import axios from 'axios'
    export default {
        name: "Business",
      data(){
          return{
            count:0,
            List:[],
            ListDatas:[],
            groupedArray:[],
            page:[1,2,3,4,5,6,7,8,9]
          }
      },
      methods: {
        group(array, subGroupLength){
          let index = 0;
          let newArray = [];
          while(index < array.length) {
            newArray.push(array.slice(index, index += subGroupLength));
          }
          return newArray;
        },
        loadData(){
           axios.get('https://www.easy-mock.com/mock/5c495bf428a69b32a72d285e/example/business').then(this.ListData).catch(this.Err)
        },
        ListData(res){
          this.ListDatas =res.data;
          this.groupedArray = this.group( this.ListDatas, 10);
          this.List=this.groupedArray[0]
        },
        Err(err){
          console.log(err);
        },
        Linkto(){
          this.$router.push('/Shopcar');
        },
        scrollJudge(){
          let that = this;
          window.onscroll = function(){
            //变量scrollTop是滚动条滚动时，距离顶部的距离
            var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
            //变量windowHeight是可视区的高度
            var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
            //变量scrollHeight是滚动条的总高度
            var scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight;
            //滚动条到底部的条件
            if(scrollTop+windowHeight==scrollHeight){
              //写后台加载数据的函数
              that.$emit('headCallBack', true);
              setTimeout(()=>{
                that.count++;
                if (that.count>=that.groupedArray.length) {
                  that.$emit('headCallBack', false);
                  that.$toast({
                    message: '已加载全部数据',
                  });
                };
                console.log(that.count);
                that.groupedArray[that.count].forEach((item)=>{
                  that.List.push(item);
                });
                that.$emit('headCallBack', false);
              },500);
            }
          }
        }
      },
      created() {
        this.loadData();
        this.scrollJudge()
      },
    }
</script>


