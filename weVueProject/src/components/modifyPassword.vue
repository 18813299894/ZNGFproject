<template>
	<div class="modifyPassword pageStyle">
		<wv-input label="旧密码:" class="inputStyle" placeholder="输入旧密码" ref="oldPsw" v-model="oldPsw" required></wv-input>
		<wv-input label="新密码:" class="inputStyle" placeholder="输入6~16位的密码" ref="newPsw" v-model="mewPsw" required></wv-input>
		<wv-input label="确认新密码:" class="inputStyle" placeholder="请再次输入新密码" ref="renewPsw" v-model="renewPsw" required></wv-input>
		<wv-button type="primary" @click="submit()" class="btnStyle" Dialog>提交</wv-button>
	</div>
</template>
<script>
export default {
  	name: 'loginPage',
  	data () {
    	return {
      		oldPsw:'',
      		newPsw:'',
      		renewPsw:''
    	}
  	},
  	methods:{
  		submit:function(){
  			/*alert("旧密码：" +this.$refs.oldPsw.value + "\n新密码：" +this.$refs.newPsw.value +"\n确认新密码" + this.$refs.renewPsw.value)*/
  			this.$axios.post('index.php?model=login&m=ajax&cmd=104',{
  				"data":{"old_psw":this.$refs.oldPsw.value,"new_psw":this.$refs.newPsw.value,"renew_psw":this.$refs.renewPsw.value}
  			})
  			.then(res=>{
  			    alert(1); 	
  			  })
  			.catch(err=>{
  			    alert(2);
  			})
  		}
  	}
}
</script>
<style>
	@import './css/modifyPassword.css';
	@import './css/style.css';
</style>