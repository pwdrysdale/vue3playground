// a debounce vuejs hook
import { ref } from "vue"

const useDebounce = (value, delay = 300) => {
  const valueRef = ref(value)
  const timeoutRef = ref(null)

  const setValueFn = (newValue) => {
    if (timeoutRef.value) {
      clearTimeout(timeoutRef.value)
    }
    timeoutRef.value = setTimeout(() => {
      valueRef.value = newValue
    }, delay)
  }

  return [valueRef, setValueFn]
}

export default useDebounce
