import axios from '../request'

export function getDetail(houseId){
  return axios.get({
    url: "/detail/infos",
    params: {
      houseId
    }
  })
}