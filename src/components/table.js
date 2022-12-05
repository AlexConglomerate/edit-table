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

    const classCell = 'border-solid border border-indigo-600 p-2 hover:border-b-gray-900 w-10'
    const initialData = [
        [12, 54, 87, 21, 12, 24],
        [21, 87, 98, 51, 87, 34],
        [12, 54, 76, 34, 34, 87],
        [21, 11, 22, 21, 98, 15],
    ]

    const [table, setTable] = useState(initialData)
    const [sum, setSum] = useState(sumRow(table))

    useEffect(() => {
        setSum(sumRow(table))
        console.log(sum)
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
                            return (
                                <input
                                    className={classCell}
                                    value={value}
                                    key={column}
                                    onChange={(e) => handleChangeCell(rowNumber, column, e)}
                                />
                            )
                        })}
                        {/*выводим сумму*/}
                        <div className={classCell + ' text-amber-400'}>
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