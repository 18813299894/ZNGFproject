<template>
	<div class="futurePricePage pageStyle">
		<div class="recoveryMsg">
			<p><span>xxx</span>你好，「<span>2018/12/09</span>」起，送往「<span>基地名称</span>」玖龙，收货单如下</p>
		</div>
		<wv-form-preview class="preview-item" title="回收材料" value="回收价格(元)" :dataItems="dataItems"/>
	</div>
</template>
<script>
	export default {
	  data () {
	    return {
	      dataItems: [
	        {
	          label: 'A级页子纸',
	          value: '300.00'
	        },
	        {
	          label: '带皮书切页子纸',
	          value: '2870.00'
	        },
	        {
	          label: '混合白纸',
	          value: '2220.00'
	        }
	      ]
	    }
	  }
	}
</script>
<style>
	@import './css/futurePricePage.css';
	@import './css/style.css';
</style>