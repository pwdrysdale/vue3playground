// a composable that gives you a ref and a boolean value that tells you if the mouse is hovering over the element
import {ref, onUnmounted, onMounted} from "vue";

const useIsHovering = (elementRef) => {
    const isHovering = ref(false);
    const handleMouseEnter = () => {
        isHovering.value = true;
    }
    const handleMouseLeave = () => {
        isHovering.value = false;
    }

    onMounted(() => {
        elementRef.value.addEventListener('mouseenter', handleMouseEnter);
        elementRef.value.addEventListener('mouseleave', handleMouseLeave);
    })

    onUnmounted(() => {
        elementRef.value.removeEventListener('mouseenter', handleMouseEnter);
        elementRef.value.removeEventListener('mouseleave', handleMouseLeave);
    })

    return {
        isHovering
    }
}

export default useIsHovering;