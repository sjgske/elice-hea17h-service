import { userService } from '../services/index.js';

async function isExpert(req, res, next) {
    const userInfo = req.tokenInfo;
    const user = await userService.getUser(userInfo);
    if (user.role !== 'expert') {
        res.status(400).json({
            status: 'error',
            statusCode: 400,
            message: '전문가만 이용할 수 있는 서비스입니다!',
        });
    }
    req.user = user;
    next();
}

export default isExpert;
