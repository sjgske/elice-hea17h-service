import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import TopButton from '../../components/TopButton';
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
    
    // const navigate = useNavigate();
    // const savehandler = () => {
    //     navigate(`/diet/list`);
    // };
    // const retryhandler = () => {
    //     navigate(`/diet`);
    // };

    return(
        <>
        <Nav />
        <Container>
            <H1>식단 계산</H1>
            <Main>
                <Header>
                    <Div className="margin-bottom">
                        <H2>
                            코칭을 받고 싶다면
                            <br /> 내 식단 목록에 추가해 보세요
                            <Green>.</Green>
                        </H2>
                        
                    </Div>
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

const Green = styled.span`
    color: #51cf66;
`;

export default DietCalculate;