import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Box from '../../components/Box';
import DietTheme from '../../components/DietInfo/DietTheme';
import DietDetail from '../../components/DietInfo/DietDetail';
import UserInfoView from '../../components/UserInfo/UserInfoView';
import Comment from '../../components/Comment/Comment';
import TitleText from '../../components/DietInfo/TitleText';
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
        <div>
            {/* <Nav /> */}
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
                        <CommentContainer>
                            <TitleText>코멘트</TitleText>
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
                )}
            </MainContainer>
        </div>
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
