import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Nav from '../../components/Nav/index';
import * as Api from '../../api';
import {blankToQuery} from '../../utils/UsefulFunction';

function DietCalculate() {
    const { state } = useLocation();
    console.log(state); // state가 배열이면 합치는 과정 거쳐야함
    
    // const [moringData, setMoringData] = useState('');
    // const [afternoonData, setAfternoonData] = useState('');
    // const [eveningData, setEveningData] = useState('');

    const [foodList, setFoodList] = useState([]);
    const dataQuery = blankToQuery(`1 바나나 50g 시금치`);
    // const postQuery = blankToQuery(dataQuery);

    const fetchData = async () => {
    try{
        const {data} = await Api.get(`/foods/selected?info=${dataQuery}`);
        setFoodList(data);
        console.log(foodList);
    } catch(err) {
        console.log(err);
        console.log(err.message);
    }};

    useEffect(()=>{
        fetchData();
      }, []);
    
    // const [callWords, setCallWords] = useState(
    //     JSON.parse(localStorage.getItem('callWords') || '[]'),
    // );

    // const handleAddquery = (query) => {
    //     console.log('query', query);
    //     const newCallWords = {
    //         id: Date.now(),
    //         callWords,
    //     };
    //     setCallWords([newCallWords, ...newCallWords])
    // };

    console.log(foodList);
    
    const navigate = useNavigate();
    const savehandler = () => {
        navigate(`/diet/list`);
    };
    const retryhandler = () => {
        navigate(`/diet`);
    };

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
                        <MoringContainer>
                            <MorningTitle>아침</MorningTitle>
                            <MeatTitle>고기</MeatTitle>
                            <ContentBtn>닭가슴살 100g</ContentBtn>
                        </MoringContainer>
                        <AfternoonContainer>
                            <AfternoonTitle>점심</AfternoonTitle>
                            <VegeTitle>채소</VegeTitle>
                            <ContentBtn>방울토마토 3개</ContentBtn>
                        </AfternoonContainer>
                        <EveningContainer>
                            <EveningTitle>저녁</EveningTitle>
                            <NutsTitle>견과</NutsTitle>
                            <ContentBtn>아몬드 70g</ContentBtn>
                        </EveningContainer>
                        <BtnContainer>
                            <CalculateBtn onClick={savehandler}>저장하기</CalculateBtn>
                            <br />
                            <RetryBtn onClick={retryhandler}>다시해보기</RetryBtn>
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

    white-space: pre-wrap;
`;

const RetryBtn = styled.button`
    height: 2rem;
    width: 4rem;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    background: #fd7e14;
    border-radius: 5px;
    border: solid 1px #fd7e14;
`;

const CalculateInfo = styled.p`
    align-items: center;
    text-align: center;
    color: #999999;
`;

export default DietCalculate;