import { foodModel, categoryModel } from '../db/index.js';

class FoodService {

  constructor(foodModel, categoryModel) {
    this.foodModel = foodModel;
    this.categoryModel = categoryModel;
  }
  // 전체 음식 갯수 확인
  async countTotalFoods() {
    const total = await this.foodModel.countFoods();

    if (total < 1) {
      throw new Error('음식 정보가 없습니다.');
    }
    return total;
  }

  // 전체 음식 목록 확인
  async getFoods() {
    const foods = await this.foodModel.findAll();

    if (foods.length < 1) {
      throw new Error('음식 정보가 없습니다.');
    }
    return foods;
  }

    // 전체 음식 목록 확인
    async getFoodsByCategory(category) {

      const categoryInfo = await this.categoryModel.findByName(category);

      if (!categoryInfo) {
        throw new Error('해당 카테고리 내역이 없습니다. 다시 한 번 확인해 주세요.');
      }
      const categoryId = categoryInfo._id;

      const foods = await this.foodModel.findByCategory(categoryId);
      return foods;
    }

  // 음식 상세정보 확인
  async getFood(foodId) {
    const food = await this.foodModel.findById(foodId);

    if (!food) {
      throw new Error('해당 음식에 대한 정보가 없습니다. 다시 한 번 확인해 주세요.');
    }

    return food;
  }

  async getFoodByName(name) {
    const food = await this.foodModel.findByName(name);
    return food;
  }

  // 음식 이름으로 id 찾기
  async getFoodId(name) {
    const food = await this.foodModel.findByName(name);

    if (!food) {
      throw new Error('해당 음식에 대한 정보가 없습니다. 다시 한 번 확인해 주세요.');
    }

    const foodId = food._id;
    return foodId;
  }

    // 음식 id로 이름 찾기
  async getFoodName(foodId) {
    const food = await this.foodModel.findById(foodId);

    if (!food) {
      throw new Error('해당 음식에 대한 정보가 없습니다. 다시 한 번 확인해 주세요.');
    }

    const foodName = food.name;
    return foodName;
  }


  // 음식 추가
  async addFood(foodInfo) {
    const {
      name,
      nameEng,
      image,
      category_id,
      info
    } = foodInfo;

    const isExist = await this.foodModel.findByName(name);
    if (isExist) {
      throw new Error('해당 이름으로 생성된 음식이 있습니다. 다른 이름을 지어주세요.');
    }
    const newFoodInfo = {
      name,
      nameEng,
      image,
      category_id,
      info
    };

    // db에 저장
    const createdNewfood = await this.foodModel.create(newFoodInfo);
    return createdNewfood;
  }

  // 음식 정보 수정
  async setFood(foodId, toUpdate) {
    let food = await this.foodModel.findById(foodId);

    if (!food) {
      throw new Error('해당 음식에 대한 정보가 없습니다. 다시 한 번 확인해 주세요.');
    }
    
    food = await this.foodModel.update({
        foodId,
        update: toUpdate,
    });

    return food;
  }

// 음식 삭제
  async deleteFood(foodId) {
    let food = await this.foodModel.findById(foodId);

    if (!food) {
      throw new Error('해당 음식에 대한 정보가 없습니다. 다시 한 번 확인해 주세요.');
    }

    const del = await this.foodModel.delete(foodId);
    return del;
  }
};

const foodService = new FoodService(foodModel, categoryModel);

export { foodService };
