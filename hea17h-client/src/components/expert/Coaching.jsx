import React from 'react';
import styled from 'styled-components';
import Box from '../Box';
import Badge from '../Badge';
import Button from '../Button';

function Coaching() {
    return (
        <MainContainer>
            <h2>코칭</h2>
            <Box width="100%" color="white">
                <Container>
                    <Box width="75%" height="8rem" color="#faf3e3">
                        <InfoContainer>
                            <DietInfo>
                                <Badge width="6rem">2022.07.05</Badge>
                                <h3>헬스장 가기 전에 먹기 좋은 식단</h3>
                                <p>1850 kcal</p>
                            </DietInfo>
                            <Button width="10rem" color="#FD7E14">
                                코멘트 작성
                            </Button>
                        </InfoContainer>
                    </Box>
                    <Box width="75%" height="8rem" color="#faf3e3">
                        <InfoContainer>
                            <DietInfo>
                                <Badge width="6rem">2022.07.05</Badge>
                                <h3>다이어트 최고, 지중해식 식단</h3>
                                <p>1850 kcal</p>
                            </DietInfo>
                            <Button width="10rem" color="#51CF66">
                                코멘트 보기
                            </Button>
                        </InfoContainer>
                    </Box>
                </Container>
            </Box>
        </MainContainer>
    );
}

const MainContainer = styled.div`
    width: 85vw;
    margin: 50px auto 0;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    padding: 50px 0;
`;

const InfoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
`;

const DietInfo = styled.div`
    height: 8rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 7px;

    & > p {
        font-weight: bold;
        color: #999999;
    }
`;

export default Coaching;
