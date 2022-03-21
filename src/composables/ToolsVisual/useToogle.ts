import { ref } from 'vue'

export const useToogle = (initialStatus: boolean = true) => {
  const isActive = ref<boolean>(initialStatus)

  const toogle = () => {
    isActive.value = !isActive.value
  }

  const setActive = () => {
    isActive.value = true
  }

  const setInactive = () => {
    isActive.value = false
  }

  return {
    toogle, 
    setInactive, 
    setActive, 
    isActive
  }
}
