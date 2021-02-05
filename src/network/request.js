import axios from 'axios'
export function request(config){
    //1.创建axios的实例
    const instance =axios.create({
        baseURL:'http://123.207.32.32:8000',
        timeout:5000
    })
    //2.axios的拦截器
    instance.interceptors.request.use( config =>{
        //2.1 比如config中的一些信息不符合服务器的要求
        //2.2 比如每次发送网络请求时，需要一层遮罩
        //2.3 比如某些请求必须携带一些特殊信息(例如登陆的token)
        return config;
    },err =>{
        console.log(err);
    })
    //响应拦截，分为成功或失败
    instance.interceptors.response.use(res =>{
        console.log(res);
        return res.data;
    },err =>{
        console.log(err)
    })

    //3.发送网络请求
    return instance(config)
}