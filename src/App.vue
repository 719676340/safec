<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
// import {reqcompanysinfo} from './api/index'
import {mapActions} from 'vuex'

export default {
  name: 'App',
  async mounted () { // 加载
    this.$store.dispatch('getcompanys')
    // this.getcompanys()
    // const result = await reqcompanysinfo()
    // console.log(result)
  },
  methods: {
    ...mapActions(['getcompanys'])
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
