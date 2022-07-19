import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Box from '../../components/Box';
import Button from '../../components/Button';
import DietTheme from '../../components/DietInfo/DietTheme';
import convertDate from '../../utils';
import * as Api from '../../api';

function Coaching() {
    const [dietList, setDietList] = useState([]);

    const getData = async () => {
        const { data } = await Api.get('/diets/getAllDiet');

        setDietList(data.payload.payload);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <MainContainer>
            <h2>코칭</h2>
            <Container width="100%" color="white">
                {dietList.map(diet => (
                    <DietTheme
                        key={diet._id}
                        date={convertDate(diet.createdAt)}
                        name={diet.name}
                        totalCalories={diet.totalCalories}
                    >
                        {diet.comment.length > 0 ? (
                            <ButtonLink to={`/coachingRead/${diet._id}`}>
                                <Button width="10rem" color="#51CF66">
                                    코멘트 보기
                                </Button>
                            </ButtonLink>
                        ) : (
                            <ButtonLink to={`/coachingWrite/${diet._id}`}>
                                <Button width="10rem" color="#FD7E14">
                                    코멘트 작성
                                </Button>
                            </ButtonLink>
                        )}
                    </DietTheme>
                ))}
            </Container>
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

const ButtonLink = styled(Link)`
    text-decoration: none;
`;

export default Coaching;
