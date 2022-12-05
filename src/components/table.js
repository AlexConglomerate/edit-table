import React from 'react';

function Table() {
    const arr = [
        [12, 54, 87, 21, 12, 24],
        [21, 87, 98, 51, 87, 34],
        [12, 54, 76, 34, 34, 87],
        [21, 11, 22, 21, 98, 15]]
    const classTable = "border-solid border border-indigo-600 p-2"
    return (
        <div>
            {arr.map(item => {
                return <div>
                    {item.map(itm => <input
                        value={itm}
                        onClick={() => console.log('12e')}
                        type={"text"}
                        className={classTable + " hover:border-b-gray-900 w-10"}
                    />)}
                </div>
            })}
        </div>
    );
}

export default Table;