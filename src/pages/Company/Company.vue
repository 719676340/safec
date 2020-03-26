<template>
  <div>
    company
    <div>
      <ul>
        <li v-for="(company,index) in companys" :key="index">
          <div  @click="updateid (company.id)">
            <a>公司:{{company.name}} id:{{company.id}}</a>
          </div>
          <a @click="del(company)">删除</a>
          <a @click="changemodifyshow(index)">{{index==modifyshow?'取消':'修改'}}</a>
          <a @click="changedetailshow(index)">详情</a>
          <Detailcompany :company="company" v-if="index==detailshow"></Detailcompany>
          <modify-company :company="company" :num="index" v-if="index==modifyshow"></modify-company>
        </li>
      </ul>
    </div>

    <div>
      <NewCompany v-if="isshow"></NewCompany>
      <a @click="isshow=!isshow">{{!isshow?'新建':'取消'}}</a>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import {deletecompanysinfo} from '../../api/index'
import NewCompany from '../../components/NewCompany/NewCompany.vue'
import Detailcompany from '../../components/Detailcompany/Detailcompany.vue'
import ModifyCompany from '../../components/ModifyCompany/ModifyCompany.vue'

export default {
  data () {
    return {
      isshow: false,
      detailshow: -1,
      modifyshow: -1
    }
  },
  computed: {
    ...mapState(['companys'])
  },
  methods: {
    goto (path) {
      this.$router.replace(path)
    },
    del (company) {
      this.$store.dispatch('deletecompany', {company: company})
      var id = company.id
      deletecompanysinfo({id})
    },
    changedetailshow (index) {
      // if (this.detailshow === -1) {
      //   this.detailshow = index
      // } else if (this.detailshow === index) {
      //   this.detailshow = -1
      // }else{

      // }
      if (this.detailshow === index) {
        this.detailshow = -1
      } else {
        this.detailshow = index
      }
    },
    changemodifyshow (index) {
      if (this.modifyshow === index) {
        this.modifyshow = -1
      } else {
        this.modifyshow = index
      }
    },
    updateid (id) {
      this.$store.dispatch('updatechooseid', {id: id})
      this.$router.push('/from')
    }
  },
  components: {
    NewCompany,
    Detailcompany,
    ModifyCompany
  }
}
</script>

<style>

</style>
