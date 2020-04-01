import {
  GET_COMPANYS,
  DELETE_COMPANY,
  UPDATE_COMPANY,
  UPDATE_CHOOSEID,
  GET_FROM,
  UPDATE_FROM,
  UPDATE_CHOOSENAME
} from './mutations-types'

import {
  reqcompanysinfo,
  getfrom
} from '../api/index' // 存访问后端的网址

export default{
  async getcompanys ({commit}) {
    const result = await reqcompanysinfo()
    const companys = result
    commit(GET_COMPANYS, {companys})
  },
  deletecompany ({commit}, {company}) {
    commit(DELETE_COMPANY, {company})
  },
  updatecompany ({commit}, {num, name, peoplenum, dangerresources, tel, level, dangername, maindanger, evalname}) {
    commit(UPDATE_COMPANY, {num, name, peoplenum, dangerresources, tel, level, dangername, maindanger, evalname})
  },
  updatechooseid ({commit}, {id}) {
    commit(UPDATE_CHOOSEID, {id})
  },
  updatechoosename ({commit}, {name}) {
    commit(UPDATE_CHOOSENAME, {name})
  },
  async getfrom ({commit}, {companyid, fromno}) {
    const result = await getfrom({companyid, fromno})
    const from = result
    commit(GET_FROM, {from})
  },
  updatefrom ({commit}, {num, real, result, note}) {
    commit(UPDATE_FROM, {num, real, result, note})
  }
}
