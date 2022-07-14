import { dietModel } from '../db/index.js';

class DietService {
    constructor() {
        this.dietModel = dietModel;
    }

    // 전문가 전용 모든유저 식단
    async getAllDiet() {
        const allDiet = await this.dietModel.getAllDiet({});
        return allDiet;
    }

    // 아이디로 내 식단 가져오기
    async getMyDiet(userId) {
        const myDiet = await this.dietModel.findByUser(userId);
        if (!myDiet) {
            const error = {
                status: 'error',
                statusCode: 404,
                message: '식단이 존재하지 않습니다.',
            };
            return error;
        }
        return { status: 'success', statusCode: 200, payLoad: { myDiet } };
    }

    // 식단 추가
    async addDiet(userId, dietInfo) {
        const newDiet = await this.dietModel.addDiet(userId, dietInfo);
        return newDiet;
    }
}

const dietService = new DietService();

export default dietService;
