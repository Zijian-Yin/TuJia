import {onMounted, onUnmounted, ref} from 'vue'
import {throttle} from 'underscore'

export function useScroll(elRef){
  let isBottom = ref(false)
  let el = window

  const clientHeight = ref(0)
  const scrollTop = ref(0)
  const scrollHeight = ref(0)

  const scrollListener = throttle(() => {
    if(el === window){
      clientHeight.value = document.documentElement.clientHeight
      scrollTop.value = document.documentElement.scrollTop
      scrollHeight.value = document.documentElement.scrollHeight
    }else{
      clientHeight.value = el.clientHeight
      scrollTop.value = el.scrollTop
      scrollHeight.value = el.scrollHeight

    }

    if(clientHeight.value + scrollTop.value >= scrollHeight.value)
      isBottom.value = true

  }, 100)
  
  onMounted(() => {
    if(elRef) el = elRef.value
    el.addEventListener("scroll", scrollListener)
  })
  
  onUnmounted(() => {
    el.removeEventListener("scroll", scrollListener)
  })

  return {isBottom, clientHeight, scrollTop, scrollHeight}
}




