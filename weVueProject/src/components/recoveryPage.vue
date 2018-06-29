<template>
	<div class="recoveryPage pageStyle">
		<wv-input label="供应商名称:" class="inputStyle" placeholder="输入名称" v-model="valueSupplierName" required></wv-input>
		<wv-input label="供应商编号:" class="inputStyle" placeholder="输入编号" v-model="valueSupplierNum" required></wv-input>
		<wv-input label="联系人姓名:" class="inputStyle" placeholder="输入姓名" v-model="valueContactsName" required></wv-input>
		<wv-input label="联系方式:" class="inputStyle" placeholder="输入联系方式" v-model="valueContactsWay" required></wv-input>
		<wv-cell title="回收基地:" class="baseStyle" is-link :value="ticket | pickerValueFilter" @click.native="ticketPickerShow = true" />
	    <wv-picker
	    :visible.sync="ticketPickerShow"
	    v-model="ticket"
	    :columns="ticketColumns"
	    @confirm="confirmTicket"
	    />
		<wv-input label="货物重量(吨):" class="inputStyle" placeholder="输入货物重量" v-model="valueWeightOfGoods" required></wv-input>	
		<div class="datePicker inputStyle">
			<label for="" class="fl">时间:</label>
			<a class="fr" @click="openPicker()">{{dateTime}}</a>
			<wv-datetime-picker
			  type="date"
			  ref="picker"
			  year-format="{value} 年"
			  month-format="{value} 月"
			  date-format="{value} 日"
			  @confirm="handleConfirm"
			  :startDate="startDate"
			  v-model="dateTime"
			  >
			</wv-datetime-picker>
		</div>
		<wv-input label="回收地址:" class="inputStyle" placeholder="输入地址" v-model="valueRecoveryAddress" required></wv-input>
		<wv-group class="textArea">
			<wv-textarea class="textAreaSize" placeholder="输入备注信息" :rows="2" :show-counter="false" v-model="content1"></wv-textarea>
		</wv-group>
		<wv-button type="primary" class="btnStyle" Dialog>提交</wv-button>
	</div>
</template>
<script>
	export default {
	  	data () {
	    	return {
	        	ticketValue: [],
	        	ticketPickerShow: false,
	        	dateTime: '',
	        	startDate: new Date(),
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
	    		]
	    	}
	  	},
	  	methods: {
	    	confirmTicket (picker) {
	      		this.ticket = picker.getValues()
	    	},
	    	openPicker () {
	    	  this.$refs.picker.open()
	    	},
	    	handleConfirm (data) {
	    	  let date = moment(data).format(date,'YYYY.MM.DD')
	    	  this.dateTime = date
	    	}
	  	},
	  	filters: {
	    	pickerValueFilter (val) {
	    		if (Array.isArray(val)) {
	        		return val.toString()
	      		} else {
	        		return '请选择基地'
	      		}
	    	},
	    	/*datetimeValueFilter(val){
	    		if (Array.isArray(val)) {
	    			return val.toString()
	    		}else{
	    			return'选择时间>'
	    		}
	    	}*/
	  	}
	}
</script>
<style>
	@import './css/recoveryPage.css';
	@import './css/style.css';
</style>