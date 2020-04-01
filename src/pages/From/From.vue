<template>
  <div>
    <el-button type="primary" @click="goto('/company')" style="position:fixed;right:10px;top:40px">返回</el-button>
    <div>
      {{choosename}}
      <!-- <a @click="goto('/company')">返回</a> -->
    </div>
    <div>
      <el-menu :default-active="activeMenu"  mode="horizontal" router>
        <el-menu-item index="/from/from1" @click="getfrom(1)">form1</el-menu-item>
        <el-menu-item index="/from/from2" @click="getfrom(2)">form2</el-menu-item>
        <el-menu-item index="/from/from3" @click="getfrom(3)">form3</el-menu-item>
      </el-menu>
      <!-- <div @click="getfrom(1)">
        <router-link to="/from/from1"  replace>from1</router-link>
      </div>
      <div  @click="getfrom(2)">
        <router-link to="/from/from2"  replace>from2</router-link>
      </div>
      <div  @click="getfrom(3)">
        <router-link to="/from/from3" replace>from3</router-link>
      </div> -->
      <router-view/>

    </div>
  </div>

</template>

<script>
import {mapState} from 'vuex'
export default {
  data () {
    return {
      companyid: this.$store.state.chooseid,
      activeIndex: 1
    }
  },
  methods: {
    goto (path) {
      this.$router.replace(path)
    },
    getfrom (fromno) {
      this.$store.dispatch('getfrom', {companyid: this.chooseid, fromno: fromno})
    }
  },
  computed: {
    ...mapState(['chooseid', 'choosename']),
    activeMenu () {
      const route = this.$route
      const { meta, path } = route
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    }
  },
  mounted () {
    this.$store.dispatch('getfrom', {companyid: this.chooseid, fromno: 1})
  }
}
</script>

<style>

</style>
