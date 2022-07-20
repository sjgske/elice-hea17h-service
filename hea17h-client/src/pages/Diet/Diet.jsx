import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
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
                        <CircleLink
                            to="/diet/search"
                            className="flex-column-align-items"
                        >
                            <Circle>
                                <FontAwesomeIcon icon={faArrowRight} />
                            </Circle>
                            <Calculate>계산해보기</Calculate>
                        </CircleLink>
                    </TitleContainer>
                    <DietContainer>
                        <AddBtnContainer>
                            <AddBtn to="/diet/search">추가</AddBtn>
                        </AddBtnContainer>
                        <MoringContainer>
                            <MorningTitle>아침</MorningTitle>
                            <MeatTitle>고기</MeatTitle>
                            <ContentBtn>닭가슴살 100g</ContentBtn>
                            <EditBtn>수정</EditBtn>
                            <DelBtn>삭제</DelBtn>
                        </MoringContainer>
                        <AfternoonContainer>
                            <AfternoonTitle>점심</AfternoonTitle>
                            <VegeTitle>채소</VegeTitle>
                            <ContentBtn>방울토마토 3개</ContentBtn>
                            <EditBtn>수정</EditBtn>
                            <DelBtn>삭제</DelBtn>
                        </AfternoonContainer>
                        <EveningContainer>
                            <EveningTitle>저녁</EveningTitle>
                            <NutsTitle>견과</NutsTitle>
                            <ContentBtn>아몬드 70g</ContentBtn>
                            <EditBtn>수정</EditBtn>
                            <DelBtn>삭제</DelBtn>
                        </EveningContainer>
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
`;

const Info = styled.h1`
    margin-top: 2rem;
    margin-left: 3rem;
`;
const CircleLink = styled(Link)`
    transition: all 400ms ease;

    &:hover {
        transform: translateX(20px);
    }
`;

const Circle = styled.div`
    position: relative;
    width: 60px;
    height: 60px;
    margin-left: 3rem;
    margin-bottom: 0.5rem;
    background-color: #e9ecef;
    border-radius: 50%;

    svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 2.5rem;
        color: #51CF66;
    }
`;
const Calculate = styled.p`
    margin-left: 3rem;
    color: #51CF66;
`;

const GreenDot = styled.span`
    display: inline-block;
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

const MoringContainer = styled.div`
    padding-top: 1rem;
    padding-left: 3rem;
`;

const MorningTitle = styled.h2`
`;

const MeatTitle = styled.h2`
`;

const AfternoonContainer = styled.div`
    padding-left: 3rem;
`;

const AfternoonTitle = styled.h2`
`;

const VegeTitle = styled.h2`
`;

const EveningContainer = styled.div`
    padding-left: 3rem; 
`;

const EveningTitle = styled.h2`
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
    height: 2rem;
    width: 2rem;
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
    height: 2rem;
    width: 2rem;
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
    height: 2rem;
    width: 4rem;
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