<template>
	<div class="contactPage pageStyle">
		<wv-cell title="基地:" class="inputStyle baseStyle base" is-link :value="ticket | pickerValueFilter" @click.native="ticketPickerShow = true" />
  		<wv-picker
	      :visible.sync="ticketPickerShow"
	      v-model="ticket"
	      :columns="ticketColumns"
	      @confirm="confirmTicket"
	    />
	    <div class="contactMsg">
	    	<p>尊敬的国废供应商:</p>
	    	<p>如遇到XXX问题，客服24小时在线通知QQ:4747556617</p>
	    	<p>如遇到内容特殊情况，我们要联系微信信息类型</p>
	    </div>
	    <div class="annexInformation">
	      <h3>附件信息</h3>
	      <ul class="informationList">
	        <li>
	          <i class="icon"></i>
	          <span class="fl">12.mp4</span>
	          <span class="fr">341.66KB</span>
	        </li>
	        <li>
	          <i class="icon"></i>
	          <span class="fl">12.mp4</span>
	          <span class="fr">341.66KB</span>
	        </li>
	        <li>
	          <i class="icon"></i>
	          <span class="fl">12.mp4</span>
	          <span class="fr">341.66KB</span>
	        </li>
	        <li>
	          <i class="icon"></i>
	          <span class="fl">12.mp4</span>
	          <span class="fr">341.66KB</span>
	        </li>
	        <li>
	          <i class="icon"></i>
	          <span class="fl">12.mp4</span>
	          <span class="fr">341.66KB</span>
	        </li>
	        <li>
	          <i class="icon"></i>
	          <span class="fl">12.mp4</span>
	          <span class="fr">341.66KB</span>
	        </li>
	        <li>
	          <i class="icon"></i>
	          <span class="fl">12.mp4</span>
	          <span class="fr">341.66KB</span>
	        </li>
	        <li>
	          <i class="icon"></i>
	          <span class="fl">12.mp4</span>
	          <span class="fr">341.66KB</span>
	        </li>
	        <li>
	          <i class="icon"></i>
	          <span class="fl">12.mp4</span>
	          <span class="fr">341.66KB</span>
	        </li>
	        <li>
	          <i class="icon"></i>
	          <span class="fl">12.mp4</span>
	          <span class="fr">341.66KB</span>
	        </li>
	      </ul>
	    </div>
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
	@import './css/contactPage.css';
	@import './css/style.css';
</style>