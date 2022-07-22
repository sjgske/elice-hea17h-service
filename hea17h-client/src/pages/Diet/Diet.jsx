import React from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import TopButton from '../../components/TopButton';
import Nav from '../../components/Nav';

function Diet() {
    const { state } = useLocation();
    console.log(state);

    // const navigate = useNavigate();
    // const calculatehandler = () => {
    //     navigate(`calculate`);
    // };
    return(
        <>
        <Nav />
        <Container>
            <H1>식단</H1>
            <Main>
                <Header>
                    <Div className="margin-bottom">
                        <H2>
                            원하는 식단을 검색하고
                            <br /> 칼로리와 필수 영양소를 계산해보세요
                            <Green>.</Green>
                        </H2>
                    </Div>
                    <Content>
                        <MorningTitle>
                            <H4>아침</H4>
                            <AddBtn><FontAwesomeIcon icon={faPlus} /></AddBtn>
                        </MorningTitle>
                        <AfternoonTitle>
                            <H4>점심</H4>
                            <AddBtn><FontAwesomeIcon icon={faPlus} /></AddBtn>
                        </AfternoonTitle>
                        <EveningTitle>
                            <H4>저녁</H4>
                            <AddBtn><FontAwesomeIcon icon={faPlus} /></AddBtn>
                        </EveningTitle>
                        <CalculateWrapper>
                            <CalculateBtn>계산하기</CalculateBtn>
                        </CalculateWrapper>
                    </Content>
                </Header>
            </Main>
            <TopButton />
        </Container>
    </>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: #f7f7f9;
    padding: 8vw 10vw;
`;

const Main = styled.div`
    position: relative;
    background: #fff;
    padding: 5vw 8vw;
`;

const Header = styled.div`
    position: relative;
    margin-bottom: 6rem;
    z-index: 10;
`;

const Div = styled.div``;

const Content = styled.div`
    background: #f7f7f9;   
`;


const H1 = styled.h1`
    font-size: 2.2rem;
    line-height: 44px;
    margin-bottom: 40px;
`;

const H2 = styled.h2`
    font-size: 2.5rem;
    line-height: 3.8rem;

    &:first-child {
        margin-bottom: 3rem;
    }
`;
const MorningTitle = styled.div`
    display: flex;
    padding-top: 2rem;
    padding-left: 2rem;
`;
const AfternoonTitle = styled.div`
    display: flex;
    padding-top: 2rem;
    padding-left: 2rem;
`;
const EveningTitle = styled.div`
    display: flex;
    padding-top: 2rem;
    padding-left: 2rem;
`;

const H4 = styled.h4`
    font-size: 2.5rem;
    line-height: 44px;
    margin-bottom: 2rem;
    margin-right: 1rem;
    font-weight: 700;
`;
const AddBtn = styled.button`
    display: inline-block;
    font-size: 2rem;
    width: 3rem;
    height: 3rem;
    border-radius: 5px;
    color: #FFFFFF;
    font-weight: 600;
    background-color: #51CF66;
`;

const Green = styled.span`
    color: #51cf66;
`;

const CalculateWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 2rem;
`;

const CalculateBtn = styled.button`
    font-size: 1.5rem;
    width: auto;
    height: 36px;
    padding-right: 2rem;
    padding-left: 2rem;
    height: 3rem;
    border-radius: 5px;
    color: #FFFFFF;
    font-weight: 600;
    background-color: #51CF66;
`;

export default Diet;