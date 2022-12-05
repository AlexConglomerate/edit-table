import React, {useState} from 'react';

function Table() {
    const arr = [
        [12, 54, 87, 21, 12, 24],
        [21, 87, 98, 51, 87, 34],
        [12, 54, 76, 34, 34, 87],
        [21, 11, 22, 21, 98, 15]]
    const [table, setTable] = useState(arr);
    const handleChange = (e) => {
        table[0][0] = e.target.value
        const newTable = [...table]
        setTable(newTable)
    }

    return (
        <div>
            {table.map((item1,index1) => {
                return <div>
                    {item1.map((item2, index2) => <input
                        key={[index1, index2]}
                        value={item2}
                        onChange={handleChange}
                        type="text"
                        className="border-solid border border-indigo-600 p-2 hover:border-b-gray-900 w-10"
                    />)}
                </div>
            })}
        </div>
    );
}

export default Table;