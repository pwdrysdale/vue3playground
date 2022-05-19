import {readonly, ref} from "vue";

const useState = (initialState) => {
    const state = ref(initialState);
    const setState = (newState) => {
        state.value = newState
    }

    return [readonly(state), setState]
}

export default useState