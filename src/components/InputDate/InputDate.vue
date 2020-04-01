<template>
    <div>
      <!-- <div>
          序号：{{from.bigno}}
          评估项目：{{from.name}}
          编号：{{from.smallno}}
          内容：{{from.content}}
          依据：{{from.basis}}
      </div> -->
      <!-- <el-table :data="from" style="width : 100%" >
        <el-table-column prop="bigno" label="内容" width="width : 12.5%"></el-table-column>
        <el-table-column prop="name" label="评估项目" width="width : 12.5%"></el-table-column>
        <el-table-column prop="smallno" label="编号" width="width : 12.5%"></el-table-column>
        <el-table-column prop="content" label="内容" width="width : 12.5%"></el-table-column>
        <el-table-column prop="basis" label="依据" width="width : 12.5%"></el-table-column>
        <el-table-column prop="real" label="实际" width="width : 12.5%"></el-table-column>
        <el-table-column prop="result" label="结果" width="width : 12.5%"></el-table-column>
        <el-table-column prop="note" label="备注" width="width : 12.5%"></el-table-column>
      </el-table> -->
      <!-- <fieldset> -->
          <div >
              <label>实际检查状况：</label>
              <input type="text" v-model="real"/>
          </div>
          <div >
              <label>评估结果：</label>
              <input type="text" v-model="result"/>
          </div>
          <div >
              <label>备注：</label>
              <input type="text" v-model="note"/>
          </div>
          <div >
          <label></label>
          <button @click="addinfo(num,from.companyid,from.fromno,from.fromid)">提交</button>
          </div>
      <!-- <-- </fieldset> -->
    </div>
</template>

<script>
import {updatefrom} from '../../api/index'
export default {
  props: {
    from: Object,
    num: Number
  },
  data () {
    return {
      real: this.from.real,
      result: this.from.result,
      note: this.from.note
    }
  },
  methods: {
    addinfo (num, companyid, fromno, fromid) {
      const {real, result, note} = this
      this.$store.dispatch('updatefrom', {num, real, result, note})
      updatefrom({companyid, fromno, fromid, real, result, note})
    }
  }
}
</script>

<style>

</style>
