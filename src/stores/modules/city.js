import {defineStore} from 'pinia'
import {getCityAll} from '@/services'

export const useCityStore = defineStore("city",{
  state: () => ({
    allCity: {},
    currentCity: { cityName: "长沙"}
  }),
  actions: {
    async fetchAllCity(){
      const res = await getCityAll()
      this.allCity = res.data
    }
  }
})
