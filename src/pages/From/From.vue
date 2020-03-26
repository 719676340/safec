<template>
  <div>
    <div>
      From
      {{chooseid}}
      <a @click="goto('/company')">返回</a>
    </div>
    <div>
      <div @click="getfrom(1)">
        <router-link to="/from/from1"  replace>from1</router-link>
      </div>
      <div  @click="getfrom(2)">
        <router-link to="/from/from2"  replace>from2</router-link>
      </div>
      <div  @click="getfrom(3)">
        <router-link to="/from/from3" replace>from3</router-link>
      </div>
      <router-view/>
    </div>
  </div>

</template>

<script>
import {mapState} from 'vuex'
export default {
  data () {
    return {
      companyid: this.$store.state.chooseid
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
    ...mapState(['chooseid'])
  },
  mounted () {
    this.$store.dispatch('getfrom', {companyid: this.chooseid, fromno: 1})
  }
}
</script>

<style>

</style>
