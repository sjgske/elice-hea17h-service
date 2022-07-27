import React, {useState, useEffect} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import TopButton from '../../components/TopButton';
import Nav from '../../components/Nav';
import {delCountText, changeQueryText, replaceCommas, blankToQuery} from '../../utils/UsefulFunction';

function Diet() {
    const { state } = useLocation();
    const [foodData, setFoodData] = useState([]);
    // const [queryInfo, setQueryInfo ] = useState([]);

    useEffect(() => {
        setFoodData(state);
    }, []);

    const navigate = useNavigate();

    console.log(foodData);

    const morningData = foodData ? foodData.filter(food => food.state === '아침') : [];
    const lunchData = foodData ? foodData.filter(food => food.state === '점심') : [];
    const nightData = foodData ? foodData.filter(food => food.state === '저녁') : [];
    const morningText = morningData.map(food => changeQueryText(delCountText(food.text)));
    const morningQuery = blankToQuery(replaceCommas(morningText.toString()));
    const lunchText = lunchData.map(food => changeQueryText(delCountText(food.text)));
    const lunchQuery = blankToQuery(replaceCommas(lunchText.toString()));
    const nightText = nightData.map(food => changeQueryText(delCountText(food.text)));
    const nightQuery = blankToQuery(replaceCommas(nightText.toString()));
    
    const queryInfo = [morningQuery, lunchQuery, nightQuery];

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
                        {/* <EditBtn onClick={() => navigate(`/diet/search`)}><FontAwesomeIcon icon={faPen} /></EditBtn> */}
                        <MorningTitle>
                            <H4>아침</H4>
                            <AddBtn onClick={() => navigate(`/diet/search`, { state: '아침' })}><FontAwesomeIcon icon={faPlus} /></AddBtn>
                        </MorningTitle>
                        <MorningContent>
                            {  foodData
                                ? foodData.filter(food => food.state === '아침').map((food)=> (
                                        <ContentBedge><Gray>{food.text}</Gray></ContentBedge>
                                )) : null
                            }
                        </MorningContent>
                        <AfternoonTitle>
                            <H4>점심</H4>
                            <AddBtn onClick={() => navigate(`/diet/search`, { state: '점심' })}><FontAwesomeIcon icon={faPlus} /></AddBtn>
                        </AfternoonTitle>
                        <AfternoonContent>
                            {  foodData
                                ? foodData.filter(food => food.state === '점심').map(food => (
                                        <ContentBedge><Gray>{food.text}</Gray></ContentBedge>
                                )) : null
                            }
                        </AfternoonContent>
                        <EveningTitle>
                            <H4>저녁</H4>
                            <AddBtn onClick={() => navigate(`/diet/search`, { state: '저녁' })}><FontAwesomeIcon icon={faPlus} /></AddBtn>
                        </EveningTitle>
                        <EveningContent>
                            {  foodData
                                ? foodData.filter(food => food.state === '저녁').map(food => (
                                        <ContentBedge key={food.id}><Gray>{food.text}</Gray></ContentBedge>
                                )) : null
                            }
                        </EveningContent>
                        <CalculateWrapper>
                            <CalculateBtn onClick={() => navigate(`/diet/calculate`, { state: queryInfo })}>계산하기</CalculateBtn>
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

// const EditBtn = styled.button`
//     display: absolute;
//     float: right;
//     margin-right: 2rem;
//     margin-top: 2rem;
//     font-size: 1.5rem;
//     width: 3rem;
//     height: 3rem;
//     border-radius: 5px;
//     color: #FFFFFF;
//     font-weight: 600;
//     background-color: #FD7E14;
// `;

const Green = styled.span`
    color: #51cf66;
`;

const CalculateWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 2rem;
`;

const CalculateBtn = styled.button`
    font-size: 1.2rem;
    width: auto;
    padding-right: 2rem;
    padding-left: 2rem;
    height: 3rem;
    border-radius: 5px;
    color: #FFFFFF;
    font-weight: 600;
    background-color: #51CF66;
`;

const MorningContent = styled.div`
    display: flex;
    margin-left: 2rem;
    align-items: center;
`;

const AfternoonContent = styled.div`
    display: flex;
    margin-left: 2rem;
    align-items: center;
`;

const EveningContent = styled.div`
    display: flex;
    margin-left: 2rem;
    align-items: center;
    margin-bottom: 3rem;
`;

const Gray = styled.span`
    text-align: center;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    color: #999999;
`;

const ContentBedge = styled.button`
    display: flex;
    font-size: 1.3rem;
    width: auto;
    height: auto;
    padding-right: 0.5rem;
    padding-left: 0.5rem;
    border-radius: 5px;
    color: #000000;
    font-weight: 500;
    background-color: #FFFFFF;
    margin-right: 0.5rem;
`;

// const DelBtn = styled.button`
//     align-items: center;
//     font-size: 1.5rem;
//     width: 2.5rem;
//     height: 2.5rem;
//     border-radius: 5px;
//     color: #FFFFFF;
//     font-weight: 600;
//     background-color: #F03E3E;
//     margin-right: 1rem;
// `;


export default Diet;