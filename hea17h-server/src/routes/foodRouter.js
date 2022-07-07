import { Router } from 'express';
import is from '@sindresorhus/is';
import { asyncHandler } from '../middlewares/index.js';
import { foodService } from '../services/index.js';
import { upload } from '../utils/index.js';

const foodRouter = Router();


// 모든 음식 정보를 가져옴
foodRouter.get('/foods', asyncHandler(async (req, res) => {

  const { category } = req.query;

  if(!category) {
    const foods = await foodService.getFoods();
    res.status(200).json(foods);

  } else {
    const foods = await foodService.getFoodsByCategory(category);
    res.status(200).json(foods);
  }
  
}));

// 음식 id로 검색 후 상세 정보 가져옴
foodRouter.get('/foods/:foodId', asyncHandler(async (req, res) => {

  const { foodId } = req.params;
  const food = await foodService.getFood(foodId);
  res.status(200).json(food);
}));

// 음식 추가
foodRouter.post('/foods', upload.single('image'), asyncHandler(async(req,res) => {

  // application/json 설정을 프론트에서 안 하면, body가 비어 있게 됨.
  if (is.emptyObject(req.body)) {
    throw new Error(
    'headers의 Content-Type을 application/json으로 설정해주세요'
    );
  }
  /// 이미지 url 주소
  const image = req.file.location;

  const {
    name,
    nameEng,
    category_id,
    info
  } = req.body;

  const newfood = await foodService.addFood({
    name,
    nameEng,
    image,
    category_id,
    info
  });
  res.status(201).json(newfood);
}));


// 음식 정보 수정
foodRouter.patch('/foods/:foodId', asyncHandler(async (req, res) => {

  // application/json 설정을 프론트에서 안 하면, body가 비어 있게 됨.
  if (is.emptyObject(req.body)) {
    throw new Error(
    'headers의 Content-Type을 application/json으로 설정해주세요'
    );
  }

  const { foodId } = req.params;
  const {
    name,
    nameEng,
    image,
    category_id,
    info
  } = req.body;

  // 이름이 있을 경우 에러 발생
  const isExist = await foodService.getFoodByName(name);
  if (isExist && isExist.name == name) {
      throw new Error('해당 이름으로 생성된 음식이 있습니다. 다른 이름을 지어주세요.');
  }

  // 위 데이터가 undefined가 아니라면, 즉, 프론트에서 업데이트를 위해
  // 보내주었다면, 업데이트용 객체에 삽입함.
  const toUpdate = {
    ...(name && { name }),
    ...(nameEng && { nameEng }),
    ...(image && { image }),
    ...(category_id && { category_id }),
    ...(info && { info }),
  };
  // 상품 정보를 업데이트함.
  const updatedfoodInfo = await foodService.setFood(foodId, toUpdate);

  // 업데이트 이후의 데이터를 프론트에 보내 줌
  res.status(200).json(updatedfoodInfo);
}));

//  음식 삭제
foodRouter.delete('/foods/:foodId', asyncHandler(async (req, res) => {

  const { foodId } = req.params;

  // const isExistInProducts = await foodService.isExist(foodId);
  // if (isExistInProducts.length >= 1) {
  //   throw new Error('해당 음식에 속해 있는 음식이 있어 삭제 할 수 없습니다.');
  // }

  const del = await foodService.deleteFood(foodId)
  res.status(200).json(del);
}));

export { foodRouter };