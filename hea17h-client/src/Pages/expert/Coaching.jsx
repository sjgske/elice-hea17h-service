import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Box from '../../components/Box';
import Button from '../../components/Button';
import DietTheme from '../../components/DietInfo/DietTheme';

function Coaching() {
    return (
        <MainContainer>
            <h2>코칭</h2>
            <Box width="100%" color="white">
                <Container>
                    <DietTheme
                        date="2022.07.05"
                        theme="헬스장 가기 전에 먹기 좋은 식단"
                        calorie="1850"
                    >
                        <Link to="/coachingWrite/1">
                            <Button width="10rem" color="#FD7E14">
                                코멘트 작성
                            </Button>
                        </Link>
                    </DietTheme>
                    <DietTheme
                        date="2022.07.05"
                        theme="다이어트 최고, 지중해식 식단"
                        calorie="1850"
                    >
                        <Link to="/coachingRead/2">
                            <Button width="10rem" color="#51CF66">
                                코멘트 보기
                            </Button>
                        </Link>
                    </DietTheme>
                </Container>
            </Box>
        </MainContainer>
    );
}

const MainContainer = styled.div`
    width: 85vw;
    margin: 50px auto 0;

    & > h2 {
        margin-bottom: 20px;
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    padding: 50px 0;
`;

export default Coaching;
