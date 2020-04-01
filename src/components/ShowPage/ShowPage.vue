<template>
  <div>
      <div>
        <!-- <a @click="sendmsg">编辑</a> -->
        <!-- <el-switch v-model="isshow" active-text="编辑" inactive-text="保存" :change="sendmsg"></el-switch> -->
      </div>
      <!-- <ul>
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
      </ul> -->
      <el-table :data="from" style="width : 100%" >
        <el-table-column prop="bigno" label="序号" width="width : 12.5%" show-header="false"></el-table-column>
        <el-table-column prop="name" label="评估项目" width="width : 12.5%"></el-table-column>
        <el-table-column prop="smallno" label="编号" width="width : 12.5%"></el-table-column>
        <el-table-column prop="content" label="内容" width="width : 12.5%"></el-table-column>
        <el-table-column prop="basis" label="依据" width="width : 12.5%"></el-table-column>
        <el-table-column prop="real" label="实际" width="width : 12.5%"></el-table-column>
        <el-table-column prop="result" label="结果" width="width : 12.5%"></el-table-column>
        <el-table-column prop="note" label="备注" width="width : 12.5%"></el-table-column>
      </el-table>
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
