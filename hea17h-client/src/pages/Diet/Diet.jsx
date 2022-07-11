import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background: #F7F7F9;
    width: 100%;
    height 100%;
`;

const Title = styled.h2`
`

const Section = styled.section`
    background: #FFFFFF;
`;

const Info = styled.h1`
`

const Dot = styled.h1`
    color: #51CF66;
`

function Diet() {
    return(
        <Container>
            <Title>식단</Title>
            <Section>
                <Info>원하는 식단을 검색하고<br />내 식단 목록에 추가해 보세요<Dot>.</Dot></Info>
                <Icon>계산하기</Icon>
                <DietContainer>
                    <AddButton />
                    <EditButton />
                    <MeatContainer>
                        <MeatTitle>고기</MeatTitle>
                        <MeatCal>164.9 kcal</MeatCal>
                        <MeatInfo>닭가슴살(100g) X 1 = 164.9 kcal </MeatInfo>
                    </MeatContainer>
                    <VegeContainer>
                        <VegeTitle>채소</VegeTitle>
                        <VegeCal>136.18 kcal</VegeCal>
                        <VegeInfo>방울토마토(100g) X 3 = 0.018 kcal </VegeInfo>
                        <VegeInfo>양상추 샐러드(100g) X 2 = 136 cal </VegeInfo>
                    </VegeContainer>
                    <MeatContainer>
                        <MeatTitle>견과</MeatTitle>
                        <MeatCal>70 kcal</MeatCal>
                        <MeatInfo>아몬드(1알) X 10 = 70 kcal </MeatInfo>
                    </MeatContainer>
                    <TotalContainer>
                        <TotalTitle>총합</TotalTitle>
                        <TotalCal>371.08 kcal</TotalCal>
                    </TotalContainer>
                    <SaveButton />
                    <RetryButton />
                </DietContainer>
            </Section>
        </Container>
    );
};

export default Diet;