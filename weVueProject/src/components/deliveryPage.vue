<template>
	<div class="deliveryPage pageStyle">
		<wv-input label="供应商名称:" class="supplierName inputStyle" placeholder="输入名称" v-model="valueSupplierName" required></wv-input>
		<wv-input label="供应商编号:" class="supplierNum inputStyle" placeholder="输入编号" v-model="valueSupplierNum" required></wv-input>
		<wv-input label="联系人姓名:" class="contactsName inputStyle" placeholder="输入姓名" v-model="valueContactsName" required></wv-input>
		<wv-input label="联系方式:" class="contactsWay inputStyle" placeholder="输入联系方式" v-model="valueContactsWay" required></wv-input>
		<wv-cell title="送货基地:" class="inputStyle baseStyle" is-link :value="ticket | pickerValueFilter" @click.native="ticketPickerShow = true" />
	    <wv-picker
	      :visible.sync="ticketPickerShow"
	      v-model="ticket"
	      :columns="ticketColumns"
	      @confirm="confirmTicket"
	    />
		<wv-input label="车辆数目:" class="weightOfGoods inputStyle" placeholder="输入车辆数目" v-model="valueWeightOfGoods" required></wv-input>	
		<div class="datePicker inputStyle">
			<label for="" class="fl">时间:</label>
			<a href="#" class="fr">选择时间></a>
		</div>
		<wv-group class="textArea">
		  <wv-textarea class="textAreaSize" placeholder="输入备注信息" :rows="2" :show-counter="false" v-model="content1"></wv-textarea>
		</wv-group>
		<wv-button type="primary" class="submissionBtn" Dialog>提交</wv-button>
	</div>
</template>
<script>
	export default {
	  data () {
	    return {
	        ticketValue: [],
	        ticketPickerShow: false,
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
	@import './css/deliveryPage.css';
	@import './css/style.css';
</style>