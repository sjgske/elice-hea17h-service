import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Box from '../../components/Box';
import Badge from '../../components/Badge';
import DietTheme from '../../components/DietInfo/DietTheme';
import ImageBadge from '../../components/DietInfo/ImageBadge';
import LabelWithInfo from '../../components/UserInfo/LabelWithInfo';
import Comment from '../../components/Comment/Comment';
import convertDate from '../../utils';
import * as Api from '../../api';

function CoachingRead() {
    const [dietInfo, setDietInfo] = useState({});
    const { dietId } = useParams();

    const getData = async () => {
        const { data } = await Api.get('/diets/getAllDiet');
        const obj = data.payload.payload.find(diet => diet._id === dietId);

        setDietInfo(obj);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <MainContainer>
            <h2>코칭</h2>
            {Object.keys(dietInfo).length > 0 && (
                <Box width="100%" color="white">
                    <Container>
                        <DietTheme
                            key={dietInfo._id}
                            date={convertDate(dietInfo.createdAt)}
                            name={dietInfo.name}
                            totalCalories={dietInfo.totalCalories}
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
                                        <Badge
                                            width="15.5rem"
                                            fontColor="#999999"
                                        >
                                            닭가슴살(100)g X 1 = 165.9 kcal
                                        </Badge>
                                    </Category>
                                    <Category>
                                        <h3>채소</h3>
                                        <Badge
                                            width="17rem"
                                            fontColor="#999999"
                                        >
                                            방울토마토(100g) X 3 = 0.018 kcal
                                        </Badge>
                                    </Category>
                                    <Category>
                                        <h3>견과</h3>
                                        <Badge
                                            width="13rem"
                                            fontColor="#999999"
                                        >
                                            아몬드(1알) X 10 = 70 kcal
                                        </Badge>
                                    </Category>
                                    <TotalCalorie>
                                        <h3>총합</h3>
                                        <Badge
                                            width="6.5rem"
                                            fontColor="#999999"
                                        >
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
                                        <Badge
                                            width="15.5rem"
                                            fontColor="#999999"
                                        >
                                            닭가슴살(100)g X 1 = 165.9 kcal
                                        </Badge>
                                    </Category>
                                    <Category>
                                        <h3>채소</h3>
                                        <Badge
                                            width="17rem"
                                            fontColor="#999999"
                                        >
                                            방울토마토(100g) X 3 = 0.018 kcal
                                        </Badge>
                                    </Category>
                                    <Category>
                                        <h3>견과</h3>
                                        <Badge
                                            width="13rem"
                                            fontColor="#999999"
                                        >
                                            아몬드(1알) X 10 = 70 kcal
                                        </Badge>
                                    </Category>
                                    <TotalCalorie>
                                        <h3>총합</h3>
                                        <Badge
                                            width="6.5rem"
                                            fontColor="#999999"
                                        >
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
                                        <Badge
                                            width="15.5rem"
                                            fontColor="#999999"
                                        >
                                            닭가슴살(100)g X 1 = 165.9 kcal
                                        </Badge>
                                    </Category>
                                    <Category>
                                        <h3>채소</h3>
                                        <Badge
                                            width="17rem"
                                            fontColor="#999999"
                                        >
                                            방울토마토(100g) X 3 = 0.018 kcal
                                        </Badge>
                                    </Category>
                                    <Category>
                                        <h3>견과</h3>
                                        <Badge
                                            width="13rem"
                                            fontColor="#999999"
                                        >
                                            아몬드(1알) X 10 = 70 kcal
                                        </Badge>
                                    </Category>
                                    <TotalCalorie>
                                        <h3>총합</h3>
                                        <Badge
                                            width="6.5rem"
                                            fontColor="#999999"
                                        >
                                            371.08 kcal
                                        </Badge>
                                    </TotalCalorie>
                                </div>
                            </DietContainer>
                        </Box>
                        <UserInfo>
                            <h3>회원정보</h3>
                            <LabelWithInfo
                                label="키(cm)"
                                info={dietInfo.user.height}
                            />
                            <LabelWithInfo
                                label="몸무게(kg)"
                                info={dietInfo.user.weight}
                            />
                            <LabelWithInfo
                                label="나이"
                                info={dietInfo.user.age}
                            />
                            <LabelWithInfo
                                label="성별"
                                info={dietInfo.user.gender}
                            />
                            <LabelWithInfo
                                label="BMI(kg/m²)"
                                info={
                                    dietInfo.user.weight /
                                    (dietInfo.user.height / 100) ** 2
                                }
                            />
                            <LabelWithInfo
                                label="다이어트 목표"
                                info={dietInfo.user.goal}
                            />
                            <LabelWithInfo
                                label="활동 정도"
                                info={dietInfo.user.activeLevel}
                            />
                            <LabelWithInfo
                                label="RDI(kcal)"
                                info={
                                    (dietInfo.user.height - 100) *
                                    0.9 *
                                    dietInfo.user.activeLevel
                                }
                            />
                        </UserInfo>
                        <CommentContainer>
                            <h3>코멘트</h3>
                            {dietInfo.comment.map(
                                ({ content, expert, _id }) => (
                                    <Comment
                                        key={_id}
                                        content={content}
                                        expert={expert}
                                    />
                                ),
                            )}
                        </CommentContainer>
                    </Container>
                </Box>
            )}
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

    & > h3 {
        margin-bottom: 15px;
    }
`;

const CommentContainer = styled.div`
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

export default CoachingRead;
