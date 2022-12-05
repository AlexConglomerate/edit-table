const sumRow = (arr) => {
    return arr.map(i => {
        return i.reduce((acc, item) => {
            acc += Number(item)
            return acc
        }, 0)
    })
}

const sumColumn = (arr) => {
    const weightArr = arr[0].length
    const arr2 = []
    for (let i = 0; i < weightArr; i++) {
        const a = arr.filter(item => item[i] === '').length
        arr2.push(a)
    }
    return arr2
}

export {sumColumn, sumRow}