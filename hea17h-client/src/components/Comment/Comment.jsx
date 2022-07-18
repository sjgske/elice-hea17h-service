import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setComments } from '../../slices/CommentSlice';
import CommentView from './CommentView';

function Comment({ commentInfo, myId, dietId }) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setComments(commentInfo));
    }, []);

    const { comments } = useSelector(state => state.comment);

    return (
        <Root>
            {comments.map(({ content, expert, _id }) => (
                <CommentView
                    key={_id}
                    content={content}
                    expert={expert}
                    myId={myId}
                    dietId={dietId}
                    commentId={_id}
                />
            ))}
        </Root>
    );
}

const Root = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export default Comment;
