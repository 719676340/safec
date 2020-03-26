import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../pages/Login/login.vue'
import Company from '../pages/Company/Company.vue'
import From from '../pages/From/From.vue'
import From1 from '../pages/From/From1/From1.vue'
import From2 from '../pages/From/From2/From2.vue'
import From3 from '../pages/From/From3/From3.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/company',
      component: Company
    },
    {
      path: '/from',
      component: From,
      children: [
        {
          path: '/from/from1',
          component: From1
        },
        {
          path: '/from/from2',
          component: From2
        },
        {
          path: '/from/from3',
          component: From3
        },
        {
          path: '',
          redirect: '/from/from1'
        }

      ]
    },
    {
      path: '/',
      redirect: '/login'
    }
  ]
})
