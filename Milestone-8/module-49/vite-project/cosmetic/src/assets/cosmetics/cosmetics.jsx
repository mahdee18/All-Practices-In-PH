import React from 'react';
import Cosmetic from '../cosmetic/cosmetic';
import './cosmetics.css'
const Cosmetics = () => {
    const cosmetics = [
        {
          "id": "642032ac08e6d4a4b33985ce",
          "price": 600,
          "name": "Renee Sullivan"
        },
        {
          "id": "642032acce2ead356940aa70",
          "price": 126,
          "name": "Patty Puckett"
        },
        {
          "id": "642032acb389d33ef7e7d52b",
          "price": 276,
          "name": "Mcmahon Diaz"
        },
        {
          "id": "642032acd340d24f71d666cd",
          "price": 264,
          "name": "Craig Wilder"
        },
        {
          "id": "642032acc423e8b041b8cacb",
          "price": 172,
          "name": "Stephenson Lawrence"
        },
        {
          "id": "642032ac7f88be48c50b9987",
          "price": 454,
          "name": "Maritza Merritt"
        },
        {
          "id": "642032acf657569890d62a93",
          "price": 261,
          "name": "Vaughn Ruiz"
        }
      ]
    return (
        <div>
            <h4>Welcome to my cosmetics store!</h4>

            {
                cosmetics.map(cosmetic => <Cosmetic key={cosmetic.id} cosmetic={cosmetic}></Cosmetic>)
            }
        </div>

    );
};

export default Cosmetics;