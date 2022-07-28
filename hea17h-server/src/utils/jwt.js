/* eslint-disable no-console */
import jwt from 'jsonwebtoken';

const secretKey = process.env.JWT_SECRET_KEY;
const expireDate = process.env.JWT_EXPIRE_DATE;
const refreshExpire = process.env.JWT_REFRESH_EXPIRE;
const TOKEN_EXPIRED_ERROR = -1;
const TOKEN_INVALID_ERROR = -2;

const handleJWT = {
    sign: async user => {
        const payload = { ...user };
        const result = {
            token: jwt.sign(payload, secretKey, { expiresIn: expireDate }),
            refresh: jwt.sign(
                { payload: `${user.id} ${user.name} refresh` },
                secretKey,
                {
                    expiresIn: refreshExpire,
                },
            ),
        };
        return result;
    },
    verify: async token => {
        let decoded;
        try {
            decoded = jwt.verify(token, secretKey);
        } catch (err) {
            if (err.message === 'jwt expired') {
                console.log('expired token');
                return TOKEN_EXPIRED_ERROR;
            }
            console.log('invalid token');
            return TOKEN_INVALID_ERROR;
        }
        return decoded;
    },
};

export default handleJWT;
