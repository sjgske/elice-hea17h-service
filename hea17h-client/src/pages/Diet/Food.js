import React, { useState, useEffect } from 'react';
import axios from 'axios';

// const [food, setFood] = useState([]);

// useEffect(() => {
//     const getFood = async () => {
//         const Food = await axios.get('http://localhost:5000/foods?name=사과');
//         setPosts(posts.data);
//     };
// }, []);

function Food() {
    const [result, setResult] = useState([]);
    useEffect(() => {
        axios
            .get('http://localhost:5000/foods?name=사과')
            .then(response => setResult(response.data.data));
    }, []);
    return (
        <div>
            <h4>axois GET 호출</h4>
            <div>
                음식 카테고리 : {result.category}
                <br />
                음식 이름: {result.name}
            </div>
        </div>
    );
}

export default Food;
