import {makeObservable} from "@/designPatterns/makeObservable"
import {ref} from "vue"

const {get, set, subscribe} = makeObservable(0)

const useCounter = (init = 0) => {
    set(init)

    const count = ref(get())

    subscribe((newCount) => {
        count.value = newCount
    })

    const increment = () => {
        set(count.value + 1)
    }

    const decrement = () => {
        set(count.value - 1)
    }

    return {count, increment, decrement}
}

export default useCounter
