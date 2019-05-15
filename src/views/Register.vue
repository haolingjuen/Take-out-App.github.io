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
	   >>>.mint-cell-wrapper{
		
	  }
	  .input{
		  width: 100%;
		  height: 1rem;
		  display: block;
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
		 <router-link to="./Sign" slot="right">
		    <mt-button >登录</mt-button>
		 </router-link>
		
    </mt-header>


    <div class =from>
		<mt-field label="用户名" placeholder="请输入用户名" v-model="this.data.username"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" type="password" v-model="this.data.password"></mt-field>
		<mt-field label="确认密码" placeholder="请再次输入密码" type="password" v-model="this.data.passwordIF"></mt-field>
        <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="this.data.phone">
			<span @click="badgeShow" v-if="Show">
				<mt-badge size="normal" type="success"  >获取验证码</mt-badge>
			</span>
			<span  v-else>
			<mt-badge size="normal" type="success">{{count}}</mt-badge>
			秒后再获取</span>
		</mt-field>
		<mt-field v-if="!Show" label="验证码" placeholder="请输入验证码" v-model="this.data.Verification"  type="number"></mt-field>
       
	</div>
	
	<mt-button  size="large" type="primary" style='width: 94%; margin: 0 auto;' >注册</mt-button>
	
  </div>
</template>

<script>

  export default {
     data(){
		 return{
			data:{
				username:"",
				password:"",
				passwordIF:"",
				phone:"",
				Verification:""
			},
			Show:true,
			count:60
		 }
	 },
	 methods:{
		 badgeShow(){
			 this.Show=false;
			const timer= setInterval(()=>{
				this.count-- 
				if(this.count<=0){
				clearInterval(timer); 
				this.Show=true;
				this.count=60;
				}
			 },1000)
	
		 }
	 }
  }
</script>
