import { makeObservable } from "@/designPatterns/makeObservable"
import { ref } from "vue"

const useCounter = (init) => {
  const { get, set, subscribe } = makeObservable(init)

  const getCount = () => ref(get())

  const increment = () => {
    console.log(getCount())
    set(getCount().value + 1)
  }

  const decrement = () => {
    set(getCount - 1)
  }

  return { increment, decrement, subscribe }
}

export default useCounter
