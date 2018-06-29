<template>
    <div class="latestPricePage pageStyle">
  		<wv-cell title="基地:" class="inputStyle baseStyle" is-link :value="ticket | pickerValueFilter" @click.native="ticketPickerShow = true" />
  		<wv-picker
	    :visible.sync="ticketPickerShow"
	    v-model="ticket"
	    :columns="ticketColumns"
	    @confirm="confirmTicket"
		/>
		<wv-form-preview class="preview-item" title="回收材料" value="回收价格(元)" :dataItems="dataItems"/>
  	</div>
</template>
<script>
	export default {
	  	data () {
	    	return {
	        	ticketValue: [],
	        	ticketPickerShow: false,
	        	ticket:['东莞基地'],
	        	ticketColumns: [
	    		{
	       			values: [
		        		'东莞基地',
		        		'广州基地',
		        		'梅州基地',
		        		'惠州基地',
		        		'其它'
	        		],
	       			defaultIndex: 0
	       		}
	      		],
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
		},
		methods: {
	    	confirmTicket (picker) {
	      		this.ticket = picker.getValues()
	    	}
	  	},
	  	filters: {
	    	pickerValueFilter (val) {
	      		if (Array.isArray(val)) {
	        		return val.toString()
	      		} else {
	        		return '请选择基地'
	      		}
	    	}
	  	}
	}
</script>
<style>
	@import './css/latestPricePage.css';
	@import './css/style.css';
</style>