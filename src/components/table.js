import React, {useEffect, useState} from 'react';
import {includesSelect, sumColumn, sumRow} from "./utils";

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
    const [columns, setColumn] = useState(sumColumn(initialData))
    const [selecting, setSelecting] = useState(false);
    const [selectArea, setSelectArea] = useState([]);


    useEffect(() => {
        setSum(sumRow(table))
        setColumn(sumColumn(table))
    }, [table]);


    const handleChangeCell = (row, column, e) => {
        const newTable = [...table]
        newTable[row][column] = e.target.value
        setTable(newTable)
    }

    const handleOnMouseDown = (rowNumber, column) => {
        // console.log(`onMouseDown`, rowNumber, column)
        setSelecting(true)
        setSelectArea([[rowNumber, column]])
    }


    const handleOnMouseOver = (rowNumber, column) => {
        if (selecting === true) {
            const arr = [...selectArea]
            const len = arr.length
            const currentArr = [rowNumber, column]
            arr.forEach((item, index) => {
                if (currentArr[0] === item[0] && currentArr[1] === item[1]) {
                    arr.splice(index, 1);
                }
            })


            if (len === arr.length) {
                arr.push([rowNumber, column])
            }
            setSelectArea(arr)
            console.log(JSON.stringify(selectArea))
        }
    }

    const handleOnMouseUp = (rowNumber, column) => {
        // console.log(`onMouseUp`, rowNumber, column)
        setSelecting(false)
    }

    return (
        <div>
            {table.map((row, rowNumber) => {
                return (
                    <div key={rowNumber} className="flex flex-row hover:bg-gray-300">
                        {row.map((value, column) => {
                            const color = columns[column] >= 2 ? 'bg-orange-200' : ''
                            const color2 = includesSelect(selectArea,[rowNumber, column]) == true ? 'bg-blue-300' : ''
                            console.log('color2', color2)
                            console.log('includesSelect', includesSelect(selectArea,[rowNumber, column]))
                            return (
                                <input
                                    className={classCell + " " + color + " " + color2 + " cursor-cell"}
                                    value={value}
                                    key={column}
                                    onChange={(e) => handleChangeCell(rowNumber, column, e)}
                                    onMouseDown={() => handleOnMouseDown(rowNumber, column)}
                                    onMouseOver={() => handleOnMouseOver(rowNumber, column)}
                                    onMouseUp={() => handleOnMouseUp(rowNumber, column)}
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