import React from 'react';
import styled from 'styled-components';

const Container = styled.root`
    background: #F7F7F9;
`;

const Section = styled.section`
    background: #FFFFFF;
    margin-top: 200px;
`;

const SearchSection = styled.section`
    margin-left: 100px;
    margin-right: 100px;
`;

const SearchContainer = styled.container`
    border-botton: soild 3px #51CF66;
`;

const InputText = styled.h2`
    color: #51CF66;
`;

const InputItem = styled.input`
    color: black;
`;

const LatestSearchContainer = styled.div`
    color: black;
`;

const LatestSearchText = styled.h2`
    font-weight: 700;
    font-size: 36px;
`;

const LatestSearchList = styled.input`
    font-weight: 700;
    font-size: 30px;
    color: #999999;
`;

function DietSearch() {
    return(
        <Container>
            <Section>
                <SearchSection>
                    <SearchContainer>
                        <InputText>돋보기</InputText>
                        <InputItem placeholder="검색할 내용을 입력하세요 예)100g 닭가슴살"/>
                    </SearchContainer>
                    <LatestSearchContainer>
                        <LatestSearchText>최근 검색어</LatestSearchText>
                        <LatestSearchList>100g 닭가슴살</LatestSearchList>
                        <LatestSearchList>200g 토마토 100g 시저 샐러드</LatestSearchList>
                        <LatestSearchList>10g 아몬드</LatestSearchList>
                    </LatestSearchContainer>
                </SearchSection>
            </Section>
        </Container>
    );
};

export default DietSearch;