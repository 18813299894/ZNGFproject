<template>
	<div class="queryOrderPage pageStyle">
		<wv-input class="inputStyle" label="订单号" placeholder="输入订单号" v-model="valueText"></wv-input>
		<wv-button type="primary" class="btnStyle" @click="checkuser()">查询订单</wv-button>
	</div>
</template>
<script></script>
<style>
	@import './css/queryOrderPage.css';
	@import './css/style.css';
</style>