import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Food() {
    const [food, setFood] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/categories')
            .then(response => {
                setFood(response.data);
            });
    }, []);

    return (
        <>
            <h1>Users</h1>
            <div Food={food}/>
        </>
    );
}

export default Food;
