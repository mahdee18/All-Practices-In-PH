import React, { useEffect, useState } from 'react';

const ArrayExample = ({ singleUser }) => {
    const [data, setData] = useState([]);

    const removeData = (id) => {
        // const filteredData=data.filter((d)=>d.id !==id)
        setData(data.filter((d) => d.id !== id))
    }
    useEffect(() => {
        setData(singleUser);
    }, [singleUser]);
    console.log(data)
    return (
        <div>
            {
                data.map((singleUser) => (
                    <div>
                        <p>Name: {singleUser.name}</p>
                        <button onClick={() => removeData(singleUser.id)}>Remove</button>
                    </div>
                ))
            }
            <button onClick={() => setData([])}>Remove All</button>
        </div>
    );
};

export default ArrayExample;