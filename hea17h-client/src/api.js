import axios from 'axios';

// const apiUrl = 'http://34.168.201.109:8080';
const apiUrl = 'http://localhost:8080';

async function get(endpoint, params = '') {
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

async function post(endpoint, data, contentType) {
    return axios.post(apiUrl + endpoint, data, {
        headers: {
            'Content-Type': contentType || 'application/json',
            userToken: `${localStorage.getItem('userToken')}`,
        },
    });
}

async function patch(endpoint, data) {
    return axios.patch(apiUrl + endpoint, data, {
        headers: {
            'Content-Type': 'application/json',
            userToken: `${localStorage.getItem('userToken')}`,
        },
    });
}

// 아래 함수명에 관해, delete 단어는 자바스크립트의 reserved 단어이기에,
// 여기서는 우선 delete 대신 del로 쓰고 아래 export 시에 delete로 alias 함.
async function del(endpoint, data) {
    return axios.delete(`${apiUrl + endpoint}`, {
        data,
        headers: {
            'Content-Type': 'application/json',
            userToken: `${localStorage.getItem('userToken')}`,
        },
    });
}

// 아래처럼 export한 후, import * as A 방식으로 가져오면,
// A.get, A.post 로 쓸 수 있음.
export { get, post, patch, del as delete };
