import axios from "axios"
import store from '@/store'

export default class Http {
    constructor() {
        this.instance = axios.create({
            baseURL: process.env.VUE_APP_API,
            timeout: 500000
        })

        this.interceptors(this.instance)
    }

    myRequest(method, url,  params, data, config) {
        return this.instance.request({
            method,
            url,
            params,
            data,
            ...config
        })
    }

    get(url, params, config = {}) {
        return this.myRequest('get', url, params, config)
    }

    post(url, data, config = {}) {
        return this.myRequest('post', url, data, config)
    }

    delete(url, data, config = {}) {
        return this.myRequest('delete', url, data, config)
    }

    put(url, data, config) {
        return this.myRequest('put', url, data, config)
    }

    interceptors(instance) {
        instance.interceptors.request.use(config => {
            const token = store.state.user.token
            if (token) {
                config.headers.Authorization = token
            }
            return config
        }, err => {
            return Promise.reject(err)
        })
        
        instance.interceptors.response.use(res => {
            return res.data
        }, err => {
            return Promise.reject(err)
        })
    }
}