import React, {useState} from 'react';

function Table2() {
    const arr = [
        [12, 54, 87, 21, 12, 24],
        [21, 87, 98, 51, 87, 34],
        [12, 54, 76, 34, 34, 87],
        [21, 11, 22, 21, 98, 15]]
    const [table, setTable] = useState(arr);
    const handleChangeTable = (e) => {
        const newTable = [...table]
        newTable[0][0] = e.target.value
        setTable(newTable)
    }

    return (
        <div className='w-full min-h-screen text-gray-900'>
            <div className='px-6 mx-auto max-w-6xl bg-[#f5f5f5] mt-24 h-[500px] pt-10 '>
                {table.map((row, i) => {
                    return (
                        <div className='max-w-[600px] mx-auto' key={i}>
                            {row.map((cell, j) => {
                                return (
                                    <input
                                        className='inline-block border border-gray-600 w-20 p-2'
                                        value={cell}
                                        key={j}
                                        onChange={(e) => handleChangeTable(i,j,e)}
                                    />
                                )
                            })}
                        </div>
                    )
                })
                }
            </div>
        </div>
    );
}

export default Table2;