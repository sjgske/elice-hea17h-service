import React from 'react';
import styled from 'styled-components';
import Nav from '../../components/Nav/index';
import AxiosGet from './AxiosGet';

function DietSearch() {
    return(
        <>
            <Nav />
            <SearchTitle>
                <SearchInfo>Search<GreenDot>.</GreenDot><br />
                    닭가슴살 100g<OrangeDot>.</OrangeDot> 방울토마토 20개<OrangeDot>.</OrangeDot>
                </SearchInfo>
            </SearchTitle>
            <Container>
                <Section>
                    <SearchSection>
                        <SearchContainer>
                            <InputText>돋보기</InputText>
                            <InputItem/>
                            <AxiosGet />
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

const SearchTitle = styled.div`
    margin-left: 3rem;
`;

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
`;

const Section = styled.div`
    background: #FFFFFF;
`;

const SearchSection = styled.section`
    margin-left: 3rem;
    margin-right: 3rem;
`;

const SearchContainer = styled.div`
    padding-top: 2rem;
`;

const InputText = styled.span`
    color: #51CF66;
    margin-right: 0.5rem;
`;

const InputItem = styled.input`
`;

const LatestSearchContainer = styled.div`
    color: black;
    padding-bottom: 3rem;
`;

const LatestSearchText = styled.h2`
    font-weight: 700;
    font-size: 36px;
`;

const LatestSearchList = styled.h3`
    color: #999999
`;

export default DietSearch;