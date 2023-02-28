const getArgs = (args) => {
    const [, , ...rest] = args
    return rest.reduce((acc, el, i, arr) => {
        if (el.startsWith('-')){
            acc[el.replace("-", "")] = arr[i+1] && !arr[i+1].startsWith('-') ? arr[i+1] : true;
            return acc
        }
        return acc
    }, {})
}

export { getArgs }