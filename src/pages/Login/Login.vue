<template>
  <div>
      <!-- login
      <a @click="goto('/company')">跳转到company</a> -->
      <div>
        <el-form :rules="rules" :model="loginForm" class="loginRoot">
            <h3 class="loginTitle">系统登陆</h3>
            <el-form-item prop="username">
                <el-input type="text" v-model="loginForm.username" auto-complete="off" placeholder="请输入用户名"/>
            </el-form-item>
            <el-form-item prop="password">
                <el-input type="text" v-model="loginForm.password" auto-complete="off" placeholder="请输入密码"/>
            </el-form-item>
            <el-button type="primary" style="width: 100%" @click="login">登陆</el-button>
        </el-form>
    </div>
  </div>
</template>

<script>
import {login} from '../../api/index'
export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [{required: true, message: '请输入用户名', trigger: 'blur'}],
        password: [{required: true, message: '请输入密码', trigger: 'blur'}]
      }

    }
  },

  methods: {
    goto (path) {
      this.$router.replace(path)
    },
    login () {
      const username = this.loginForm.username
      const password = this.loginForm.password
      console.log(username, password)
      var result = login({username, password})
      result.then((xx) => {
        console.log(xx[0].num)
        if (xx[0].num === 1) {
          this.$router.replace('/company')
        }
        // this.$router.replace('/company')
      })
      // console.log(result)
      // this.$router.replace('/company')
      // if (result === 1) {
      //   console.log(1111)
      //   this.$router.replace('/company')
      // } else {
      //   console.log(222)
      //   this.loginForm.username = ''
      //   this.loginForm.password = ''
      // }
    }
  }
}
</script>

<style>
    .loginRoot {
        border-radius: 15px;
        background-clip: padding-box;
        margin: 50px auto;
        width: 350px;
        padding: 15px 35px;
        background: aliceblue;
        border: 1px solid #eaeaea;
        box-shadow: 0 0 25px #c6c6c6;
    }
    .loginTitle {
        margin: 15px auto 20px auto;
        text-align: center;
        color: #505050;
    }

</style>
