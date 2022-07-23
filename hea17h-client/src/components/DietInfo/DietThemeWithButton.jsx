import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faXmark,
    faAngleLeft,
    faAngleRight,
} from '@fortawesome/free-solid-svg-icons';
import Box from '../Box';
import Badge from '../Badge';
import Button from '../Button';
import Modal from '../Modal';
import * as Api from '../../api';

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

const ButtonGroup = styled.div`
    flex-wrap: nowrap;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

const CircleButton = styled.button`
    margin-right: 1.5rem;

    &:last-child {
        margin-right: 0;
    }

    span {
        font-weight: 700;
    }

    &:hover div {
        transform: scale(1.1);
    }

    @media screen and (max-width: 768px) {
        width: 3rem;
        height: 1.5rem;
        background-color: #fd7e14;
        border-radius: 5px;
        color: #fff;
        margin-right: 0;
        margin-bottom: 1rem;

        &:last-child {
            margin: 0;
        }
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

const DietTitle = styled.h3`
    font-size: 1.3rem;
    margin-right: 1rem;
    flex-grow: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const GreyText = styled.p`
    font-size: 1.3rem;
    font-weight: 700;
    color: #999999;

    small {
        display: block;
        padding-top: 0.3rem;
        font-size: 0.8rem;
        font-weight: 400;
        color: #333;
        text-decoration: underline;
    }
`;

const LeftButton = styled.button`
    width: 50px;
    height: 50px;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
`;

const RightButton = styled.button`
    width: 50px;
    height: 50px;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
`;

const CommentBox = styled(Box)`
    padding: 1rem;
    flex-grow: 1;
    overflow: auto;
`;

const IconButton = styled.button`
    position: absolute;
    top: 1.5rem;
    right: 2rem;
    font-size: 1.2rem;
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

const FlexItem = styled.div`
    width: 11rem;
`;

const HoverDiv = styled.div`
    position: absolute;
    top: 0;
    right: -180px;
    padding: 1rem;
    width: 250px;
    background-color: #f5f5f5;
    opacity: 0.8;

    h5 {
        font-size: 1rem;
        margin-bottom: 1rem;
    }

    span {
        font-size: 0.9rem;
        display: inline-block;
        margin-bottom: 1rem;
    }

    img {
        width: 100%;
    }
`;

const PageText = styled.div`
    position: absolute;
    bottom: 48px;
    left: 50%;
    transform: translateX(-50%);
`;

function DietBox({ id, date, theme, calorie, comment, dietFoods }) {
    const [isActive, setIsActive] = useState(false);
    const [show, setShow] = useState(false);
    const [meal, setMeal] = useState('');
    const [page, setPage] = useState(0);
    const [hover, setHover] = useState(false);

    const buttonClick = mealState => {
        setIsActive(true);
        setMeal(prev => {
            if (prev === mealState) {
                setIsActive(!isActive);
            }
            return mealState;
        });
    };

    return (
        <>
            <Container
                width="60vw"
                color="#faf3e3"
                className="flex-space-between"
            >
                <SpaceBottom style={{ minWidth: '10vw' }}>
                    <Badge>{date}</Badge>
                    <DietTitle>{theme}</DietTitle>
                    <Calorie>
                        <strong>{calorie}</strong> kcal
                    </Calorie>
                </SpaceBottom>
                <ButtonGroup className="flex">
                    <CircleButton onClick={() => buttonClick('breakfast')}>
                        <Circle>
                            <CircleImage
                                src={`${process.env.PUBLIC_URL}/assets/morning.png`}
                                alt="아침"
                            />
                        </Circle>
                        <span>아침</span>
                    </CircleButton>
                    <CircleButton onClick={() => buttonClick('lunch')}>
                        <Circle>
                            <CircleImage
                                src={`${process.env.PUBLIC_URL}/assets/afternoon.png`}
                                alt="점심"
                            />
                        </Circle>
                        <span>점심</span>
                    </CircleButton>
                    <CircleButton onClick={() => buttonClick('dinner')}>
                        <Circle>
                            <CircleImage
                                src={`${process.env.PUBLIC_URL}/assets/night.png`}
                                alt="저녁"
                            />
                        </Circle>
                        <span>저녁</span>
                    </CircleButton>
                </ButtonGroup>
            </Container>

            <DetailBox
                id={id}
                className={!isActive ? 'hidden' : null}
                onClick={() => setShow(true)}
                dietFoods={dietFoods}
                mealState={meal}
            />

            <Modal
                width="25rem"
                height="25rem"
                className={!show ? 'hidden' : null}
                style={{ position: 'relative' }}
            >
                {!comment.length ? (
                    <>
                        <Div className="flex" style={{ padding: '2rem 0' }}>
                            <H3>아직 작성된 코멘트가 없습니다.</H3>
                        </Div>
                        <IconButton
                            onClick={() => {
                                setShow(false);
                            }}
                        >
                            <FontAwesomeIcon icon={faXmark} />
                        </IconButton>
                    </>
                ) : (
                    <>
                        <Div className="margin-bottom">
                            <SpaceBottom style={{ position: 'relative' }}>
                                <H3>코멘트</H3>
                                <GreyText>
                                    {comment[page].expert?.certificate[0].name}
                                    <br />
                                    전문가의 코멘트입니다.
                                    <small
                                        onMouseEnter={() => setHover(true)}
                                        onMouseLeave={() => setHover(false)}
                                    >
                                        전문가 정보 더보기
                                    </small>
                                </GreyText>

                                <HoverDiv className={!hover ? 'hidden' : null}>
                                    <h5>전문가 정보</h5>
                                    <span>
                                        {comment[page].expert?.certificate
                                            .map(el => el.name)
                                            .join(' / ')}
                                    </span>
                                    <img
                                        src={
                                            comment[page].expert?.certificate[0]
                                                .image
                                        }
                                        alt="자격증"
                                    />
                                </HoverDiv>
                            </SpaceBottom>
                        </Div>
                        <CommentBox width="100%" borderColor="#D9D9D9">
                            {comment[page].content}
                        </CommentBox>
                        <IconButton
                            onClick={() => {
                                setShow(false);
                            }}
                        >
                            <FontAwesomeIcon icon={faXmark} />
                        </IconButton>

                        {comment.length > 1 && (
                            <>
                                <LeftButton
                                    onClick={() => {
                                        if (page === 0) {
                                            return;
                                        }
                                        setPage(page - 1);
                                    }}
                                >
                                    <FontAwesomeIcon icon={faAngleLeft} />
                                </LeftButton>
                                <RightButton
                                    onClick={() => {
                                        if (page === comment.length - 1) {
                                            return;
                                        }
                                        setPage(page + 1);
                                    }}
                                >
                                    <FontAwesomeIcon icon={faAngleRight} />
                                </RightButton>

                                <PageText>
                                    <span>{`${page + 1} / ${
                                        comment.length
                                    }`}</span>
                                </PageText>
                            </>
                        )}
                    </>
                )}
            </Modal>
        </>
    );
}

function DetailBox({ id, className, onClick, dietFoods, mealState }) {
    const [breakfast, lunch, dinner] = dietFoods;
    let currentMeal;

    if (mealState === 'breakfast') {
        currentMeal = breakfast;
    } else if (mealState === 'lunch') {
        currentMeal = lunch;
    } else {
        currentMeal = dinner;
    }

    const deleteDiet = async () => {
        try {
            if (window.confirm('정말 삭제하시겠습니까?')) {
                await Api.delete('/diets/deleteDiet', {
                    dietId: id,
                });
                window.alert('삭제되었습니다.');
                window.location.reload(true);
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Container width="60vw" color="#F5F5F5" className={className}>
            <Div className="margin-bottom">
                {/* 아점저 */}
                <H3>{currentMeal.mealType}</H3>
            </Div>

            {/* 카테고리 */}
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
                            {meal.categoryFoods.map(food => (
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
                                        <Badge>
                                            <Calorie>
                                                {food.name}
                                                <strong> {food.count}</strong>g
                                            </Calorie>
                                        </Badge>
                                        <Badge>
                                            <Calorie>
                                                칼로리
                                                <strong>
                                                    {food.foodCalories}
                                                </strong>
                                                kcal
                                            </Calorie>
                                        </Badge>
                                        <Badge>
                                            <Calorie>
                                                탄수화물
                                                <strong>{food.foodCarb}</strong>
                                                g
                                            </Calorie>
                                        </Badge>
                                        <Badge>
                                            <Calorie>
                                                단백질
                                                <strong>
                                                    {food.foodProtein}
                                                </strong>
                                                g
                                            </Calorie>
                                        </Badge>
                                        <Badge>
                                            <Calorie>
                                                <strong> {food.foodFat}</strong>
                                                g
                                            </Calorie>
                                        </Badge>
                                    </FlexBox>
                                </Div>
                            ))}
                        </SpaceBottom>
                    </Div>
                </Div>
            ))}

            <FlexBox className="flex" style={{ marginBottom: '4rem' }}>
                <FlexItem className="flex-align-items">
                    <H4>총 칼로리</H4>
                    <Badge>
                        <Calorie>
                            <strong>{currentMeal.mealCalories}</strong> kcal
                        </Calorie>
                    </Badge>
                </FlexItem>
                <FlexItem className="flex-align-items">
                    <H4>총 탄수화물</H4>
                    <Badge>
                        <Calorie>
                            <strong>{currentMeal.mealCarb}</strong> g
                        </Calorie>
                    </Badge>
                </FlexItem>
                <FlexItem className="flex-align-items">
                    <H4>총 단백질</H4>
                    <Badge>
                        <Calorie>
                            <strong>{currentMeal.mealProtein}</strong> g
                        </Calorie>
                    </Badge>
                </FlexItem>
                <FlexItem className="flex-align-items">
                    <H4>총 지방</H4>
                    <Badge>
                        <Calorie>
                            <strong>{currentMeal.mealFat}</strong> g
                        </Calorie>
                    </Badge>
                </FlexItem>
            </FlexBox>

            <SpaceRight className="flex">
                <Button width="120px" color="#51CF66" onClick={onClick}>
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

export default DietBox;
