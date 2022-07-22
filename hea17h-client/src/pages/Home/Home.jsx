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
                <div>
                    <h2>
                        편리하게
                        <br />
                        다이어트 식단을
                        <br />
                        계산해보세요.
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
                </div>
                <div>
                    <h2>
                        전문가의
                        <br />
                        식단 솔루션을
                        <br />
                        받아보세요.
                    </h2>
                    <CircleBtn
                        className="flex-column-align-items"
                        id="expert-solution"
                        onClick={handleClick}
                        trasnformNum={-20}
                        id="expert-solution"
                    >
                        <Circle color="#fd7e14">
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </Circle>
                        <ColorText color="#fd7e14">솔루션 받기</ColorText>
                    </CircleBtn>
                </div>
                <div>
                    <h2>
                        식단 개선에
                        <br />
                        도움을 주시는
                        <br />
                        전문가를 찾고 있습니다.
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
                </div>
                <TopButton />
            </MainContainer>
        </div>
    );
}

const MainContainer = styled.div`
    width: 85vw;
    margin: 50px auto 0;
    display: flex;
    flex-direction: column;

    & > div {
        width: 25%;
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 15px;
        margin-bottom: 3rem;
    }

    & > div:nth-child(2) {
        align-self: flex-end;
        align-items: end;
    }

    @media (max-width: 768px) {
        & > div {
            width: 50%;
        }
        & h2 {
            font-size: 1rem;
        }
    }
`;

const CircleBtn = styled.div`
    transition: all 400ms ease;

    &:hover {
        transform: translateX(${({ trasnformNum }) => trasnformNum}px);
        cursor: pointer;
    }
`;

const Circle = styled.div`
    position: relative;
    width: 60px;
    height: 60px;
    margin-bottom: 0.5rem;
    background-color: #d9d9d9;
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
