import {
  GET_COMPANYS,
  DELETE_COMPANY,
  UPDATE_COMPANY,
  UPDATE_CHOOSEID,
  GET_FROM,
  UPDATE_FROM
} from './mutations-types'

import {
  reqcompanysinfo,
  getfrom
} from '../api/index'

export default{
  async getcompanys ({commit}) {
    const result = await reqcompanysinfo()
    const companys = result
    commit(GET_COMPANYS, {companys})
  },
  deletecompany ({commit}, {company}) {
    commit(DELETE_COMPANY, {company})
  },
  updatecompany ({commit}, {index, name, peoplenum, dangerresources, tel, level, dangername, maindanger, evalname}) {
    commit(UPDATE_COMPANY, {index, name, peoplenum, dangerresources, tel, level, dangername, maindanger, evalname})
  },
  updatechooseid ({commit}, {id}) {
    commit(UPDATE_CHOOSEID, {id})
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
