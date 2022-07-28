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
import { htmlStringDate, separateThousand } from '../../utils/UsefulFunction';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: #f7f7f9;
    padding: 8vw 10vw;
`;

const Main = styled.div`
    position: relative;
    background: #fff;
    padding: 5vw 8vw;
`;

const Header = styled.div`
    position: relative;
    margin-bottom: 6rem;
    z-index: 10;
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

const H4 = styled.h4`
    font-size: 1.8rem;
`;

const Calorie = styled.span`
    font-weight: 600;
    strong {
        color: #999999;
    }
`;

const GreenText = styled.span`
    color: #51cf66;
`;

const OrangeText = styled.span`
    color: #fd7e14;
    font-weight: 700;
`;

const SampleImg = styled.div`
    position: absolute;
    top: 250px;
    right: 8vw;
    opacity: 0.5;
    z-index: 5;

    img {
        width: 20rem;
        border: 2px solid #f5f5f5;
        border-radius: 5px;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    }

    @media screen and (max-width: 1024px) {
        display: none;
    }
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

const SmallLink = styled(Link)`
    display: block;
    color: #999999;
    font-size: 0.9rem;
    text-decoration: underline;
`;

function Comment() {
    const [data, setData] = useState([]);

    async function getDiet() {
        try {
            const res = await Api.get('/diets');
            const items = await res.data.payLoad.reverse();
            setData(items);
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
                                <GreenText>
                                    HEA<OrangeText>17</OrangeText>H.
                                </GreenText>
                                의 회원은
                                <br />
                                전문가의
                                <br /> 식단 코멘트를 받을 수 있습니다
                                <GreenText>.</GreenText>
                            </H2>
                            <H2>
                                목록이 없는 경우
                                <br /> 다이어트 식단을
                                <br /> 먼저 계산해보세요
                                <OrangeText>.</OrangeText>
                            </H2>
                        </Div>

                        <CircleLink
                            to="/diet"
                            className="flex-column-align-items"
                        >
                            <Circle>
                                <FontAwesomeIcon icon={faArrowRight} />
                            </Circle>
                            <OrangeText>계산해보기</OrangeText>
                        </CircleLink>
                    </Header>

                    <SampleImg>
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/comment.png`}
                            alt="예시 코멘트"
                        />
                    </SampleImg>

                    {data.length ? (
                        <>
                            <H4 style={{ margin: 0 }}>최근 등록한 식단</H4>
                            <SmallLink
                                to="/diet/list"
                                className="margin-bottom"
                            >
                                더 많은 식단 보기
                            </SmallLink>
                        </>
                    ) : null}

                    {data.slice(0, 3).map(diet => (
                        <MainBox width="100%" color="#faf3e3" key={diet._id}>
                            <SpaceDiv>
                                <Badge>{htmlStringDate(diet.createdAt)}</Badge>
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
