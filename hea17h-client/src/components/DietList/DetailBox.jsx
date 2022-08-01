import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { setModalIsOpen } from '../../slices/dietListSlice';
import Box from '../Box';
import Badge from '../Badge';
import Button from '../Button';
import * as Api from '../../api';

function DetailBox({ id, dietFoods }) {
    const dispatch = useDispatch();
    const { boxIsToggle, mealInfo } = useSelector(state => state.dietList);

    const [breakfast, lunch, dinner] = dietFoods;
    let currentMeal;

    if (mealInfo === 'breakfast') {
        currentMeal = breakfast;
    } else if (mealInfo === 'lunch') {
        currentMeal = lunch;
    } else {
        currentMeal = dinner;
    }

    const deleteDiet = async () => {
        try {
            if (window.confirm('정말 삭제하시겠습니까?')) {
                await Api.delete('/diets/', {
                    dietId: id,
                });
                window.alert('삭제되었습니다.');
                window.location.reload(true);
            }
        } catch (err) {
            console.log(err);
        }
    };

    const totalContents = [
        {
            id: 1,
            title: '총 칼로리',
            number: currentMeal.mealCalories,
        },
        {
            id: 2,
            title: '총 탄수화물',
            number: currentMeal.mealCarb,
        },
        {
            id: 3,
            title: '총 단백질',
            number: currentMeal.mealProtein,
        },
        {
            id: 4,
            title: '총 지방',
            number: currentMeal.mealFat,
        },
    ];

    return (
        <Container
            width="60vw"
            color="#F5F5F5"
            className={!boxIsToggle ? 'hidden' : null}
        >
            <Div className="margin-bottom">
                <H3>{currentMeal.mealType}</H3>
            </Div>
            {currentMeal.foods.map(meal => (
                <Div
                    key={meal._id}
                    className="margin-bottom"
                    style={{
                        borderBottom: '1px solid #ccc',
                        paddingBottom: '2rem',
                    }}
                >
                    <Div>
                        <Div className="flex-align-items margin-bottom">
                            <H4>{meal.category}</H4>
                            <Badge>
                                <Calorie>
                                    <strong>
                                        {meal.categoryFoods.reduce(
                                            (prev, next) =>
                                                prev + next.foodCalories,
                                            0,
                                        )}
                                    </strong>
                                    kcal
                                </Calorie>
                            </Badge>
                        </Div>
                        <SpaceBottom>
                            {meal.categoryFoods.map(food => {
                                const badgeContents = [
                                    {
                                        id: 1,
                                        title: food.name,
                                        number: food.count,
                                    },
                                    {
                                        id: 2,
                                        title: '칼로리',
                                        number: food.foodCalories,
                                    },
                                    {
                                        id: 3,
                                        title: '탄수화물',
                                        number: food.foodCarb,
                                    },
                                    {
                                        id: 4,
                                        title: '단백질',
                                        number: food.foodProtein,
                                    },
                                    {
                                        id: 5,
                                        title: '지방',
                                        number: food.foodFat,
                                    },
                                ];
                                return (
                                    <Div
                                        key={food._id}
                                        className="flex-align-items"
                                    >
                                        <Circle className="margin-right">
                                            <CircleImage
                                                src={food.image}
                                                alt={food.name}
                                            />
                                        </Circle>
                                        <FlexBox>
                                            {badgeContents.map(el => (
                                                <Badge key={el.id}>
                                                    <Calorie>
                                                        {el.title}
                                                        <strong>
                                                            {el.number}
                                                        </strong>
                                                        g
                                                    </Calorie>
                                                </Badge>
                                            ))}
                                        </FlexBox>
                                    </Div>
                                );
                            })}
                        </SpaceBottom>
                    </Div>
                </Div>
            ))}

            <FlexBox className="flex" style={{ marginBottom: '4rem' }}>
                {totalContents.map(el => (
                    <FlexItem className="flex-align-items" key={el.id}>
                        <H4>{el.title}</H4>
                        <Badge>
                            <Calorie>
                                <strong>{el.number}</strong> kcal
                            </Calorie>
                        </Badge>
                    </FlexItem>
                ))}
            </FlexBox>

            <SpaceRight className="flex">
                <Button
                    width="120px"
                    color="#51CF66"
                    onClick={() => dispatch(setModalIsOpen(true))}
                >
                    코멘트 보기
                </Button>

                <Button
                    width="120px"
                    color="#FD7E14"
                    onClick={() => deleteDiet()}
                >
                    삭제하기
                </Button>
            </SpaceRight>
        </Container>
    );
}

DetailBox.propTypes = {
    id: PropTypes.string.isRequired,
    dietFoods: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const Container = styled(Box)`
    padding: 2rem 2.5rem;
    margin: 0 auto 30px;

    @media screen and (max-width: 1024px) {
        width: 100%;
    }
`;

const Div = styled.div``;

const SpaceBottom = styled.div`
    & > * {
        margin-bottom: 0.7rem;
    }

    *:last-child {
        margin: 0;
    }
`;

const SpaceRight = styled.div`
    * {
        margin-right: 1.2rem;
    }

    *:last-child {
        margin: 0;
    }
`;

const H3 = styled.h3`
    font-size: 1.3rem;
    margin-right: 1rem;
`;

const H4 = styled.h4`
    font-size: 1.2rem;
    margin-right: 1rem;
`;

const Calorie = styled.span`
    font-weight: 600;
    strong {
        color: #999999;
    }
`;

const Circle = styled.div`
    position: relative;
    width: 5rem;
    height: 5rem;
    margin-bottom: 0.5rem;
    background-color: #fff;
    border-radius: 50%;
    transition: all 200ms ease-in;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const CircleImage = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 3.5rem;
    border-radius: 50%;
`;

const FlexBox = styled.div`
    display: flex;
    flex-wrap: wrap;

    * {
        margin-right: 0.5rem;
        margin-bottom: 0;
    }

    *:last-child {
        margin: 0;
    }
`;

const FlexItem = styled.div``;

export default React.memo(DetailBox);
