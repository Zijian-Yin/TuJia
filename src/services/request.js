import axios from 'axios'
import { BASE_URL, TIMEOUT } from './config'
import { useMainStore } from '@/stores/modules/main'

//配置axios全局根目录
// axios.defaults.baseURL = BASE_URL

const mainStore = useMainStore()

class MyAxios{
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout
    })

    this.instance.interceptors.request.use(config => {
      mainStore.isLoading = true
      return config
    }, err => {
      return err
    })

    this.instance.interceptors.response.use(res => {
      mainStore.isLoading = false
      return res
    }, err => {
      mainStore.isLoading = false
      return err
    })
  }

  request(config){
    return new Promise((resolve, reject) => {
      this.instance.request(config).then(res => {
        resolve(res.data)
      }).catch(err => {

      })
    })
  }

  get(config){
    return this.request({...config, method: "get"})
  }

  post(config){
    return this.request({...config, method: "post"})
  }
}

export default new MyAxios(BASE_URL, TIMEOUT)