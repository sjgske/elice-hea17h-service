import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import * as Api from '../../api';
import Box from '../../components/Box';
import DietTheme from '../../components/DietInfo/DietTheme';
import DietDetail from '../../components/DietInfo/DietDetail';
import UserInfoView from '../../components/UserInfo/UserInfoView';
import TitleText from '../../components/DietInfo/TitleText';
import CommentInput from '../../components/Comment/CommentInput';
import convertDate from '../../utils';

function CoachingWrite() {
    const [dietInfo, setDietInfo] = useState([]);
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
                <Container width="100%" color="white">
                    <DietTheme
                        key={dietInfo._id}
                        date={convertDate(dietInfo.createdAt)}
                        name={dietInfo.name}
                        totalCalories={dietInfo.totalCalories}
                    />
                    <DietDetailBox width="75%" color="#F5F5F5">
                        {dietInfo.dietFoods.map(meal => (
                            <DietDetail key={meal._id} meal={meal} />
                        ))}
                    </DietDetailBox>
                    <UserInfo>
                        <TitleText>회원정보</TitleText>
                        <UserInfoView dietInfo={dietInfo} />
                    </UserInfo>
                    <Comment>
                        <TitleText>코멘트 작성</TitleText>
                        <CommentInput dietId={dietInfo._id} />
                    </Comment>
                </Container>
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

const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    padding: 50px 0;
`;

const DietDetailBox = styled(Box)`
    display: flex;
    justify-content: space-evenly;
    gap: 10px;
    padding: 20px;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        gap: 30px;
    }
`;

const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 75%;
`;

const Comment = styled.div`
    width: 75%;

    & > p {
        margin-bottom: 10px;
    }
`;

export default CoachingWrite;
