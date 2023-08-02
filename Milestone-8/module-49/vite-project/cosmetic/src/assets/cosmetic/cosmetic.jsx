import React from 'react';
import { addToDb, removeFromDb } from '../fakeDB/fakeDb';

const Cosmetic = (props) => {
    const { id, name, price } = props.cosmetic;
    const addToCart = (id) => {
        addToDb(id)
    }
    const removeFromCart =(id)=>{
        removeFromDb(id)
    }
    return (
        <div style={
            {
                backgroundColor: 'lightcoral',
                border: '2px solid gray',
                padding: '20px',
                color: 'whitesmoke',
                margin: '20px'
            }
        }>
            <p><small>ID:{id}</small></p>
            <h2>Buy this: ${name}</h2>
            <h4>Only for: ${price}</h4>
            <button onClick={() => addToCart(id)}>Add to Cart</button>
            <button onClick={() => removeFromCart(id)}>Remove</button>
        </div>
    )
};

export default Cosmetic;