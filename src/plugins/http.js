import axios from 'axios'
// import router from '@/plugins/router'
import Qs from 'qs'
import vue from 'vue'

const BASE_API = 'http://localhost:8080/blog/api';
// 创建axios实例
const service = axios.create({
    // baseURL: process.env.BASE_API, // api 的 base_url
    baseURL: BASE_API,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    transformRequest: [function(data) {
        data = Qs.stringify(data)
        return data
    }],
    timeout: 5000 // 请求超时时间
})
service.defaults.withCredentials = true;

// response 拦截器
service.interceptors.response.use(
    response => {
        const res = response.data
        // if(res.code !== 1000){
        //     this.$toast({
        //         text: res.code,
        //         color: "red"
        //     })
        // }
        vue.prototype.$toast(res)
        return res;
    },
    error => {
        console.log('http_err: ' + error) // for debug
        vue.prototype.$toast(error)
        // router.push('/');
        return Promise.reject(error)
    }
)



export default service
