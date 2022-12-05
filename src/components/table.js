import React, {useEffect, useState} from 'react';
import {sumColumn, sumRow} from "./utils";

export const Table = () => {
    const classCell = 'border-solid border border-indigo-600 p-2 hover:border-b-gray-900 w-10'
    const initialData = [
        [12, 54, 87, 21, 12, 24],
        [21, 87, 98, 51, 87, 34],
        [12, 54, 76, 34, 34, 87],
        [21, 11, 22, 21, 98, 15],
    ]

    const [table, setTable] = useState(initialData)
    const [sum, setSum] = useState(sumRow(initialData))
    const [columns, setColumn] = useState(sumColumn(initialData));

    useEffect(() => {
        setSum(sumRow(table))
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
                    <div key={rowNumber} className="flex flex-row hover:bg-gray-300">
                        {row.map((value, column) => {
                            const color = columns[column] >= 2 ? 'bg-orange-200' : ''
                            return (
                                <input
                                    className={classCell + " " + color}
                                    value={value}
                                    key={column}
                                    onChange={(e) => handleChangeCell(rowNumber, column, e)}
                                    onMouseDown={() => console.log(`onMouseDown`, rowNumber, column)}
                                    onMouseOver={() => console.log(rowNumber, column)}

                                />
                            )
                        })}
                        {/*выводим сумму*/}
                        <div className={classCell + ' text-amber-500'}>
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