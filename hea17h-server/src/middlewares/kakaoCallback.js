import axios from 'axios';
import { userService } from '../services/index.js';

async function kakaoCallback(req, res, next) {
    const { code } = req.query;
    try {
        await axios
            .post(
                `${process.env.KAKAO_OAUTH_TOKEN_API_URL}?grant_type=authorization_code&client_id=${process.env.KAKAO_CLIENT_ID}&redirect_uri=${process.env.KAKAO_REDIRECT_URI}&code=${code}`,
                {
                    headers: {
                        'Content-type':
                            'application/x-www-form-urlencoded;charset=utf-8',
                    },
                },
            )
            .then(async result => {
                if (!result) {
                    res.status(404).redirect(`${process.env.CLIENT_URL}/login`);
                } else {
                    await axios
                        .get('https://kapi.kakao.com/v2/user/me', {
                            headers: {
                                Authorization: `Bearer ${result.data.access_token}`,
                            },
                        })
                        .then(async resultData => {
                            let addKakaoResult = await userService.getUser({
                                id: resultData.data.id,
                            });
                            if (!addKakaoResult) {
                                addKakaoResult = await userService.addUser({
                                    id: resultData.data.id,
                                    name: resultData.data.properties.nickname,
                                    password: 'kakaoUser',
                                    platform: 'kakao',
                                });
                            }
                            console.log(addKakaoResult);
                            req.kakaoUser = addKakaoResult;
                            next();
                        });
                }
            });
    } catch (err) {
        next(err);
    }
}

export default kakaoCallback;
