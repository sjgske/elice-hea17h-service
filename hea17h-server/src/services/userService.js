import { userModel } from '../db/index.js';

class UserService{
    constructor(userModel){
        this.userModel = userModel;
    }

    async addUser(userInfo){
        const {id, name, password, gender, height, weight, goalWeight} = userInfo;
        const user = await this.userModel.findById(id);
        if(!user){
            throw new Error(
                '해당하는 아이디가 없습니다. 다시한번 확인해주세요'
            )
        }
        // const currentpassword = user.password;
        const newInfo = {id, name, password, gender, height, weight, goalWeight};
        return await this.userModel.create(newInfo);
    }
}

export {UserService}