<template>
  <div>
    <div >
      <span style="font-size:30px">公司列表</span>
    </div>
    <div>
      <el-table :data="companys" style="width : 100%">
        <el-table-column prop="name" label="公司名称" width="width : 50%">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p>名字: {{ scope.row.name }}     企业人数：{{ scope.row.peoplenum}} 重大危险源名字：{{ scope.row.dangerresources}}</p>
              <p>联系方式： {{ scope.row.tel }}  等级：{{ scope.row.level}}        危化品名字：{{ scope.row.dangername}}</p>
              <p>主要风险性： {{ scope.row.maindanger }}  评估人员：{{ scope.row.evalname}}     时间：{{scope.row.evaldate}}   </p>
              <div slot="reference" class="name-wrapper" @click="updateid (scope.row.id,scope.row.name)">
                <el-tag size="medium">{{ scope.row.name }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="width : 10%">
          <template slot-scope="{row,$index}">
            <el-button   @click="handleEdit(row,$index)" type="text">
              <i class="el-icon-edit"></i>修改
            </el-button>
            <el-button   @click="del(row)" type="text">
              删除
            </el-button>
          </template>
          <!-- <InputDate :from='from[$index]' :num='$index'></InputDate> -->
        </el-table-column>
      </el-table>
      <el-button type="primary" @click="handlenew" style="position:fixed;right:10px;top:40px">新建</el-button>

    <!-- 下面全都是修改和新建的模块了 -->
      <el-dialog title="修改信息" :visible.sync="dialogFormVisible" :close-on-click-modal="false">
        <el-form :model="editform">
          <el-form-item label="名字">
            <el-input v-model="editform.name"></el-input>
          </el-form-item>
          <el-form-item label="企业人数">
            <el-input v-model="editform.peoplenum"></el-input>
          </el-form-item>
          <el-form-item label="重大危险源名字">
            <el-input v-model="editform.dangerresources"></el-input>
          </el-form-item>
          <el-form-item label="联系方式">
            <el-input v-model="editform.tel"></el-input>
          </el-form-item>
          <el-form-item label="等级">
            <el-select v-model="editform.level">
              <el-option value="1">1</el-option>
              <el-option value="2">2</el-option>
              <el-option value="3">3</el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="危化品名字">
            <el-input v-model="editform.dangername"></el-input>
          </el-form-item>
          <el-form-item label="主要风险性">
            <el-select v-model="editform.maindanger">
              <el-option value="火灾">火灾</el-option>
              <el-option value="爆炸">爆炸</el-option>
              <el-option value="毒性">毒性</el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="评估人员">
            <el-input v-model="editform.evalname"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click.native="handleCancel('editForm')">取消</el-button>
          <el-button type="primary" @click.native="handleUpdate()">更新</el-button>
        </div>
      </el-dialog>
  <!-- 下面这个部分是新建公司的-->
      <el-dialog title="新建公司信息" :visible.sync="newdialogFormVisible" :close-on-click-modal="false">
        <el-form :model="newform">
          <el-form-item label="名字">
            <el-input v-model="newform.name"></el-input>
          </el-form-item>
          <el-form-item label="企业人数">
            <el-input v-model="newform.peoplenum"></el-input>
          </el-form-item>
          <el-form-item label="重大危险源名字">
            <el-input v-model="newform.dangerresources"></el-input>
          </el-form-item>
          <el-form-item label="联系方式">
            <el-input v-model="newform.tel"></el-input>
          </el-form-item>
          <el-form-item label="等级">
            <el-select v-model="newform.level">
              <el-option value="1">1</el-option>
              <el-option value="2">2</el-option>
              <el-option value="3">3</el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="危化品名字">
            <el-input v-model="newform.dangername"></el-input>
          </el-form-item>
          <el-form-item label="主要风险性">
            <el-select v-model="newform.maindanger">
              <el-option value="火灾">火灾</el-option>
              <el-option value="爆炸">爆炸</el-option>
              <el-option value="毒性">毒性</el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="评估人员">
            <el-input v-model="newform.evalname"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click.native="newhandleCancel()">取消</el-button>
          <el-button type="primary" @click.native="addcompany()">新建</el-button>
        </div>
      </el-dialog>

      <!-- <ul>
        <li v-for="(company,index) in companys" :key="index">
          <div  @click="updateid (company.id,company.name)">
            <a>公司:{{company.name}} id:{{company.id}}</a>
          </div>
          <a @click="del(company)">删除</a>
          <a @click="changemodifyshow(index)">{{index==modifyshow?'取消':'修改'}}</a>
          <a @click="changedetailshow(index)">详情</a>
          <Detailcompany :company="company" v-if="index==detailshow"></Detailcompany>
          <modify-company :company="company" :num="index" v-if="index==modifyshow"></modify-company>
        </li>
      </ul> -->
    </div>

    <!-- <div>
      <NewCompany v-if="isshow"></NewCompany>
      <a @click="isshow=!isshow">{{!isshow?'新建':'取消'}}</a>
    </div> -->
  </div>
</template>

<script>
import {mapState} from 'vuex'
import {deletecompanysinfo, updatecompany, newcompany, newfrom} from '../../api/index' //, newcompany, newfrom
import NewCompany from '../../components/NewCompany/NewCompany.vue'
import Detailcompany from '../../components/Detailcompany/Detailcompany.vue'
import ModifyCompany from '../../components/ModifyCompany/ModifyCompany.vue'

//
export default {
  data () {
    return {
      isshow: false,
      detailshow: -1,
      modifyshow: -1,
      dialogFormVisible: false,
      newdialogFormVisible: false,
      editnum: -1,
      editform: {
        id: '',
        name: '',
        peoplenum: '',
        dangerresources: '',
        tel: '',
        level: '',
        dangername: '',
        maindanger: '',
        evalname: ''
      },
      newform: {
        id: '',
        name: '',
        peoplenum: '',
        dangerresources: '',
        tel: '',
        level: '',
        dangername: '',
        maindanger: '',
        evalname: ''
      }
    }
  },
  computed: {
    ...mapState(['companys']) // 访问state
  },
  methods: {
    goto (path) {
      this.$router.replace(path)
    },
    del (company) {
      this.$store.dispatch('deletecompany', {company: company}) // action
      var id = company.id
      deletecompanysinfo({id}) // 操作后端修改数据库
    },
    changedetailshow (index) {
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
    updateid (id, name) {
      this.$store.dispatch('updatechooseid', {id: id})
      this.$store.dispatch('updatechoosename', {name: name})
      this.$router.push('/from')
    },
    // this.$set 往往用在对象的更新数据上面 往里面添加数据
    handleEdit (row, index) {
      this.dialogFormVisible = true
      this.editform = Object.assign({}, row)
      this.editnum = index
    },
    handleUpdate () {
      const id = this.editform.id
      const name = this.editform.name
      const peoplenum = this.editform.peoplenum
      const dangerresources = this.editform.dangerresources
      const tel = this.editform.tel
      const level = this.editform.level
      const dangername = this.editform.dangername
      const maindanger = this.editform.maindanger
      const evalname = this.editform.evalname
      const num = this.editnum
      console.log(num)
      updatecompany({id, name, peoplenum, dangerresources, tel, level, dangername, maindanger, evalname})
      this.$store.dispatch('updatecompany', {num, name, peoplenum, dangerresources, tel, level, dangername, maindanger, evalname})
      // this.$store.dispatch('getcompanys')
      this.dialogFormVisible = false
    },
    handleCancel () {
      this.dialogFormVisible = false
    },
    newhandleCancel () {
      this.newdialogFormVisible = false
    },
    // 用来开关新建按钮的
    handlenew () {
      this.newdialogFormVisible = true
    },
    addcompany () {
      const name = this.newform.name
      const peoplenum = this.newform.peoplenum
      const dangerresources = this.newform.dangerresources
      const tel = this.newform.tel
      const level = this.newform.level
      const dangername = this.newform.dangername
      const maindanger = this.newform.maindanger
      const evalname = this.newform.evalname
      console.log(name)
      newcompany({name, peoplenum, dangerresources, tel, level, dangername, maindanger, evalname})
      newfrom()
      this.newdialogFormVisible = false
      this.$router.go(0)
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
