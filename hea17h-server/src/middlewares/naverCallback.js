import axios from 'axios';
import { userService } from '../services/index.js';

async function naverCallback(req, res, next) {
    const { code, state } = req.query;
    try {
        const apiUrl = `${process.env.NAVER_API_URL}&code=${code}&state=${state}`;

        const token = await axios
            .get(apiUrl, {
                headers: {
                    'X-Naver-Client-Id': process.env.NAVER_CLIENT_ID,
                    'X-Naver-Client-Secret': process.env.NAVER_CLIENT_SECRET,
                },
            })
            .then(result => {
                return result.data;
            });
        const userInfo = await axios
            .get('https://openapi.naver.com/v1/nid/me', {
                headers: {
                    Authorization: `Bearer ${token.access_token}`,
                },
            })
            .then(result => result.data);
        let addNaverResult = await userService.getUser({
            id: userInfo.response.id,
        });
        if (!addNaverResult) {
            addNaverResult = await userService.addUser({
                id: userInfo.response.id,
                name: userInfo.response.name,
                password: 'naverUser',
                platform: 'naver',
            });
        }
        req.naverUser = addNaverResult;
        next();
    } catch (err) {
        next(err);
    }
}
export default naverCallback;
