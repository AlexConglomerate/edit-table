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

const includesSelect = (arr, currentArr) => {
    let a = false
    arr.forEach((item) => {
        if (currentArr[0] === item[0] && currentArr[1] === item[1]) {
            a = true
        }
    })
    return a
}

export {sumColumn, sumRow, includesSelect}