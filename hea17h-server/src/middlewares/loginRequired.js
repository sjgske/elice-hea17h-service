import { handleJWT } from '../utils/index.js';

async function isLoggedIn(req, res, next) {
    const token = req.get('userToken');
    if (!token) {
        res.status(403).json({
            status: 'error',
            statusCode: 403,
            message: '로그인되어 있지 않습니다!',
        });
    }
    const tokenInfo = await handleJWT.verify(token).then(data => data);
    req.tokenInfo = tokenInfo;
    next();
}

export default isLoggedIn;
