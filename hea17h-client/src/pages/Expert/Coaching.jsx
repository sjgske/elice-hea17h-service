import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Box from '../../components/Box';
import Button from '../../components/Button';
import DietTheme from '../../components/DietInfo/DietTheme';
import convertDate from '../../utils';

function Coaching() {
    const [dietList, setDietList] = useState([]);

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

        setDietList(data.payload.payload);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <MainContainer>
            <h2>코칭</h2>
            <Box width="100%" color="white">
                <Container>
                    {dietList.map(diet => (
                        <DietTheme
                            key={diet._id}
                            date={convertDate(diet.createdAt)}
                            name={diet.name}
                            totalCalories={diet.totalCalories}
                        >
                            {diet.comment.length > 0 ? (
                                <Link to={`/coachingRead/${diet._id}`}>
                                    <Button width="10rem" color="#51CF66">
                                        코멘트 보기
                                    </Button>
                                </Link>
                            ) : (
                                <Link to={`/coachingWrite/${diet._id}`}>
                                    <Button width="10rem" color="#FD7E14">
                                        코멘트 작성
                                    </Button>
                                </Link>
                            )}
                        </DietTheme>
                    ))}
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
