import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Countries = () => {
    const countries= useLoaderData()
    return (
        <div>
            <h1>Total countries : {countries.length}</h1> 
            {
                countries.map(country=><h4>Name: {country.name.common}</h4>)
                // , <Link to={country.flag.png}>Flag</Link>

            }          
        </div>
    );
};

export default Countries;