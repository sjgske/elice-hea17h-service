import React from 'react';
import styled from 'styled-components';

function Coaching() {
    return (
        <PageContainer>
            <PageTitle>코칭</PageTitle>
            <MainContainer>
                <Diet>
                    <DietInfo>
                        <DietDate>2022.07.05</DietDate>
                        <ContentTitle>
                            헬스장 가기 전에 먹기 좋은 식단
                        </ContentTitle>
                        <DietCalorie>1850 kcal</DietCalorie>
                    </DietInfo>
                    <CommentWriteBtn>코멘트 작성</CommentWriteBtn>
                </Diet>
            </MainContainer>
        </PageContainer>
    );
}

const PageContainer = styled.div`
    width: 85vw;
    margin: 100px auto;
`;

const PageTitle = styled.h2`
    font-size: 24px;
`;

const MainContainer = styled.div`
    background-color: white;
    padding: 50px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Diet = styled.div`
    width: 75%;
    height: 8rem;
    background-color: #faf3e3;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    margin-bottom: 40px;
    border-radius: 5px;
`;

const DietInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
`;

const DietDate = styled.div`
    font-size: 1rem;
    font-weight: bold;
    width: 6rem;
    height: 1.5rem;
    background-color: white;
    text-align: center;
    border-radius: 5px;
`;

const ContentTitle = styled.p`
    font-size: 1.2rem;
    font-weight: bold;
    margin: 0;
`;

const DietCalorie = styled.p`
    font-size: 16px;
    font-weight: bold;
    color: #999999;
    margin: 0;
`;

const CommentWriteBtn = styled.button`
    background-color: #fd7e14;
    color: white;
    font-size: 1rem;
    font-weight: bold;
    border: 0;
    border-radius: 5px;
    width: 10rem;
    height: 2rem;
    :hover {
        cursor: pointer;
    }
`;

export default Coaching;
