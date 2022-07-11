import React from 'react';
import styled from 'styled-components';
import Nav from '../../components/common/Nav';

function Diet() {
    return(
        <>
            <Nav />
            <Title>식단</Title>
            <Container>
                <Section>
                    <Info>원하는 식단을 검색하고<br />내 식단 목록에 추가해 보세요<GreenDot>.</GreenDot></Info>
                    <Icon>계산하기</Icon>
                    <DietContainer>
                        <AddBtn>추가</AddBtn>
                        <MeatContainer>
                            <MeatTitle>고기</MeatTitle>
                            <ContentBtn>닭가슴살 100g</ContentBtn>
                            <EditBtn>수정</EditBtn>
                            <DelBtn>삭제</DelBtn>
                        </MeatContainer>
                        <VegeContainer>
                            <VegeTitle>채소</VegeTitle>
                            <ContentBtn>방울토마토 3개</ContentBtn>
                            <EditBtn>수정</EditBtn>
                            <DelBtn>삭제</DelBtn>
                        </VegeContainer>
                        <NutsContainer>
                            <NutsTitle>견과</NutsTitle>
                            <ContentBtn>아몬드 70g</ContentBtn>
                            <EditBtn>수정</EditBtn>
                            <DelBtn>삭제</DelBtn>
                        </NutsContainer>
                        <BtnContainer>
                            <CalculateBtn>계산하기</CalculateBtn>
                            <CalculateInfo>항목 추가가 안되었나요? 더 알아보기</CalculateInfo>
                        </BtnContainer>
                    </DietContainer>
                </Section>
            </Container>
        </>
    );
};

const Container = styled.div`
    background: #F7F7F9;
    width: 100%;
    height 100%;
`;

const Title = styled.h2`
`;

const Section = styled.section`
    background: #FFFFFF;
`;

const Info = styled.h1`
`;

const GreenDot = styled.span`
    color: #51CF66;
`;

const Icon = styled.h5`
    color: #51CF66;
`;

const DietContainer = styled.div`
    margin-left: 1rem;
    margin-right: 1rem;
    background: #F5F5F5;;
`;
const AddBtn = styled.button`
    float: right;
    color: #FFFFFF;
    background: #51CF66;
    border-radius: 5px;
    border: solid 1px #51CF66;
`;

const MeatContainer = styled.div`
`;

const MeatTitle = styled.h2`
`;

const VegeContainer = styled.div`
`;

const VegeTitle = styled.h2`
`;

const NutsContainer = styled.div`
`;

const NutsTitle = styled.h2`
`;

const ContentBtn = styled.button`    
    background: #FFFFFF;
    color: #999999;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 5px;
    border: solid 1px #FFFFFF;
`;

const EditBtn = styled.button`
    background: #FD7E14;
    color: #FFFFFF;
    border-radius: 5px;
    border: solid 1px #FD7E14;
`;

const DelBtn = styled.button`
    background: #FF000F;
    color: #FFFFFF;
    border-radius: 5px;
    border: solid 1px #FF000F;
`;

const BtnContainer = styled.div`
    display: flex;
    text-align: center;
`;

const CalculateBtn = styled.button`
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    background: #51CF66;
    border-radius: 5px;
    border: solid 1px #51CF66;
`;

const CalculateInfo = styled.p`
    align-items: center;
    text-align: center;
    color: #999999;
`;

export default Diet;