import React from 'react';
import styled from 'styled-components';
import TitleText from './TitleText';
import ImageBadge from './ImageBadge';
import Badge from '../Badge';

function DietDetail({ meal }) {
    return (
        <DietContainer key={meal._id}>
            <ImageBadgeContainer>
                <ImageBadge imgUrl={meal.mainImg} />
                <p>{meal.mealType}</p>
            </ImageBadgeContainer>
            {meal.foods.map(({ category, categoryFoods }) => {
                let calorieByCategory = 0;

                categoryFoods.forEach(({ count, foodCalories }) => {
                    calorieByCategory += count * foodCalories;
                });

                return (
                    <Category key={category}>
                        <div>
                            <TitleText>{category}</TitleText>
                            <Badge fontColor="#999999">
                                {calorieByCategory} kcal
                            </Badge>
                        </div>
                        {categoryFoods.map(
                            ({ image, name, count, foodCalories, _id }) => (
                                <div key={_id}>
                                    <ImageBadge imgUrl={image} />
                                    <Badge fontColor="#999999">
                                        {`${name} X ${count} = ${
                                            foodCalories * count
                                        } kcal`}
                                    </Badge>
                                </div>
                            ),
                        )}
                    </Category>
                );
            })}

            <TotalCalorie>
                <TitleText>총합</TitleText>
                <Badge fontColor="#999999">{meal.mealCalories} kcal</Badge>
            </TotalCalorie>
        </DietContainer>
    );
}

const DietContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const ImageBadgeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;

    & > p {
        font-weight: bold;
    }
`;

const Category = styled.div`
    margin: 10px 0;

    & > div {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 5px;
    }
`;

const TotalCalorie = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 15px;
`;

export default DietDetail;
