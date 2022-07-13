import React from 'react';
import styled from 'styled-components';
import Nav from '../../components/Nav/index';

function Diet() {
    return(
        <>
            <Nav />
            <Title>식단</Title>
            <Container>
                <Section>
                    <TitleContainer>
                        <Info>원하는 식단을 검색하고<br />내 식단 목록에 추가해 보세요<GreenDot>.</GreenDot></Info>
                        <Icon />
                    </TitleContainer>
                    <DietContainer>
                        <AddBtnContainer>
                            <AddBtn>추가</AddBtn>
                        </AddBtnContainer>
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
                            <br />
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
    margin-left: 3rem;
`;

const Section = styled.section`
    background: #FFFFFF;
    padding-bottom: 3rem;
`;

const TitleContainer = styled.div`
    display: flex;
    flex-direction : row;
`;

const Info = styled.h1`
    margin-top: 2rem;
    margin-left: 3rem;
`;

const GreenDot = styled.span`
    display: inline-block;
    color: #51CF66;
`;

const Icon = styled.h5`
    flex: auto; 
    color: #51CF66;
`;

const DietContainer = styled.div`
    margin-left: 3rem;
    margin-right: 3rem;
    background: #F5F5F5;;
`;

const AddBtnContainer = styled.div`
    padding-top: 2rem;
`;

const AddBtn = styled.button`
    margin-right: 3rem;
    float: right;
    width: 60px;
    height: 35px;   
    color: #FFFFFF;
    background: #51CF66;
    border-radius: 5px;
    border: solid 1px #51CF66;
`;

const MeatContainer = styled.div`
    padding-top: 1rem;
    padding-left: 3rem;
`;

const MeatTitle = styled.h2`
`;

const VegeContainer = styled.div`
    padding-left: 3rem;
`;

const VegeTitle = styled.h2`
`;

const NutsContainer = styled.div`
    padding-left: 3rem; 
`;

const NutsTitle = styled.h2`
`;

const ContentBtn = styled.button`
    height: 40px;    
    background: #FFFFFF;
    color: #999999;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 5px;
    border: solid 1px #FFFFFF;

    font-size: 20px;
    line-height: 24px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    margin-right: 0.5rem;
`;

const EditBtn = styled.button`
    height: 40px;
    background: #FD7E14;
    color: #FFFFFF;
    border-radius: 5px;
    border: solid 1px #FD7E14;
    
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    margin-right: 0.5rem;
`;

const DelBtn = styled.button`
    height: 40px;
    background: #FF000F;
    color: #FFFFFF;
    border-radius: 5px;
    border: solid 1px #FF000F;
    
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    margin-right: 0.5rem;
`;

const BtnContainer = styled.div`
    display: flex;
    text-align: center;
    margin-top: 3rem;
    justify-content: center;
    align-items: center;
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