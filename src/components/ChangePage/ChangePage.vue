<template>
  <div>
      <div>
        <a @click="sendmsg">保存</a>
      </div>
      <ul>
        <li v-for="(fro,index) in from" :key="index">
          <InputDate :from='fro' :num='index'></InputDate>
        </li>
      </ul>

  </div>

</template>

<script>
import {mapState} from 'vuex'
import InputDate from '../InputDate/InputDate.vue'
export default {
  data () {
    return {
      // 将msg传递给父组件
      isshow: true
    }
  },
  methods: {
    sendmsg () {
      this.$emit('func', this.isshow)
    }
  },
  computed: {
    ...mapState(['from'])
  },
  components: {
    InputDate
  }
}
</script>

<style>

</style>
