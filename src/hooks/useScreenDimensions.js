// a vue hook for screen dimensions
import { ref, computed } from "vue"

const useScreenDimensions = () => {
  const widthRef = ref(0)
  const heightRef = ref(0)

  const updateScreenDimensions = () => {
    widthRef.value = window.innerWidth
    heightRef.value = window.innerHeight
  }

  const screenWidth = computed(() => widthRef.value)
  const screenHeight = computed(() => heightRef.value)

  window.addEventListener("resize", updateScreenDimensions)

  updateScreenDimensions()

  return {
    screenWidth,
    screenHeight,
  }
}

export default useScreenDimensions
