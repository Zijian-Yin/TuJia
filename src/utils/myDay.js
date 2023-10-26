import dayjs from 'dayjs'

export function myDayjs(date = new Date()){
  return dayjs(date)
}

export function myDayjsFormat(date = new Date(), formater = "MM月DD日"){
  return dayjs(date).format(formater)
}