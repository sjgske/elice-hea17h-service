import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import Box from '../../components/Box';
import Badge from '../../components/Badge';
import Button from '../../components/Button';
import DietTheme from '../../components/DietInfo/DietTheme';
import ImageBadge from '../../components/DietInfo/ImageBadge';
import LabelWithInfo from '../../components/UserInfo/LabelWithInfo';
import convertDate from '../../utils';

function CoachingWrite() {
    const navigate = useNavigate();
    const [dietInfo, setDietInfo] = useState([]);
    const { dietId } = useParams();
    const [comment, setComment] = useState('');

    const getData = async () => {
        const token =
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImppaG85OSIsIm5hbWUiOiLso7zsp4DtmLgiLCJpYXQiOjE2NTc3OTQ5MTR9.2MNs_EKH7A6hMVNaAORWtb7o9D3JnRJtiopI0jz6DrY';
        const { data } = await axios.get(
            'http://localhost:5000/diets/getAllDiet',
            {
                headers: {
                    userToken: token,
                },
            },
        );

        const obj = data.payload.payload.find(diet => diet._id === dietId);
        setDietInfo(obj);
    };

    const inputComment = e => {
        setComment(e.target.value);
    };

    const addComment = async () => {
        const token =
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImppaG85OSIsIm5hbWUiOiLso7zsp4DtmLgiLCJpYXQiOjE2NTc3OTQ5MTR9.2MNs_EKH7A6hMVNaAORWtb7o9D3JnRJtiopI0jz6DrY';

        const res = await axios.post(
            'http://localhost:5000/diets/addComment',
            {
                dietId: dietInfo._id,
                comment,
            },
            {
                headers: {
                    userToken: token,
                },
            },
        );

        if (res.status === 200) {
            navigate(`/coachingRead/${dietInfo._id}`);
        } else {
            // 나중에 에러 처리
            console.log('ERROR');
        }
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
                            {dietInfo.dietFoods.map((meal, index) => (
                                <DietContainer key={meal._id}>
                                    <ImageBadge
                                        imgUrl={
                                            dietInfo.dietFoods[index].mainImg
                                        }
                                    />
                                    <p>{meal.mealType}</p>
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
                                                방울토마토(100g) X 3 = 0.018
                                                kcal
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
                                                {
                                                    dietInfo.dietFoods[index]
                                                        .mealCalories
                                                }{' '}
                                                kcal
                                            </Badge>
                                        </TotalCalorie>
                                    </div>
                                </DietContainer>
                            ))}
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
                        <Comment>
                            <h3>코멘트 작성</h3>
                            <textarea onChange={inputComment} />
                            <div>
                                <Button
                                    width="10rem"
                                    color="#51CF66"
                                    onClick={addComment}
                                >
                                    작성 완료
                                </Button>
                            </div>
                        </Comment>
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

const DietContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
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
