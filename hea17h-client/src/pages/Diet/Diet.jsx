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
                        </AfternoonTitle>
                        <EveningTitle>
                            <H4>저녁</H4>
                        </EveningTitle>
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
const MorningTitle = styled.div``;
const AfternoonTitle = styled.div``;
const EveningTitle = styled.div``;

const H4 = styled.h4`
    font-size: 1.5rem;
    line-height: 44px;
    margin-bottom: 1rem;
`;
const AddBtn = styled.button`
    display: inline-block;
    font-size: 36px;
    line-height: 48px;
    width: 100%;
    height: 100%;
    font-weight: 600;
`;

const Green = styled.span`
    color: #51cf66;
`;

export default Diet;