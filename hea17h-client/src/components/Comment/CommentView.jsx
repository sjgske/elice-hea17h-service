import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { deleteOne } from '../../slices/CommentSlice';
import Box from '../Box';
import Button from '../Button';
import CommentInput from './CommentInput';
import * as Api from '../../api';

function CommentView({ content, expert, myId, dietId, commentId }) {
    const dispatch = useDispatch();
    const [comment, setComment] = useState(content);
    const [clickEditBtn, setClickEditBtn] = useState(false);

    const handleClick = () => {
        setClickEditBtn(!clickEditBtn);
    };

    const updateComment = newComment => {
        setComment(newComment);
    };

    const deleteComment = async () => {
        const res = await Api.delete('/diets/comments', {
            dietId,
            commentId,
        });

        if (res.status === 200) {
            dispatch(deleteOne(commentId));
        }
    };

    return (
        <div>
            {!clickEditBtn ? (
                <>
                    <ExpertInfo>
                        {expert.certificate.map(({ name }) => name).join(' / ')}
                    </ExpertInfo>
                    <CommentBox
                        width="100%"
                        color="white"
                        borderColor="#D9D9D9"
                    >
                        {comment}
                    </CommentBox>
                    {expert.user === myId && (
                        <ButtonContainer>
                            <Button
                                width="10rem"
                                color="#51CF66"
                                onClick={handleClick}
                            >
                                수정
                            </Button>
                            <Button
                                width="10rem"
                                color="#FD7E14"
                                onClick={deleteComment}
                            >
                                삭제
                            </Button>
                        </ButtonContainer>
                    )}
                </>
            ) : (
                <CommentInput
                    dietId={dietId}
                    content={comment}
                    commentId={commentId}
                    clickEditBtn
                    handleClick={handleClick}
                    updateComment={updateComment}
                />
            )}
        </div>
    );
}

CommentView.propTypes = {
    content: PropTypes.string.isRequired,
    expert: PropTypes.shape({
        certificate: PropTypes.arrayOf(PropTypes.object),
        user: PropTypes.string,
    }).isRequired,
    myId: PropTypes.string.isRequired,
    dietId: PropTypes.string.isRequired,
    commentId: PropTypes.string.isRequired,
};

const ExpertInfo = styled.div`
    color: #999999;
    font-weight: bold;
    font-size: 0.9rem;
    margin-bottom: 5px;

    & > p {
        margin: 0;
    }

    @media (max-width: 768px) {
        font-size: 0.8rem;
    }
`;

const CommentBox = styled(Box)`
    padding: 10px;
    white-space: pre-wrap;

    @media (max-width: 768px) {
        font-size: 0.8rem;
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin: 10px 0;
`;

export default CommentView;
