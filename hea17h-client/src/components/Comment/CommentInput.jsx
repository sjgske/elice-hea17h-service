import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../Button';

function CommentInput({ dietId }) {
    const [comment, setComment] = useState('');
    const navigate = useNavigate();

    const inputComment = e => {
        setComment(e.target.value);
    };

    const addComment = async () => {
        const token =
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImppaG85OSIsIm5hbWUiOiLso7zsp4DtmLgiLCJpYXQiOjE2NTc3OTQ5MTR9.2MNs_EKH7A6hMVNaAORWtb7o9D3JnRJtiopI0jz6DrY';

        const res = await axios.post(
            'http://localhost:5000/diets/addComment',
            {
                dietId,
                comment,
            },
            {
                headers: {
                    userToken: token,
                },
            },
        );

        if (res.status === 200) {
            navigate(`/coachingRead/${dietId}`);
        } else {
            // 나중에 에러 처리
            console.log('ERROR');
        }
    };
    console.log(dietId);
    return (
        <Root>
            <textarea onChange={inputComment} />
            <div>
                <Button width="10rem" color="#51CF66" onClick={addComment}>
                    작성 완료
                </Button>
            </div>
        </Root>
    );
}

const Root = styled.div`
    & > textarea {
        width: 100%;
        height: 200px;
        resize: none;
        outline: none;
        border: 1px solid #d9d9d9;
    }

    & > div {
        display: flex;
        justify-content: center;
    }
`;

export default CommentInput;
