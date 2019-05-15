
<style scoped lang="stylus">
  .container{
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background: -webkit-linear-gradient(#0aa0e6,#ffffff)
	.from{
	  margin: 2rem auto;
	  width: 92%;
	  display: block;
      >>>.mint-button::after{
		background-color: greenyellow;  
	  }
	}
  }
</style>

<template>
  <div class="container">
	<mt-header>
         <router-link to="./PersonalCenter" slot="left">
            <mt-button icon="back">返回</mt-button>
         </router-link>
		 <router-link to="./Register" slot="right">
		    <mt-button >注册</mt-button>
		 </router-link>
		
    </mt-header>


    <div class =from>
		
		<mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="this.data.phone"></mt-field>
		<mt-field label="密码" placeholder="请输入密码" type="password" v-model="this.data.password"></mt-field>
        
	</div>
	
	<mt-button size="large" type="primary" style='width: 94%; margin: 0 auto;'>登录</mt-button>
	
  </div>
</template>

<script>

  export default {
     data(){
		 return{
			 data:{
				phone:'' ,
				password:''
			 }
		 }
	 }
  }
</script>



