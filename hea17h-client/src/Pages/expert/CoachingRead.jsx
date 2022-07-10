import React from 'react';
import styled from 'styled-components';
import Box from '../../components/Box';
import Badge from '../../components/Badge';
import Button from '../../components/Button';

function CoachingWrite() {
    return (
        <MainContainer>
            <h2>코칭</h2>
            <Box width="100%" color="white">
                <Container>
                    <Box width="75%" height="8rem" color="#faf3e3">
                        <DietInfo>
                            <Badge width="6rem">2022.07.05</Badge>
                            <h3>헬스장 가기 전에 먹기 좋은 식단</h3>
                            <p>1850 kcal</p>
                        </DietInfo>
                    </Box>
                    <Box width="75%" color="#F5F5F5">
                        <h4 style={{ margin: '50px 0', textAlign: 'center' }}>
                            아침 점심 저녁
                        </h4>
                        <DietContainer>
                            <div>
                                <Category>
                                    <h3>고기</h3>
                                    <Badge width="16rem">
                                        닭가슴살(100)g X 1 = 165.9 kcal
                                    </Badge>
                                </Category>
                                <Category>
                                    <h3>채소</h3>
                                    <Badge width="17rem">
                                        방울토마토(100g) X 3 = 0.018 kcal
                                    </Badge>
                                </Category>
                                <Category>
                                    <h3>견과</h3>
                                    <Badge width="13.5rem">
                                        아몬드(1알) X 10 = 70 kcal
                                    </Badge>
                                </Category>
                                <TotalCalorie>
                                    <h3>총합</h3>
                                    <Badge width="6.5rem">371.08 kcal</Badge>
                                </TotalCalorie>
                            </div>
                            <div>
                                <Category>
                                    <h3>고기</h3>
                                    <Badge width="16rem">
                                        닭가슴살(100)g X 1 = 165.9 kcal
                                    </Badge>
                                </Category>
                                <Category>
                                    <h3>채소</h3>
                                    <Badge width="17rem">
                                        방울토마토(100g) X 3 = 0.018 kcal
                                    </Badge>
                                </Category>
                                <Category>
                                    <h3>견과</h3>
                                    <Badge width="13.5rem">
                                        아몬드(1알) X 10 = 70 kcal
                                    </Badge>
                                </Category>
                                <TotalCalorie>
                                    <h3>총합</h3>
                                    <Badge width="6.5rem">371.08 kcal</Badge>
                                </TotalCalorie>
                            </div>
                            <div>
                                <Category>
                                    <h3>고기</h3>
                                    <Badge width="16rem">
                                        닭가슴살(100)g X 1 = 165.9 kcal
                                    </Badge>
                                </Category>
                                <Category>
                                    <h3>채소</h3>
                                    <Badge width="17rem">
                                        방울토마토(100g) X 3 = 0.018 kcal
                                    </Badge>
                                </Category>
                                <Category>
                                    <h3>견과</h3>
                                    <Badge width="13.5rem">
                                        아몬드(1알) X 10 = 70 kcal
                                    </Badge>
                                </Category>
                                <TotalCalorie>
                                    <h3>총합</h3>
                                    <Badge width="6.5rem">371.08 kcal</Badge>
                                </TotalCalorie>
                            </div>
                        </DietContainer>
                    </Box>
                    <Comment>
                        <h3>코멘트</h3>
                        <Box
                            width="100%"
                            height="8rem"
                            color="white"
                            borderColor="#D9D9D9"
                        >
                            ㅇㅇ님, 안녕하세요
                            <br />
                            ...
                        </Box>
                        <div>
                            <Button width="10rem" color="#51CF66">
                                수정
                            </Button>
                            <Button width="10rem" color="#FD7E14">
                                삭제
                            </Button>
                        </div>
                    </Comment>
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

const DietInfo = styled.div`
    height: 8rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 7px;
    margin-left: 30px;

    & > p {
        font-weight: bold;
        color: #999999;
    }
`;

const DietContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 50px;
`;

const Category = styled.div`
    margin: 20px 0;
`;

const TotalCalorie = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 40px;
`;

const Comment = styled.div`
    width: 75%;
    display: flex;
    flex-direction: column;
    gap: 10px;

    & > div {
        display: flex;
        gap: 20px;
        margin: 0 auto;
    }
`;

export default CoachingWrite;
