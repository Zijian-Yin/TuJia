import axios from '../request'

export function getCityAll() {
  return axios.get({
    url: "/city/all"
  })
}