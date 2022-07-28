import React, { useState } from 'react';
import styled from 'styled-components';
import Box from '../Box';
import Badge from '../Badge';
import DetailBox from './DetailBox';
import CommentModal from './CommentModal';

function DietBox({ id, date, theme, calorie, comment, dietFoods }) {
    const [isActive, setIsActive] = useState(false);
    const [show, setShow] = useState(false);
    const [meal, setMeal] = useState('');

    const buttonClick = mealState => {
        setIsActive(true);
        setMeal(prev => {
            if (prev === mealState) {
                setIsActive(!isActive);
            }
            return mealState;
        });
    };

    const circleButtonList = [
        {
            mealState: 'breakfast',
            imgUrl: 'morning',
            text: '아침',
        },
        {
            mealState: 'lunch',
            imgUrl: 'afternoon',
            text: '점심',
        },
        {
            mealState: 'dinner',
            imgUrl: 'night',
            text: '밤',
        },
    ];

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
                    {circleButtonList.map(el => {
                        const { mealState, imgUrl, text } = el || {};
                        return (
                            <CircleButton
                                key={mealState}
                                onClick={() => buttonClick(mealState)}
                            >
                                <Circle>
                                    <CircleImage
                                        src={`${process.env.PUBLIC_URL}/assets/${imgUrl}.png`}
                                        alt={text}
                                    />
                                </Circle>
                                <span>{text}</span>
                            </CircleButton>
                        );
                    })}
                </ButtonGroup>
            </Container>

            <DetailBox
                id={id}
                className={!isActive ? 'hidden' : null}
                onClick={() => setShow(true)}
                dietFoods={dietFoods}
                mealState={meal}
            />

            <CommentModal
                comment={comment}
                show={show}
                onClick={() => setShow()}
            />
        </>
    );
}

const Container = styled(Box)`
    padding: 2rem 2.5rem;
    margin: 0 auto 30px;

    @media screen and (max-width: 1024px) {
        width: 100%;
    }
`;

const SpaceBottom = styled.div`
    & > * {
        margin-bottom: 0.7rem;
    }

    *:last-child {
        margin: 0;
    }
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

export default DietBox;
