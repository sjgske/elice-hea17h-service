import axios from 'axios';

const apiUrl = 'http://104.199.114.23:8080';

async function get(endpoint, params = '') {
    console.log(`GET 요청 ${`${apiUrl + endpoint}/${params}`}`);
    const url = params
        ? `${apiUrl + endpoint}/${params}`
        : `${apiUrl + endpoint}`;

    return axios.get(url, {
        // JWT 토큰을 헤더에 담아 백엔드 서버에 보냄.
        headers: {
            userToken: `${localStorage.getItem('userToken')}`,
        },
    });
}

async function post(endpoint, data) {
    // JSON.stringify 함수: Javascript 객체를 JSON 형태로 변환함.
    // 예시: {name: "Kim"} => {"name": "Kim"}
    const bodyData = JSON.stringify(data);
    console.log(`POST 요청: ${apiUrl + endpoint}`);
    console.log(`POST 요청 데이터: ${bodyData}`);

    return axios.post(apiUrl + endpoint, bodyData, {
        headers: {
            'Content-Type': 'application/json',
            userToken: `${localStorage.getItem('userToken')}`,
        },
    });
}

async function patch(endpoint, data) {
    // JSON.stringify 함수: Javascript 객체를 JSON 형태로 변환함.
    // 예시: {name: "Kim"} => {"name": "Kim"}
    const bodyData = JSON.stringify(data);
    console.log(`PATCH 요청: ${apiUrl + endpoint}`);
    console.log(`PATCH 요청 데이터: ${bodyData}`);

    return axios.patch(apiUrl + endpoint, bodyData, {
        headers: {
            'Content-Type': 'application/json',
            userToken: `${localStorage.getItem('userToken')}`,
        },
    });
}

// 아래 함수명에 관해, delete 단어는 자바스크립트의 reserved 단어이기에,
// 여기서는 우선 delete 대신 del로 쓰고 아래 export 시에 delete로 alias 함.
async function del(endpoint, data) {
    const bodyData = JSON.stringify(data);
    console.log(`DELETE 요청: ${apiUrl + endpoint}`);
    console.log(`DELETE 요청 데이터: ${bodyData}`);

    return axios.delete(`${apiUrl + endpoint}`, {
        data: bodyData,
        headers: {
            'Content-Type': 'application/json',
            userToken: `${localStorage.getItem('userToken')}`,
        },
    });
}

// 아래처럼 export한 후, import * as A 방식으로 가져오면,
// A.get, A.post 로 쓸 수 있음.
export { get, post, patch, del as delete };
