<template>
    <div id="app">
    
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-link to='/artboard1'>点击跳转test</router-link> -->
        <router-view></router-view>
    <!-- <wv-circle :line-width="3" value="12" class="aaa">12 %</wv-circle>
    <wv-circle :line-width="5" fill-color="yellow" value="12" class="aaa">12 %</wv-circle> -->
    <!-- <wv-circle :line-width="1" value="25" stroke-color="red" :diameter="414">30 %</wv-circle>
    <wv-icon type="success-no-circle" :large="flase" class="bbb"></wv-icon>
    <wv-progress :percent="percent2"/>
    <wv-progress :percent="percent1" :show-clear="false" @cancel="onCancel"/>
    <button cancel="percent" class="ccc"></button>
    <wv-group title="带说明的列表项">
      <wv-cell title="标题文字" :value="true"></wv-cell>
    </wv-group>
    <router-view/>
    <div class="page">
    <ul class="lazyload-list">
      <li class="lazyload-list-item" v-for="item in list">
        <img v-lazy="item" class="lazyload-image">
      </li>
    </ul>
      </div> -->
    </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
    font-family: PingFangSC-Regular;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
