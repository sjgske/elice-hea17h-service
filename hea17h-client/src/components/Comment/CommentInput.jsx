import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import * as Api from '../../api';
import Button from '../Button';

function CommentInput({
    dietId,
    content,
    commentId,
    clickEditBtn,
    handleClick,
    updateComment,
}) {
    const [comment, setComment] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (clickEditBtn) {
            setComment(content);
        }
    }, []);

    const inputComment = e => {
        setComment(e.target.value);
    };

    const addComment = async () => {
        const res = await Api.post('/diets/addComment', {
            dietId,
            comment,
        });

        if (res.status === 200) {
            navigate(`/coachingRead/${dietId}`);
        }
    };

    const editComment = async () => {
        await Api.patch('/diets/modifyComment', {
            dietId,
            commentId,
            content: comment,
        });

        handleClick();
        updateComment(comment);
    };

    return (
        <Root>
            <textarea value={comment} onChange={inputComment} />
            <div>
                <Button
                    width="10rem"
                    color="#51CF66"
                    onClick={clickEditBtn ? editComment : addComment}
                >
                    작성 완료
                </Button>
            </div>
        </Root>
    );
}

const Root = styled.div`
    & > textarea {
        padding: 10px;
        width: 100%;
        height: 200px;
        resize: none;
        outline: none;
        border: 1px solid #d9d9d9;

        @media (max-width: 768px) {
            font-size: 0.8rem;
        }
    }

    & > div {
        display: flex;
        justify-content: center;
    }
`;

export default CommentInput;
