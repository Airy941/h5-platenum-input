<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: huyu12
 * @Date: 2022-03-24 10:36:01
 * @LastEditors: huyu12
 * @LastEditTime: 2022-03-24 16:15:17
-->
<template>
  <div id="app">
    <Test font-size="12" />
  </div>
</template>

<script>
import Test from './components/platenum-input/PlateInput.vue'
export default {
  name: 'app',
  components: { Test },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="less" scoped>
* {
  padding: 0;
}
#app {
  width: 100%;
  height: 100%;
}
</style>
