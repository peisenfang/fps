import axios from '../utils/request'

const base = {
    baseUrl:'http://api.tianapi.com',
    novcUrl:'/ncov/index',
    mapUrl:'/ncovabroad/index'
}

const api = {
    // 疫情人数动态数据
    getNcov(params){
        return axios.get(base.baseUrl + base.novcUrl,{
            params
        })
    },
    // 疫情动图数据
    getNcovMap(params){
        return axios.get(base.baseUrl + base.mapUrl,{
            params
        })
    },
}

export default api