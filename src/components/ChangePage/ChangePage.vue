<template>
  <div>
      <!-- <div>
        <a @click="sendmsg">保存</a>
      </div> -->
      <!-- <ul>
        <li v-for="(fro,index) in from" :key="index">
          <InputDate :from='fro' :num='index'></InputDate>
        </li>
      </ul> -->
      <el-table :data="from" style="width : 100%" >
        <el-table-column prop="bigno" label="内容" width="width : 10%"></el-table-column>
        <el-table-column prop="name" label="评估项目" width="width : 10%"></el-table-column>
        <el-table-column prop="smallno" label="编号" width="width : 10%"></el-table-column>
        <el-table-column prop="content" label="内容" width="width : 10%"></el-table-column>
        <el-table-column prop="basis" label="依据" width="width : 10%"></el-table-column>
        <el-table-column  label="实际" width="width : 10%">
          <template slot-scope="{row,$index}">
            <span v-if="!showEdit[$index]">{{row.real}}</span>
            <el-input type="text" v-model="realtext[$index]" v-else placeholder="实际"></el-input>
          </template>
        </el-table-column>
        <el-table-column label="结果" width="width : 10%">
          <template slot-scope="{row,$index}">
            <span v-if="!showEdit[$index]">{{row.result}}</span>
            <!-- <el-input type="text" v-model="resulttext[$index]" v-else placeholder="结果"></el-input> -->
            <el-radio-group v-model="resulttext[$index]" v-else>
              <el-radio label="符合">符合</el-radio>
              <el-radio label="不符合">不符合</el-radio>
            </el-radio-group>
            <!-- <el-checkbox-group v-model="resulttext[$index]" >
              <el-checkbox label="符合" >符合</el-checkbox>
              <el-checkbox label="不符合">不符合</el-checkbox>
            </el-checkbox-group> -->
          </template>
        </el-table-column>
        <el-table-column label="备注" width="width : 10%">
          <template slot-scope="{row,$index}">
            <span v-if="!showEdit[$index]">{{row.note}}</span>
            <el-input type="text" v-model="notetext[$index]" v-else placeholder="备注"></el-input>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="width : 10%">
          <template slot-scope="{row,$index}">
            <el-button  v-if="!showEdit[$index]" @click="showUpdate($index,row)" type="primary">
              <i class="el-icon-edit"></i>修改
            </el-button>
            <el-button  v-if="showEdit[$index]" @click="submit($index,row)" type="success">确定</el-button>
            <el-button  v-if="showEdit[$index]" @click="cancelUpdate($index)" type="warning">取消</el-button>
          </template>
          <!-- <InputDate :from='from[$index]' :num='$index'></InputDate> -->
        </el-table-column>
      </el-table>
  </div>

</template>

<script>
import {mapState} from 'vuex'
import InputDate from '../InputDate/InputDate.vue'
import {updatefrom} from '../../api/index'
export default {
  data () {
    return {
      // 将msg传递给父组件
      isshow: true,
      showEdit: [],
      realtext: [],
      resulttext: [],
      notetext: []
    }
  },
  methods: {
    sendmsg () {
      this.$emit('func', this.isshow)
    },
    showUpdate (index) {
      this.showEdit[index] = true
      this.$set(this.showEdit, index, true)
    },
    submit (index, row) {
      const real = this.realtext[index]
      const result = this.resulttext[index]
      const note = this.notetext[index]
      const companyid = row.companyid
      const fromno = row.fromno
      const fromid = row.fromid
      // const {realtext, resulttext, notetext} = this
      // const realtext=
      this.$store.dispatch('updatefrom', {num: index, real, result, note})
      updatefrom({companyid, fromno, fromid, real, result, note})
      this.$set(this.showEdit, index, false)
    },
    cancelUpdate (index) {
      this.$confirm('取消修改？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.$set(this.showEdit, index, false)
          this.$set(this.showName, index, '')
          this.$set(this.showAge, index, '')
        })
        .catch(() => {})
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
