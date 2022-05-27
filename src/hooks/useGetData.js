// composable to get data from a server, allowing for parameters and a force update. stores the data to be
// used in multple components.

import {ref, onUnmounted, onMounted, computed} from 'vue';
import axios from 'axios'

const store = (value) => {
    const data = ref(value);

    const set = (newValue) => {
        data.value = newValue;
    }

    const get = () => {
        return data.value;
    }

    return {
        data,
        set,
        get
    }
}

const useGetData = (url, params = {}) => {
    const data = store(null)
    const isLoading = ref(false);
    const error = ref(null);

    const getData = async (getUrl = url, getParams = params) => {
        isLoading.value = true;
        try {
            const response = await axios.get(getUrl, {params: getParams});
            data.set(response.data);
            error.value = null;
        } catch (err) {
            error.value = err;
        }
        isLoading.value = false;
    }

    onMounted(async () => {
            await getData();
        }
    )

    onUnmounted(() => {
            data.set(null);
            isLoading.value = false;
            error.value = null;
        }
    )

    return {
        data: computed(() => data.get()),
        isLoading,
        error,
        getData
    }
}

export default useGetData;
