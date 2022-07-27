import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowLeft,
    faArrowRight,
    faPlus,
} from '@fortawesome/free-solid-svg-icons';
import queryString from 'query-string';
import Nav from '../../components/Nav';
import TopButton from '../../components/TopButton';

function Home() {
    const queryParams = queryString.parse(window.location.search);
    const navigate = useNavigate();

    const handleClick = e => {
        if (localStorage.getItem('userToken')) {
            if (e.currentTarget.id === 'expert-solution') {
                navigate('/comment');
            } else {
                navigate('/certify');
            }
        } else {
            alert('로그인 후 이용해주세요.');
            navigate('/login');
        }
    };

    const token = queryParams.userToken;
    if (token !== undefined) {
        localStorage.setItem('userToken', token);
    }

    return (
        <div>
            <Nav />
            <MainContainer>
                <Section
                    imgPosY={-400}
                    imgUrl="https://elice-team17.s3.ap-northeast-2.amazonaws.com/test/1658411406092_main_1.jpg"
                >
                    <h2>
                        편리하게
                        <br />
                        다이어트 식단을
                        <br />
                        계산해보세요
                        <span style={{ color: '#FD7E14' }}>.</span>
                    </h2>
                    <CircleBtn
                        className="flex-column-align-items"
                        onClick={() => navigate('/diet')}
                        trasnformNum={20}
                    >
                        <Circle color="#fd7e14">
                            <FontAwesomeIcon icon={faArrowRight} />
                        </Circle>
                        <ColorText color="#fd7e14">계산하기</ColorText>
                    </CircleBtn>
                </Section>
                <Section
                    imgPosY={-120}
                    imgUrl="https://elice-team17.s3.ap-northeast-2.amazonaws.com/test/1658411421456_main_2.jpg"
                >
                    <h2>
                        전문가의
                        <br />
                        식단 솔루션을
                        <br />
                        받아보세요
                        <span style={{ color: '#FD7E14' }}>.</span>
                    </h2>
                    <CircleBtn
                        className="flex-column-align-items"
                        id="expert-solution"
                        onClick={handleClick}
                        trasnformNum={-20}
                    >
                        <Circle color="#fd7e14">
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </Circle>
                        <ColorText color="#fd7e14">솔루션 받기</ColorText>
                    </CircleBtn>
                </Section>
                <Section
                    imgPosY={-40}
                    imgUrl="https://elice-team17.s3.ap-northeast-2.amazonaws.com/test/1658411448805_main_3.jpg"
                >
                    <h2>
                        식단 개선에
                        <br />
                        도움을 주시는
                        <br />
                        전문가를 찾고 있습니다
                        <span style={{ color: '#3cb371' }}>.</span>
                    </h2>
                    <CircleBtn
                        className="flex-column-align-items"
                        id="expert-apply"
                        onClick={handleClick}
                        trasnformNum={20}
                    >
                        <Circle color="#3cb371">
                            <FontAwesomeIcon icon={faPlus} />
                        </Circle>
                        <ColorText color="#3cb371">전문가 지원하기</ColorText>
                    </CircleBtn>
                </Section>
                <TopButton />
            </MainContainer>
        </div>
    );
}

const Section = styled.div`
    position: relative;
    height: 60vh;
    padding: 0 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;

    & > h2 {
        z-index: 1;
    }

    &::after {
        content: '';
        position: absolute;
        opacity: 0.45;
        width: 100%;
        height: 100%;
        left: 0;
        right: 0;
        background: url(${({ imgUrl }) => imgUrl}) no-repeat;
        background-position: 0 ${({ imgPosY }) => imgPosY}px;
        background-size: 100%;
    }

    @media (max-width: 1460px) {
        &::after {
            background-position: center;
        }
    }

    @media (max-width: 860px) {
        height: 40vh;

        &::after {
            background-size: 100% auto;
        }
    }

    @media (max-width: 580px) {
        &::after {
            background-size: 564px 372px;
        }

        padding: 0 50px;
    }
`;

const CircleBtn = styled.div`
    transition: all 400ms ease;
    z-index: 1;

    &:hover {
        transform: translateX(${({ trasnformNum }) => trasnformNum}px);
        cursor: pointer;
    }
`;

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;

    & > ${Section}:nth-child(2) {
        & > h2,
        ${CircleBtn} {
            align-self: flex-end;
        }
    }
`;

const Circle = styled.div`
    position: relative;
    width: 60px;
    height: 60px;
    margin-bottom: 0.5rem;
    background-color: white;
    border-radius: 50%;

    svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 2.5rem;
        color: ${({ color }) => color};
    }
`;

const ColorText = styled.span`
    color: ${({ color }) => color};
    font-weight: 700;
`;

export default Home;
