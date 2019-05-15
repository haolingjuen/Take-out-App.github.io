
<style scoped lang="stylus">
  .body{
    .container{
      overflow: hidden
      width 100%
      height 16.65rem
      .header {
        width 100%
        height 2.4rem
        .left{
          float: left
          color: #aaaaaa
          margin 0.6rem 0.6rem 0 0.6rem
          .l1{
            font-size 0.6rem
            color orange
            font-weight bold
           margin-bottom 0.16rem
          }
        }
        .headercontent{
          height 1.1rem
          float: left
          width 3.2rem
          margin 0.6rem 0.4rem 0 0
          .c1{
            margin-bottom 0.5rem
            .s1{
              line-height 0.45rem
              color: #5b5b5b
              margin-right 0.24rem
              float left
            }
            .s2{

              font-size 0.28rem
              color orange
              margin-right 0.06rem
              float left
              height 0.5rem
            }
          }
          .c2{
            .s3{
              line-height 0.68rem
              color: #5b5b5b
              margin-right 0.24rem
              float left
            }
            .s4{
              line-height 0.68rem
              height 0.5rem
              float left
              font-size 0.28rem
              color orange
              margin-right 0.06rem
            }
          }
        }
        .right{
          float: right
          border-left  solid 0.02rem #aaaaaa
          width 2.4rem
          text-align center
          color #aaaaaa
          margin-top 0.4rem
          height 1.4rem
          .r1{
            font-size 0.52rem
            margin 0.24rem 0 0.1rem 0
          }
        }
      }
      .split{
        width 100%
        height 0.3rem
        background-color #EEEEEE
      }
      .nav{
        width 100%
        text-align center
        display flex
        justify-content center
        flex-wrap nowrap
        span{
          font-size 0.38rem
          margin 0.36rem -0.02rem 0.2rem 0
          width 30%
          height 0.82rem
          border solid 0.02rem #0aa0e6
          line-height 0.8rem
          color #0aa0e6
        }
        .active{
          background-color #00a0dc
          color white
          font-weight bold
        }
      }
      .content{
        width 100%
        .pags{
          width 9.2rem
          margin-left 0.4rem
          span{
            display inline-block
            height 0.68rem
            line-height 0.68rem
            text-align center
            background-color #EEEEEE
            color #aaaaaa
            margin 0.06rem 0.2rem
            padding 0 0.2rem
          }
        }
        .details{
          width 100%
          margin-top 0.2rem
          .foodView{
              .concrete_content{
                padding 0.2rem
                width 95%
                height 3rem
                .left{
                  text-align center
                  line-height 1.5rem
                  float: left
                  width 1.5rem
                  height 3rem
                }
                .parent{
                  .header{
                    height 0.6rem
                  }
                  .stars{
                    display flex
                    margin-bottom 0.2rem
                  }
                  .content{
                    font-size 0.38rem
                    line-height 0.40rem
                  }
                }
              }
            }
        }
      }
    }
  }
</style>

<template>
  <div class="body">
    <div class="container" ref="containerScroll">
      <div>
        <header class="header">
          <div class="left">
            <div class="l1">{{ratings.comment_score}}</div>
            <div class="l2">商家评分</div>
          </div>
          <div class="headercontent">
            <div class="c1">
              <span class="s1">口味</span>
              <span><stars class="iconfont s2" :count="ratings.quality_score"></stars></span>
            </div>
            <div class="c2">
              <span class="s3">包装</span>
              <stars class="iconfont s4" :count="ratings.pack_score"></stars>
            </div>
          </div>
          <div class="right">
            <div class="r1">{{ratings.delivery_score}}</div>
            <div  class="r2">配送评分</div>
          </div>
        </header>

        <div class="split"></div>

        <nav class="nav">
          <span :class="{'active':selectType===1}" @click="selectTypefn(1)">全部</span>
          <span :class="{'active':selectType===2}" @click="selectTypefn(2)">有图</span>
          <span :class="{'active':selectType===3}" @click="selectTypefn(3)">点评</span>
        </nav>

        <div class="content" ref="contentScroll">
          <div class="pags">
             <span
               v-for="(item,index) in ratings.labels"
               :key="index"
             >
            {{item.content}}{{item.label_count}}
          </span>
          </div>

          <div class="details">

            <div class="content" v-for="comment in ratingstype" >
              <div  class="foodView">
                  <div class="concrete_content" >
                    <div class="left">
                      <img :src="comment.user_pic_url" v-if="comment.user_pic_url" style="width: 80%;border-radius: 50%"/>
                    </div>
                    <div class="parent">
                      <div class="header">
                        <span style="float: left">{{comment.user_name}}</span>
                        <span style="float: right">{{comment.comment_time}}</span>
                      </div>
                      <div class="stars"><span>评分：</span><stars :count="comment.order_comment_score"></stars></div>
                      <div class="content">
                        {{comment.comment}}
                      </div>
                      <div v-if="comment.cpmment_img"><img :src=comment.cpmment_img style="width: 78%;margin-top: 0.2rem"></div>
                    </div>
                  </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import stars from './stars'
  import BScroll from 'better-scroll'
    export default {
        name: "Ratings",
      components:{
        stars
      },
      data(){
          return{
            selectType:1,
            ratings:{},
            ratingstype:[],
            ratings1:[],
            ratings2:[],
            ratings3:[]
          }
      },
      methods:{
        selectTypefn(type){
          this.selectType=type;
          if(type===1){
            this.ratingstype = this.ratings1;
            console.log("1")
          }else if(type===2){
            this.ratingstype = this.ratings2;
            console.log(this.ratingstype)
          }else if(type===3){
            this.ratingstype = this.ratings3;
            console.log("3")
          }
        },
        initScroll(){
          this.containerScroll =	new BScroll (this.$refs.containerScroll,{probeType:3,click:true});
        },
        getdata(){
         fetch("https://www.easy-mock.com/mock/5c495bf428a69b32a72d285e/example/ratings")
           .then((res) =>res.json())
           .then(res =>{
             this.ratings=res.data;
             this.ratings.comments.forEach((item)=>{
                if(item.Order_classification===1){
                  this.ratings1.push(item);
                }else if (item.Order_classification===2){
                  this.ratings2.push(item);
                }
             });
             this.ratingstype=this.ratings1;
             console.log(this.ratings1);
             console.log(this.ratings2);
           })
           .catch(res =>{
             console.log(res);
           })
        },
      },
      created() {
        this.getdata();
        this.$nextTick(() => { //这个函数是指页面的DOM渲染完成之后才进行
          // 执行滚动方法
          this.initScroll();
        });
      }
    }
</script>


