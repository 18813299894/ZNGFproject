<template>
	<div class="overWeightDetails pageStyle">
		<wv-form-preview class="preview-item orderDetails" title="订单号" value="235726389" :dataItems="dataItems"/>	
	</div>
</template>
<script>
	export default{
        data (){
            return{
                dataItems: [
                {
                    label: '送货单号',
                    value: '124213123234'
                },
                {
                    label: '磅单号',
                    value: '124124214124214124124'
                },
                {
                    label: '供应商名称',
                    value: '云南供应商'
                },
                {
                    label: '物料描述',
                    value: '很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的描述'
                },
                {
                    label: '车号',
                    value: '粤A123123'
                },
                {
                    label: '第一次称重',
                    value: '15KG'
                },
                {
                    label: '第二次称重',
                    value: '15KG'
                },
                {
                    label: '净重',
                    value: '14KG'
                },
                {
                    label: '包数',
                    value: '13包'
                },
                {
                    label: '扣水',
                    value: '15KG'
                },
                {
                    label: '扣杂物',
                    value: '15KG'
                },
                {
                    label: '扣杂物',
                    value: '15KG'
                },
                {
                    label: '入库净重',
                    value: '15KG'
                },
                {
                    label: '过路票张数',
                    value: '15张'
                }
                ]
            }
        }
    }
</script>
<style>	
	@import './css/overWeightDetails.css';
    @import './css/style.css';
</style>