<template>
	<div class="homePage pageStyle">
		<div class="order">
			<div class="oderTitle">
				<h2 style="font-weight:normal">未处理订单号</h2>
				<p style="color:#b1b1b1">2018年01月</p>
			</div>
			<div class="line"></div>
			<div class="oderItem">
				<lable class="oderNum">订单号</lable>
				<span class="oderNumber">231231231</span>
			</div>
			<div class="oderItem">
				<lable class="oderNum">订单号</lable>
				<span class="oderNumber">231231231</span>
			</div>
		</div>
		<div class="footer">
			<div class="keyBoard">
				<i></i>
			</div>
			<div class="footerItem">上门回收</div>
			<div class="footerItem">送货上门</div>
			<div class="footerItem" style="border-right:0;">客户中心</div>
			<div class="recovery">
				<a href="/#/recoveryPage">预约回收</a>
				<div class="line" style="margin:0"></div>
				<a href="/#/attentionPage">注意事项</a>
				<div id="triangle-facing-right"></div> 
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'homePage',
	data () {
		return {
		}
	}
}
</script>
<style scoped>
	@import './css/homePage.css';
	@import './css/style.css';
</style>
