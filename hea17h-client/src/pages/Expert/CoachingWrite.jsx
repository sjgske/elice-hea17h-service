import React from 'react';
import styled from 'styled-components';
import Box from '../../components/Box';
import Badge from '../../components/Badge';
import Button from '../../components/Button';
import DietTheme from '../../components/DietInfo/DietTheme';
import ImageBadge from '../../components/DietInfo/ImageBadge';

function CoachingWrite() {
    return (
        <MainContainer>
            <h2>코칭</h2>
            <Box width="100%" color="white">
                <Container>
                    <DietTheme
                        date="2022.07.05"
                        theme="다이어트 최고, 지중해식 식단"
                        calorie="1850"
                    />
                    <Box width="75%" color="#F5F5F5">
                        <ImageContainer>
                            <div>
                                <ImageBadge />
                                <p>아침</p>
                            </div>
                            <div>
                                <ImageBadge />
                                <p>점심</p>
                            </div>
                            <div>
                                <ImageBadge />
                                <p>저녁</p>
                            </div>
                        </ImageContainer>
                        <DietContainer>
                            <div>
                                <Category>
                                    <div>
                                        <h3>고기</h3>
                                        <Badge
                                            width="6.5rem"
                                            fontColor="#999999"
                                        >
                                            164.9 kcal
                                        </Badge>
                                    </div>
                                    <Badge width="15.5rem" fontColor="#999999">
                                        닭가슴살(100)g X 1 = 165.9 kcal
                                    </Badge>
                                </Category>
                                <Category>
                                    <h3>채소</h3>
                                    <Badge width="17rem" fontColor="#999999">
                                        방울토마토(100g) X 3 = 0.018 kcal
                                    </Badge>
                                </Category>
                                <Category>
                                    <h3>견과</h3>
                                    <Badge width="13rem" fontColor="#999999">
                                        아몬드(1알) X 10 = 70 kcal
                                    </Badge>
                                </Category>
                                <TotalCalorie>
                                    <h3>총합</h3>
                                    <Badge width="6.5rem" fontColor="#999999">
                                        371.08 kcal
                                    </Badge>
                                </TotalCalorie>
                            </div>
                            <div>
                                <Category>
                                    <div>
                                        <h3>고기</h3>
                                        <Badge
                                            width="6.5rem"
                                            fontColor="#999999"
                                        >
                                            164.9 kcal
                                        </Badge>
                                    </div>
                                    <Badge width="15.5rem" fontColor="#999999">
                                        닭가슴살(100)g X 1 = 165.9 kcal
                                    </Badge>
                                </Category>
                                <Category>
                                    <h3>채소</h3>
                                    <Badge width="17rem" fontColor="#999999">
                                        방울토마토(100g) X 3 = 0.018 kcal
                                    </Badge>
                                </Category>
                                <Category>
                                    <h3>견과</h3>
                                    <Badge width="13rem" fontColor="#999999">
                                        아몬드(1알) X 10 = 70 kcal
                                    </Badge>
                                </Category>
                                <TotalCalorie>
                                    <h3>총합</h3>
                                    <Badge width="6.5rem" fontColor="#999999">
                                        371.08 kcal
                                    </Badge>
                                </TotalCalorie>
                            </div>
                            <div>
                                <Category>
                                    <div>
                                        <h3>고기</h3>
                                        <Badge
                                            width="6.5rem"
                                            fontColor="#999999"
                                        >
                                            164.9 kcal
                                        </Badge>
                                    </div>
                                    <Badge width="15.5rem" fontColor="#999999">
                                        닭가슴살(100)g X 1 = 165.9 kcal
                                    </Badge>
                                </Category>
                                <Category>
                                    <h3>채소</h3>
                                    <Badge width="17rem" fontColor="#999999">
                                        방울토마토(100g) X 3 = 0.018 kcal
                                    </Badge>
                                </Category>
                                <Category>
                                    <h3>견과</h3>
                                    <Badge width="13rem" fontColor="#999999">
                                        아몬드(1알) X 10 = 70 kcal
                                    </Badge>
                                </Category>
                                <TotalCalorie>
                                    <h3>총합</h3>
                                    <Badge width="6.5rem" fontColor="#999999">
                                        371.08 kcal
                                    </Badge>
                                </TotalCalorie>
                            </div>
                        </DietContainer>
                    </Box>
                    <UserInfo>
                        <h3>회원정보</h3>
                        <div>
                            <p>키(cm)</p>
                            <InfoBox
                                width="10rem"
                                height="1.5rem"
                                borderColor="#ECECEC"
                            >
                                180
                            </InfoBox>
                            <p>몸무게(kg)</p>
                            <InfoBox
                                width="10rem"
                                height="1.5rem"
                                borderColor="#ECECEC"
                            >
                                80
                            </InfoBox>
                            <p>나이</p>
                            <InfoBox
                                width="10rem"
                                height="1.5rem"
                                borderColor="#ECECEC"
                            >
                                20
                            </InfoBox>
                            <p>성별</p>
                            <InfoBox
                                width="10rem"
                                height="1.5rem"
                                borderColor="#ECECEC"
                            >
                                남자
                            </InfoBox>
                            <p>BMI(kg/m²)</p>
                            <InfoBox
                                width="10rem"
                                height="1.5rem"
                                borderColor="#ECECEC"
                            >
                                24.69
                            </InfoBox>
                            <p>다이어트 목표</p>
                            <InfoBox
                                width="10rem"
                                height="1.5rem"
                                borderColor="#ECECEC"
                            >
                                현재 체중 유지하기
                            </InfoBox>
                            <p>활동 정도</p>
                            <InfoBox
                                width="10rem"
                                height="1.5rem"
                                borderColor="#ECECEC"
                            >
                                매우 활동적
                            </InfoBox>
                            <p>RDI(kcal)</p>
                            <InfoBox
                                width="10rem"
                                height="1.5rem"
                                borderColor="#ECECEC"
                            >
                                3800
                            </InfoBox>
                        </div>
                    </UserInfo>
                    <Comment>
                        <h3>코멘트 작성</h3>
                        <textarea />
                        <div>
                            <Button width="10rem" color="#51CF66">
                                작성 완료
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

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 30px;
    gap: 30px;

    & > div {
        text-align: center;

        & > p {
            font-weight: bold;
        }
    }

    @media (max-width: 768px) {
        font-size: 0.8rem;
    }
`;

const DietContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    gap: 10px;
    margin: 40px 20px;
`;

const Category = styled.div`
    margin: 20px 0;

    & > div {
        display: flex;
        gap: 10px;
        margin-bottom: 5px;
    }

    @media (max-width: 768px) {
        font-size: 0.7rem;
    }
`;

const TotalCalorie = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 40px;

    @media (max-width: 768px) {
        flex-direction: column;
        font-size: 0.7rem;
        gap: 0;
    }
`;

const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 75%;

    & > div {
        margin-top: 20px;
    }

    & > div > p {
        margin-bottom: 5px;
    }
`;

const InfoBox = styled(Box)`
    font-size: 0.8rem;
    color: #999999;
    padding-left: 7px;
    margin-bottom: 5px;
    line-height: 1.5rem;
`;

const Comment = styled.div`
    width: 75%;
    display: flex;
    flex-direction: column;
    gap: 10px;

    & > textarea {
        width: 100%;
        height: 200px;
        resize: none;
        outline: none;
        border: 1px solid #d9d9d9;
    }

    & > div {
        margin: 0 auto;
    }
`;

export default CoachingWrite;
