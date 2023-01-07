function splitAndConverts(data:any) {
    const [value, type] = data.match(/(\d+)|(\D+$)/g)!
    const INTVALUE = parseFloat(value)

    return [INTVALUE, type]
}

export default splitAndConverts