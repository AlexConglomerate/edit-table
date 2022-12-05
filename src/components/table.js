import React, {useEffect, useState} from 'react';

export const Table = () => {

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
        // console.log('a', arr2)
        return arr2
    }

    const classCell = 'border-solid border border-indigo-600 p-2 hover:border-b-gray-900 w-10'
    const initialData = [
        [12, 54, 87, 21, 12, 24],
        [21, 87, 98, 51, 87, 34],
        [12, 54, 76, 34, 34, 87],
        [21, 11, 22, 21, 98, 15],
    ]

    const [table, setTable] = useState(initialData)
    const [sum, setSum] = useState(sumRow(table))
    const [columns, setColumn] = useState(sumColumn(table));

    useEffect(() => {
        setSum(sumRow(table))
        console.log(sum)
        setColumn(sumColumn(table))
    }, [table]);


    const handleChangeCell = (row, column, e) => {
        const newTable = [...table]
        newTable[row][column] = e.target.value
        setTable(newTable)
    }

    return (
        <div>
            {table.map((row, rowNumber) => {
                return (
                    <div key={rowNumber} className="flex flex-row">
                        {row.map((value, column) => {
                            console.log('columns', columns)
                            const color = columns[column] >= 2 ? 'bg-orange-400' : ''
                            console.log(123, columns[column])
                            return (
                                <input
                                    className={classCell + " " + color}
                                    value={value}
                                    key={column}
                                    onChange={(e) => handleChangeCell(rowNumber, column, e)}
                                />
                            )
                        })}
                        {/*выводим сумму*/}
                        <div className={classCell + ' text-amber-400 '}>
                            {sum[rowNumber]}
                        </div>
                    </div>
                )
            })
            }
        </div>
    );
};

export default Table;