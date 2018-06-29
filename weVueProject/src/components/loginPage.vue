<template>
	<div class="loginPage">
		<div class="oval1"></div>
		<div class="oval2"></div>
		<div class="oval3"></div>
		<div class="oval4"></div>	
		<div class="oval5"></div>
		<div class="oval6"></div>
		<div class="oval7"></div>
		<div class="oval8"></div>
		<div class="rectangle"></div>
		<div class="star-1">
			<i class="star-five star-five-1"></i>
		</div>
		<div class="star-2">
			<i class="star-five star-five-2"></i>
		</div>
		<div class="Pent-1">
			<i class="pentagon-1"></i>
		</div>
		<div class="Pent-2">
			<i class="pentagon-2"></i>
		</div>
		<div class="Pent-3">
			<i class="pentagon-3"></i>
		</div>
		<div class="word">中南国废采购平台</div>
		<img src="./../assets/logo.png" class="logo" />

		<wv-group title="账号" class="username loginStyle">
			<wv-input id="adminName" placeholder="输入账号..." ref="adminValue" v-model="valueAdmin"></wv-input>
		</wv-group>
		<wv-group title="密码" class="password loginStyle">
			<wv-input id="psw" placeholder="输入密码..." type="password" ref="pswValue" v-model="valuePsw"></wv-input>
		</wv-group>
		
		<wv-group title="验证码" class="identifyingCode loginStyle">
		  <wv-input id="vcode" class="weui-cell_vcode" placeholder="输入验证码..." ref="codeValue" v-model="vcode">
		    <img :src="vcodeImage" class="vcode" slot="ft" @click="getCode()"/>
		  </wv-input>
		</wv-group>

		<wv-button type="primary" class="btnStyle" @click="checkuser()">登录</wv-button>
	</div>	
</template>
<script>
	export default {
	  	name: 'loginPage',
	  	data () {
	    	return {
	      		vcodeImage:'./../assets/image/timg.jpg',
	      		valueAdmin:'',
	      		valuePsw:'',
	      		vcode:''
	    	}
	  	},
	  	methods:{
	  		checkuser:function(){
	  			/*alert("账号：" +this.$refs.adminValue.value + "\n密码：" +this.$refs.pswValue.value +"\n验证码" + this.$refs.codeValue.value)*/
	  			/*alert("账号："+this.valueAdmin+"\n密码："+this.valuePsw+"\n验证码："+this.vcode);*/
	  			this.$axios.post('/index.php?model=login&m=ajax&cmd=101',{
	  				"data":{"acct":this.$refs.adminValue.value,"password":this.$refs.pswValue.value,"verify_code":this.$refs.codeValue.value}
	  			})
	  			.then(res=>{
	  			    alert(1); 	
	  			    this.$router.push({path:'/homePage'});
	  			  })
	  			.catch(err=>{
	  			    alert(2);
	  			})
	  		},
	  		getCode:function(){
	  			this.$axios.get('index.php?model=login&page_name=code.php',{
	  			})
	  			.then(res=>{
	  				
	  			})
	  		}
	  	}
	}
</script>
<style scoped>
	@import './css/loginPage.css';
	@import './css/style.css';
</style>