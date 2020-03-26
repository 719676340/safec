<template>
    <div>
      <div>
          序号：{{from.bigno}}
          评估项目：{{from.name}}
          编号：{{from.smallno}}
          内容：{{from.content}}
          依据：{{from.basis}}
      </div>
      <fieldset>
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
      </fieldset>
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
