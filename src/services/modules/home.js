import axios from "../request";

export function getHotSuggests(){
  return axios.get({
    url: "/home/hotSuggests"
  })
}

export function getCategories() {
  return axios.get({
    url: "/home/categories"
  })
}

export function getHouseList(currentPage) {
  return axios.get({
    url: "/home/houselist",
    params: {
      page: currentPage
    }
  })
}