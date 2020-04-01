// import Vue from 'vue'
import {
  GET_COMPANYS,
  DELETE_COMPANY,
  UPDATE_COMPANY,
  UPDATE_CHOOSEID,
  GET_FROM,
  UPDATE_FROM,
  UPDATE_CHOOSENAME
} from './mutations-types'

export default{
  [GET_COMPANYS] (state, {companys}) {
    state.companys = companys
  },
  [DELETE_COMPANY] (state, {company}) {
    state.companys.splice(state.companys.indexOf(company), 1)
  },
  [UPDATE_COMPANY] (state, {num, name, peoplenum, dangerresources, tel, level, dangername, maindanger, evalname}) {
    state.companys[num].name = name
    state.companys[num].peoplenum = peoplenum
    state.companys[num].dangerresources = dangerresources
    state.companys[num].tel = tel
    state.companys[num].level = level
    state.companys[num].dangername = dangername
    state.companys[num].maindanger = maindanger
    state.companys[num].evalname = evalname
  },
  [UPDATE_CHOOSEID] (state, {id}) {
    state.chooseid = id
  },
  [UPDATE_CHOOSENAME] (state, {name}) {
    state.choosename = name
  },
  [GET_FROM] (state, {from}) {
    state.from = from
  },
  [UPDATE_FROM] (state, {num, real, result, note}) {
    state.from[num].real = real
    state.from[num].result = result
    state.from[num].note = note
  }

}
