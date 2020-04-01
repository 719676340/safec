import ajax from './ajax'
// const BASE_URL = 'http://localhost:4000'
const BASE_URL = '/api' // http://182.92.126.18:3000/users

export const reqcompanysinfo = () => ajax(BASE_URL + '/companysinfo')
export const deletecompanysinfo = ({id}) => ajax(BASE_URL + '/deletecompany', {id}, 'POST')
export const newcompany = ({name, peoplenum, dangerresources, tel, level, dangername, maindanger, evalname}) => ajax(BASE_URL + '/newcompany', {name, peoplenum, dangerresources, tel, level, dangername, maindanger, evalname}, 'POST')
export const updatecompany = ({id, name, peoplenum, dangerresources, tel, level, dangername, maindanger, evalname}) => ajax(BASE_URL + '/updatecompany', {id, name, peoplenum, dangerresources, tel, level, dangername, maindanger, evalname}, 'POST')
export const getfrom = ({companyid, fromno}) => ajax(BASE_URL + '/getfrom', {companyid, fromno}, 'POST')
export const updatefrom = ({companyid, fromno, fromid, real, result, note}) => ajax(BASE_URL + '/updatefrom', {companyid, fromno, fromid, real, result, note}, 'POST')
export const newfrom = () => ajax(BASE_URL + '/newfrom')
export const login = ({username, password}) => ajax(BASE_URL + '/login', {username, password}, 'POST')
// 这里访问后端
