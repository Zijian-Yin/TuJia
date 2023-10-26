import { defineStore } from "pinia";
import {myDayjs} from "@/utils/myDay";

export const useMainStore = defineStore("main",{
  state:() => ({
    startDate: myDayjs(),
    endDate: myDayjs().add(1, 'day'),
    showCalendar: false,
    isLoading: false
  })
})
