// a function to run a given function at a given interval

const useRegularly = (fn, interval) => {
    const to = setTimeout(() => {
        useRegularly(fn, interval)
        fn()
    }, interval);
    return () => clearTimeout(to);
}

export default useRegularly