<template>
  <div class="test" @click="aaaa()">  
    <div @click="openPicker()">{{dateTime}}</div>
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
    <!--  <validator name="myForm">
     Zip:<input type="text" v-validate:zip="['required']"><br/>
     <div>
         <span v-if="$myForm.zip.required">zip code id required.</span>
     </div>
   </validator> -->
  </div>
   
</template>
<script>
export default {
  data () {
    return {
      dateTime: '',
      startDate: new Date()
    }
  },
  methods: {
    openPicker () {
      this.$refs.picker.open()
    },
    handleConfirm (data) {
      let date = moment(data).format(date,'YYYY.MM.DD')
      this.dateTime = date
    }
  }
}
</script>
<style>
</style>