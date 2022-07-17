import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import * as Api from '../../api';
import Box from '../Box';
import Button from '../Button';

function Comment({ content, expert }) {
    const [myInfo, setMyInfo] = useState({});
    // 전문가 정보 가져오기
    // const [expertInfo, setExpertInfo] = useState({});

    const getMyInfo = async () => {
        const { data } = await Api.get('/users/getUser');

        setMyInfo(data);
    };

    // const getExpertInfo = async () => {
    //     const { data } = await Api.get('/users/getExpertInfo');

    //     setExpertInfo(data);
    // };

    useEffect(() => {
        getMyInfo();
        // getExpertInfo();
    }, []);

    return (
        <Root>
            <CommentBox width="100%" color="white" borderColor="#D9D9D9">
                {content}
            </CommentBox>
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
        </Root>
    );
}

const Root = styled.div`
    width: 100%;
`;

const CommentBox = styled(Box)`
    padding: 10px;

    @media (max-width: 768px) {
        font-size: 0.8rem;
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    gap: 20px;
    margin: 0 auto;
`;

export default Comment;
