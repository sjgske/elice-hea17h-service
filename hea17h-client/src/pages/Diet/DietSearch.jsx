import React from 'react';
import styled from 'styled-components';
import Nav from '../../components/common/Nav';

function DietSearch() {
    return(
        <>
            <Nav />
            <SearchInfo>Search<GreenDot>.</GreenDot><br />
                닭가슴살 100g<OrangeDot>.</OrangeDot> 방울토마토 20개<OrangeDot>.</OrangeDot>
            </SearchInfo>
            <Container>
                <Section>
                    <SearchSection>
                        <SearchContainer>
                            <InputText>돋보기</InputText>
                            <InputItem/>
                        </SearchContainer>
                        <LatestSearchContainer>
                            <LatestSearchText>최근 검색어</LatestSearchText>
                            <LatestSearchList>닭가슴살 100g </LatestSearchList>
                            <LatestSearchList>토마토 200g 시저 샐러드 100g</LatestSearchList>
                            <LatestSearchList>아몬드 10g</LatestSearchList>
                        </LatestSearchContainer>
                    </SearchSection>
                </Section>
            </Container>
        </>
    );
};

const SearchInfo = styled.h2`
`;

const GreenDot = styled.span`
    color: #51CF66;
`;

const OrangeDot = styled.span`
    color: #FD7E14;
`;

const Container = styled.div`
    background: #F7F7F9;
    width: 100%;
    height 100%;
`;

const Section = styled.section`
    background: #FFFFFF;
    margin-top: 200px;
`;

const SearchSection = styled.section`
    margin-left: 100px;
    margin-right: 100px;
`;

const SearchContainer = styled.div`
    border-botton: soild 3px #51CF66;
`;

const InputText = styled.span`
    color: #51CF66;
`;

const InputItem = styled.input`
`;

const LatestSearchContainer = styled.div`
    color: black;
`;

const LatestSearchText = styled.h2`
    font-weight: 700;
    font-size: 36px;
`;

const LatestSearchList = styled.h2`
    color: #999999
`;

export default DietSearch;