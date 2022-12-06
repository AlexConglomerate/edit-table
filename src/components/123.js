const arr = [[1, 0], [2, 0], [1, 0], [3, 1], [3, 2], [1, 0], [3, 4], [3, 5], [1, 0], [2, 4], [1, 3], [1, 1], [1, 2], [1, 3], [1, 4], [1, 3], [1, 2], [1, 1], [1, 2], [1, 3], [1, 2], [1, 3], [1, 2]]


console.log(arr)
const currentArr = [1, 0]
const deleteSelect = (currentArr) => {
    arr.forEach((item, index) => {
        if (currentArr[0] === item[0] && currentArr[1] === item[1]) {
            arr.splice(index, 1);
        }
    })
}
deleteSelect(currentArr)

console.log(arr)

// const aa = [1, 0] === [1, 0]
// console.log(aa)


