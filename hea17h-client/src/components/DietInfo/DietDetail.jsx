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
            <Category>
                <div>
                    <TitleText>고기</TitleText>
                    <Badge fontColor="#999999">164.9 kcal</Badge>
                </div>
                <Badge fontColor="#999999">
                    닭가슴살(100)g X 1 = 165.9 kcal
                </Badge>
            </Category>
            <Category>
                <TitleText>채소</TitleText>
                <Badge fontColor="#999999">
                    방울토마토(100g) X 3 = 0.018 kcal
                </Badge>
            </Category>
            <Category>
                <TitleText>견과</TitleText>
                <Badge fontColor="#999999">아몬드(1알) X 10 = 70 kcal</Badge>
            </Category>
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
    margin-top: 40px;
`;

export default DietDetail;
