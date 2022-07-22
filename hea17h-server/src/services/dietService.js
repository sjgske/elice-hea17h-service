import { dietModel, certificateModel } from '../db/index.js';

class DietService {
    constructor() {
        this.dietModel = dietModel;
        this.certificateModel = certificateModel;
    }

    // 전문가 전용 모든유저 식단
    async getAllDiet() {
        const allDiet = await this.dietModel.getAllDiet({});
        if (!allDiet) {
            return {
                status: 'error',
                statusCode: 404,
                message: '식단을 조회하는 것에 실패하였습니다!',
            };
        }
        return {
            status: 'success',
            statusCode: 200,
            payload: allDiet,
        };
    }

    // 아이디로 내 식단 가져오기
    async getMyDiet(userId) {
        const myDiet = await this.dietModel.findByUser(userId);
        if (!myDiet.length) {
            const error = {
                status: 'error',
                statusCode: 404,
                message: '식단이 존재하지 않습니다.',
            };
            return error;
        }
        return { status: 'success', statusCode: 200, payLoad: myDiet };
    }

    // 식단 추가
    async addDiet(userId, dietInfo) {
        const newDiet = await this.dietModel.addDiet(userId, dietInfo);
        if (!newDiet) {
            return {
                status: 'error',
                statusCode: 404,
                message: '새로운 식단 등록에 실패했습니다!',
            };
        }
        return { status: 'success', statusCode: 200, payload: newDiet };
    }

    // 식단에 코멘트(피드백) 추가.
    async addComment(comment, id, dietId) {
        const expertInfo = await this.certificateModel.findById(id);
        const result = await this.dietModel.addComment(
            comment,
            expertInfo._id,
            dietId,
        );
        return { status: 'success', statusCode: 200, payload: result };
    }
}

const dietService = new DietService();

export default dietService;
