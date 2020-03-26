<template>
    <div>
      <fieldset>
        <legend>添加公司信息</legend>
        <div >
            <label>名字：</label>
            <input type="text" v-model="name"/>
        </div>
        <div >
            <label>企业人数：</label>
            <input type="text" v-model="peoplenum"/>
        </div>
        <div >
            <label>重大危险源名字：</label>
            <input type="text" v-model="dangerresources"/>
        </div>
        <div >
            <label>联系方式：</label>
            <input type="text" v-model="tel"/>
        </div>
        <div >
            <label>等级：</label>
            <select v-model="level">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
        </div>
        <div >
            <label>危化品名字：</label>
            <input type="text" v-model="dangername"/>
        </div>
        <div >
            <label>主要风险性：</label>
            <select v-model="maindanger">
                <option value="火灾">火灾</option>
                <option value="爆炸">爆炸</option>
                <option value="毒性">毒性</option>
            </select>
        </div>
        <div >
            <label>评估人员：</label>
            <input type="text" v-model="evalname"/>
        </div>
        <div >
            <label></label>
            <button @click="addcompany">添加</button>
        </div>
      </fieldset>
    </div>
</template>

<script>
import {newcompany, newfrom} from '../../api/index'
export default{
  data () {
    return {
      isshow: true,
      name: '',
      peoplenum: '',
      dangerresources: '',
      tel: '',
      level: '',
      dangername: '',
      maindanger: '',
      evalname: ''
    }
  },
  methods: {
    addcompany () {
      const {name, peoplenum, dangerresources, tel, level, dangername, maindanger, evalname} = this
      newcompany({name, peoplenum, dangerresources, tel, level, dangername, maindanger, evalname})
      newfrom()
      this.$router.go(0)
    }
  }
}
</script>

<style>
</style>
