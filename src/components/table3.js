import React, {useState} from 'react';

export const Table = () => {

    const initialData = [
        [12, 54, 87, 21, 12, 24],
        [21, 87, 98, 51, 87, 34],
        [12, 54, 76, 34, 34, 87],
        [21, 11, 22, 21, 98, 15],
    ]

    const [table, setTable] = useState(initialData)

    const handleChangeCell = (row, column, e) => {
        const newTable = [...table]
        newTable[row][column] = e.target.value
        setTable(newTable)
    }

    return (
        <div>
            {table.map((row, rowNumber) => {
                return (
                    <div key={rowNumber}>
                        {row.map((value, column) => {
                            return (
                                <input
                                    className='border-solid border border-indigo-600 p-2 hover:border-b-gray-900 w-10'
                                    value={value}
                                    key={column}
                                    onChange={(e) => handleChangeCell(rowNumber, column, e)}
                                />
                            )
                        })}
                    </div>
                )
            })
            }
        </div>
    );
};

export default Table;