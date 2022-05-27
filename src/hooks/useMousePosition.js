// composable to get the mouse position
import {ref, onMounted, onUnmounted} from "vue";

const useMousePosition = () => {
    const mouseX = ref(0)
    const mouseY = ref(0)

    const handleMouseMove = (event) => {
        mouseX.value = event.clientX
        mouseY.value = event.clientY
    }

    onMounted(() => {
        window.addEventListener('mousemove', handleMouseMove)
    })

    onUnmounted(() => {
        window.removeEventListener('mousemove', handleMouseMove)
    })

    return {mouseX, mouseY}
}

export default useMousePosition