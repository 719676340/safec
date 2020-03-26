<template>
  <div>
      <div>
        <a @click="sendmsg">编辑</a>
      </div>
      <ul>
        <li v-for="(fro,index) in from" :key="index">
          序号：{{fro.bigno}}
          评估项目：{{fro.name}}
          编号：{{fro.smallno}}
          内容：{{fro.content}}
          依据：{{fro.basis}}
          实际：{{fro.real}}
          结果：{{fro.result}}
          备注：{{fro.note}}
        </li>
      </ul>
  </div>

</template>

<script>
import {mapState} from 'vuex'
export default {
  data () {
    return {
      // 将msg传递给父组件
      isshow: false
    }
  },
  computed: {
    ...mapState(['from'])
  },
  methods: {
    sendmsg () {
      this.$emit('func', this.isshow)
    }
  }
}
</script>

<style>

</style>
