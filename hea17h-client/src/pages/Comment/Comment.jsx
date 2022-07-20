import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import Badge from '../../components/Badge';
import Box from '../../components/Box';
import Button from '../../components/Button';
import TopButton from '../../components/TopButton';
import Nav from '../../components/Nav';
import * as Api from '../../api';
import { getStringDate, separateThousand } from '../../utils/UsefulFunction';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: #f7f7f9;
    padding: 8vw 10vw;
`;

const Main = styled.div`
    background: #fff;
    padding: 5vw 8vw;
`;

const Header = styled.div`
    margin-bottom: 6rem;
`;

const Div = styled.div``;

const SpaceDiv = styled.div`
    *:not(last-child) {
        margin-bottom: 0.5rem;
    }
`;

const H1 = styled.h1`
    font-size: 2.2rem;
    line-height: 44px;
    margin-bottom: 40px;
`;

const H2 = styled.h2`
    font-size: 2.5rem;
    line-height: 3.8rem;

    &:first-child {
        margin-bottom: 3rem;
    }
`;

const H3 = styled.h3`
    font-size: 1.3rem;
    margin-right: 1rem;
`;

const Calorie = styled.span`
    font-weight: 600;
    strong {
        color: #999999;
    }
`;

const Green = styled.span`
    color: #51cf66;
`;

const Orange = styled.span`
    color: #fd7e14;
    font-weight: 700;
`;

const MainBox = styled(Box)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 35px 45px;
    margin: 0 auto 30px;
`;

const CircleLink = styled(Link)`
    transition: all 400ms ease;

    &:hover {
        transform: translateX(20px);
    }
`;

const Circle = styled.div`
    position: relative;
    width: 60px;
    height: 60px;
    margin-bottom: 0.5rem;
    background-color: #e9ecef;
    border-radius: 50%;

    svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 2.5rem;
        color: #fd7e14;
    }
`;

function Comment() {
    const [data, setData] = useState([]);

    async function getDiet() {
        try {
            const res = await Api.get('/diets/getDiet');
            setData(res.data.payLoad);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getDiet();
    }, []);

    return (
        <>
            <Nav />
            <Container>
                <H1>코멘트</H1>
                <Main>
                    <Header>
                        <Div className="margin-bottom">
                            <H2>
                                전문가의
                                <br /> 식단 코멘트를 받을 수 있습니다
                                <Green>.</Green>
                            </H2>
                            <H2>
                                목록이 없는 경우
                                <br /> 다이어트 식단을
                                <br /> 먼저 계산해보세요<Orange>.</Orange>
                            </H2>
                        </Div>

                        <CircleLink
                            to="/diet"
                            className="flex-column-align-items"
                        >
                            <Circle>
                                <FontAwesomeIcon icon={faArrowRight} />
                            </Circle>
                            <Orange>계산해보기</Orange>
                        </CircleLink>
                    </Header>

                    {data.map(diet => (
                        <MainBox width="100%" color="#faf3e3" key={diet._id}>
                            <SpaceDiv>
                                <Badge>{getStringDate(diet.createdAt)}</Badge>
                                <H3>{diet.name}</H3>
                                <Calorie>
                                    <strong>
                                        {separateThousand(diet.totalCalories)}
                                    </strong>
                                    kcal
                                </Calorie>
                            </SpaceDiv>
                            {diet.comment.length === 0 ? (
                                <Button
                                    width="10rem"
                                    color="#E9ECEF"
                                    fontColor="#999"
                                    disabled
                                >
                                    코멘트 대기 중
                                </Button>
                            ) : (
                                <Link to="/diet/list">
                                    <Button width="10rem" color="#51cf66">
                                        코멘트 보러 가기
                                    </Button>
                                </Link>
                            )}
                        </MainBox>
                    ))}
                </Main>
                <TopButton />
            </Container>
        </>
    );
}

export default Comment;
