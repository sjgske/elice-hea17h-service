import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Box from '../Box';
import Button from '../Button';

function Comment({ content, expert }) {
    const [myInfo, setMyInfo] = useState({});

    const getMyInfo = async () => {
        const token =
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImppaG85OSIsIm5hbWUiOiLso7zsp4DtmLgiLCJpYXQiOjE2NTc3OTQ5MTR9.2MNs_EKH7A6hMVNaAORWtb7o9D3JnRJtiopI0jz6DrY';
        const { data } = await axios.get(
            'http://localhost:5000/users/getUser',
            {
                headers: {
                    userToken: token,
                },
            },
        );

        setMyInfo(data);
    };

    useEffect(() => {
        getMyInfo();
    }, []);

    return (
        <div
            style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Box width="100%" height="8rem" color="white" borderColor="#D9D9D9">
                {content}
            </Box>
            {expert.user === myInfo._id && (
                <ButtonContainer>
                    <Button width="10rem" color="#51CF66">
                        수정
                    </Button>
                    <Button width="10rem" color="#FD7E14">
                        삭제
                    </Button>
                </ButtonContainer>
            )}
        </div>
    );
}

const ButtonContainer = styled.div`
    display: flex;
    gap: 20px;
    margin: 0 auto;
`;

export default Comment;
