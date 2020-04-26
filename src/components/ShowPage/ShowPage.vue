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
    </ul>-->
    <div>
      结果：
      <el-button type="text" @click="showt">符合</el-button>
      <el-button type="text" @click="showf">不符合</el-button>
    </div>

    <el-table :data="from" style="width : 100%">
      <el-table-column prop="bigno" label="序号" width="width : 12.5%" show-header="false"></el-table-column>
      <el-table-column prop="name" label="评估项目" width="width : 12.5%"></el-table-column>
      <el-table-column prop="smallno" label="编号" width="width : 12.5%"></el-table-column>
      <el-table-column prop="content" label="内容" width="width : 12.5%"></el-table-column>
      <el-table-column prop="basis" label="依据" width="width : 12.5%"></el-table-column>
      <el-table-column prop="real" label="实际" width="width : 12.5%"></el-table-column>
      <el-table-column prop="result" label="结果" width="width : 12.5%"></el-table-column>
      <el-table-column prop="note" label="备注" width="width : 12.5%"></el-table-column>
    </el-table>
    <el-dialog title="收货地址" :visible.sync="trueVisible">
      <el-table :data="truefrom">
      <el-table-column prop="bigno" label="序号" width="width : 12.5%" show-header="false"></el-table-column>
      <el-table-column prop="name" label="评估项目" width="width : 12.5%"></el-table-column>
      <el-table-column prop="smallno" label="编号" width="width : 12.5%"></el-table-column>
      <el-table-column prop="content" label="内容" width="width : 12.5%"></el-table-column>
      <el-table-column prop="basis" label="依据" width="width : 12.5%"></el-table-column>
      <el-table-column prop="real" label="实际" width="width : 12.5%"></el-table-column>
      <el-table-column prop="result" label="结果" width="width : 12.5%"></el-table-column>
      <el-table-column prop="note" label="备注" width="width : 12.5%"></el-table-column>
      </el-table>
    </el-dialog>
    <el-dialog title="收货地址" :visible.sync="falseVisible">
      <el-table :data="falsefrom">
      <el-table-column prop="bigno" label="序号" width="width : 12.5%" show-header="false"></el-table-column>
      <el-table-column prop="name" label="评估项目" width="width : 12.5%"></el-table-column>
      <el-table-column prop="smallno" label="编号" width="width : 12.5%"></el-table-column>
      <el-table-column prop="content" label="内容" width="width : 12.5%"></el-table-column>
      <el-table-column prop="basis" label="依据" width="width : 12.5%"></el-table-column>
      <el-table-column prop="real" label="实际" width="width : 12.5%"></el-table-column>
      <el-table-column prop="result" label="结果" width="width : 12.5%"></el-table-column>
      <el-table-column prop="note" label="备注" width="width : 12.5%"></el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      // 将msg传递给父组件
      isshow: false,
      trueVisible: false,
      falseVisible: false,
      // truefrom: [],
      // falsefrom: [],
      gridData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }]
    }
  },
  computed: {
    ...mapState(['from']),
    truefrom () {
      return this.from.filter(item => item.result === '符合')
    },
    falsefrom () {
      return this.from.filter(item => item.result === '不符合')
    }
  },
  methods: {
    sendmsg () {
      this.$emit('func', this.isshow)
    },
    showt () {
      this.trueVisible = true
    },
    showf () {
      this.falseVisible = true
    }
  }
}
</script>

<style>
</style>
