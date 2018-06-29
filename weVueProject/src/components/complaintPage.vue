<template>
	<div class="complaintPage pageStyle">
		<div class="proveArea">
			<p>投诉证明</p>
			<div class="addIcon">
				+
			</div>
		</div>
		<wv-group class="textArea">
		  	<wv-textarea class="textAreaSize" placeholder="输入备注信息" :rows="2" :show-counter="false" v-model="content1"></wv-textarea>
		</wv-group>
		<wv-button class="submissionBtn" type="primary"  Dialog>提交建议</wv-button>
    </div>
</template>
<script>
</script>
<style>
    @import './css/complaintPage.css';
    @import './css/style.css';
</style>