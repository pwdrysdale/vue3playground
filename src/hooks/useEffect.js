// vue version of useEffect that
import { ref, onMounted, onUnmounted, watch } from "vue"

const useEffect = (effect, deps = []) => {
  const cleanupRef = ref(null)

  onMounted(() => {
    watch(
      deps,
      () => {
        cleanupRef.value = effect()
      },
      { immediate: deps.length === 0, deep: true }
    )
  })

  onUnmounted(() => {
    if (cleanupRef.value) {
      cleanupRef.value()
    }
  })
}

export default useEffect
