import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Nav from '../../components/Nav';

function Home() {
    const navigate = useNavigate();

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
                    <ButtonContainer color="#fd7e14">
                        <button type="button" onClick={() => navigate('/diet')}>
                            <img src="right-arrow.png" alt="right-arrow" />
                        </button>
                        <p>계산하기</p>
                    </ButtonContainer>
                </div>
                <div>
                    <h2>
                        전문가의
                        <br />
                        식단 솔루션을
                        <br />
                        받아보세요.
                    </h2>
                    <ButtonContainer color="#fd7e14">
                        <button
                            type="button"
                            onClick={() => navigate('/comment')}
                        >
                            <img src="left-arrow.png" alt="left-arrow" />
                        </button>
                        <p>솔루션 받기 </p>
                    </ButtonContainer>
                </div>
                <div>
                    <h2>
                        식단 개선에
                        <br />
                        도움을 주시는
                        <br />
                        전문가를 찾고 있습니다.
                    </h2>
                    <ButtonContainer color="#51CF66">
                        <button
                            type="button"
                            onClick={() => navigate('/certify')}
                        >
                            <img src="plus.png" alt="plus" />
                        </button>
                        <p>전문가 지원하기</p>
                    </ButtonContainer>
                </div>
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

const ButtonContainer = styled.div`
    text-align: center;
    color: ${({ color }) => color};
    font-weight: bold;

    & > button {
        width: 2.5rem;
        height: 2.5rem;
        border: 0;
        border-radius: 50%;
        background-color: #d9d9d9;
        cursor: pointer;

        & > img {
            width: 1.5rem;
            line-height: 2.5rem;
        }
    }
`;

export default Home;
