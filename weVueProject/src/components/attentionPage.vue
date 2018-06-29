<template>
	<div class="attentionPage pageStyle">
		<wv-cell title="基地" class="baseStyle" is-link :value="ticket | pickerValueFilter" @click.native="ticketPickerShow = true" />
		<wv-picker
			:visible.sync="ticketPickerShow"
			v-model="ticket"
			:columns="ticketColumns"
			@confirm="confirmTicket"
		/>
		<wv-media-box :thumb="thumb" title="注意事项" :description="description" to="/" type="text">
			<ul class="weui-media-box__info" slot="box_ft">
				<li class="weui-media-box__info__meta">2018/3/21  10:20</li>
				</ul>
		</wv-media-box>
		<div class="attentionList">
			<ul>
				<li>1、回收货品是符合什么条件的</li>
				<li>2、要求是什么</li>
			</ul>
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
export default{
	data (){
		return{
			ticketValue: [],
			ticketPickerShow: false,
			ticket: ['东莞基地'],
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
	@import './css/attentionPage.css';
	@import '/css/style.css';
</style>