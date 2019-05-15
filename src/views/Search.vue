<style scoped lang="stylus">
  .search{
    .List{
      margin-top 0.5rem
      height 0.8rem
      border-bottom solid #cccccc 0.02rem
      .title{
        float left
        font-size 0.4rem
        margin-left 0.2rem
        line-height 0.6rem
      }
      .value{
        float right
        margin-right  0.2rem
        color #0aa0e6
        line-height 0.6rem
      }
    }
    .show{
      width 100%
      margin-top 2rem
      height 1rem
      font-size 0.4rem
      text-align center
      line-height 1rem
    }
  }

</style>
<template>
  <div>
    <mt-search class="search"
      v-model="values"
      >
      <!--<mt-cell-->
        <!--v-for="item in result"-->
        <!--:title="item.title"-->
        <!--:value="item.value">-->
      <!--</mt-cell>-->

      <div v-for="item in Listdata" class="List" @click="goto">
        <span class="title">{{item.title}}</span>
        <span class="value">{{item.value}}</span>
      </div>

      <div v-if="show" class="show" >
            对不起请换一个关键字搜索
      </div>

    </mt-search>
  </div>
</template>

<script>
  import axios from 'axios'
    export default {
        name:"Search",
      data(){
          return{
            show:false,
            values:'',
            List:[],
            // result:{
            //   title:"吉野家吉食送",
            //   value:"田老师红烧肉"
            // }
          }
      },
      computed:{
        Listdata(){

         let data=  this.List.filter((item)=>{
            return  item.title.includes(this.values)
          });

         if(!data.length){
           this.show=true
         }else {
           this.show=false
         }
          return data
        }
      },
      methods:{
        goto(){
          this.$router.push("/Shopcar")
        },
        loadData(){
          axios.get('https://www.easy-mock.com/mock/5c495bf428a69b32a72d285e/example/business').then(this.ListData).catch(this.Err)
        },
        ListData(res){
          this.List =res.data;
        },
        Err(err){
          console.log(err);
        }
      },
      created() {
          this.loadData()
      }
    }
</script>


