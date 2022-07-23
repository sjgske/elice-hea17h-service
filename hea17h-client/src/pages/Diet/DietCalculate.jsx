/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import TopButton from '../../components/TopButton';
import Nav from '../../components/Nav/index';
import * as Api from '../../api';

function DietCalculate() {
    const navigate = useNavigate();
    const { state } = useLocation();
    console.log(state);

    const [name, setName] = useState('');
    const [totalCalories, setTotalCaloreis] = useState('');
    const [totalCarb, setTotalCarb] = useState('');
    const [totalProtein, setTotalProtein] = useState('');
    const [totalFat, setTotalFat] = useState('');

    const [dietFoods, setDietFoods] = useState([]);
    const [mainImg, setMainImg] = useState('');
    const [foods, setFoods] = useState([]);

    const morningData = state[0];
    const afternoonData = state[1];
    const eveningData = state[2];

    const getMorningData = async () => {
        try {
            const { data } = await Api.get(`/foods/selected?info=${morningData}`);
            setFoods([
                ...foods,
                data
            ]);
            console.log(foods);
        } catch (err) {
            console.log(err);
        }
    };

    const getAfternoonData = async () => {
        try {
            const { data } = await Api.get(`/foods/selected?info=${afternoonData}`);
            setFoods([
                ...foods,
                data
            ]);
            console.log(foods);
        } catch (err) {
            console.log(err);
        }
    };

    const getEveningData = async () => {
        try {
            const { data } = await Api.get(`/foods/selected?info=${eveningData}`);
            setFoods([
                ...foods,
                data
            ]);
            console.log(foods);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getMorningData();
        getAfternoonData();
        getEveningData();
    }, []);

    console.log(foods);

    // const mealGram = (foodList.reduce((total, currentValue) => total + currentValue., 0)).toFixed(2);
    const mealCalories = (foods.reduce((total, currentValue) => total + currentValue.calories, 0)).toFixed(2);
    const mealCarb = (foods.reduce((total, currentValue) => total + currentValue.carbohydrates_total_g, 0)).toFixed(2);
    const mealProtein = (foods.reduce((total, currentValue) => total + currentValue.protein_g, 0)).toFixed(2);
    const mealFat = (foods.reduce((total, currentValue) => total + currentValue.fat_total_g, 0)).toFixed(2);

    const handleCalculate = () => {
        setDietFoods([{ morningData, afternoonData, eveningData }]);
        console.log(dietFoods);
    };

    const savehandler = async () => {
        try {
            const postData = {
                name,
                totalCalories,
                totalCarb,
                totalProtein,
                totalFat,
                dietFoods
            };

            if (name === '') {
                alert("식단 이름을 입력해주세요.");
            } else {
                await Api.post('/diets/addDiet', postData);
                alert("식단 저장을 완료했습니다.");
                navigate('/diet/list');
            }
        } catch(err) {
            console.log('식단 이름 입력 실패', err);
        }
    
        handleCalculate();
    };

    const retryhandler = () => {
        navigate(`/diet`);
    };

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
                            <SearchBox>
                                <SearchInput 
                                    type="search"
                                    placeholder="식단 이름을 입력하세요"
                                    onChange={(e) => {
                                        setName(e.target.value);
                                    }}
                                />
                            </SearchBox>
                        </Div>
                        <Content>
                            <MorningContent>
                                <CircleButton>
                                <Circle>
                                    <CircleImage
                                        src={`${process.env.PUBLIC_URL}/assets/morning.png`}
                                        alt="아침"
                                    />
                                </Circle>
                                <H5>아침</H5>
                                </CircleButton>
                            </MorningContent>
                            {   morningData ?
                                    morningData.map(food =>(
                                        <MorningContent>
                                        <CircleButton>
                                        <Circle>
                                            <CircleImage
                                                src={`${food.image}`}
                                                alt={`${food.name}`}
                                            />
                                        </Circle>
                                        </CircleButton>
                                            <ContentBedge>{food.name}<Gray>{food.serving_size_g}</Gray>g</ContentBedge>
                                            <ContentBedge><Bold>칼로리</Bold><Gray>{food.calories}</Gray>kcal</ContentBedge>
                                            <ContentBedge><Bold>탄수화물</Bold><Gray>{food.carbohydrates_total_g}</Gray>g</ContentBedge>
                                            <ContentBedge><Bold>단백질</Bold><Gray>{food.protein_g}</Gray>g</ContentBedge>
                                            <ContentBedge><Bold>지방</Bold><Gray>{food.fat_total_g}</Gray>g</ContentBedge>
                                        </MorningContent>
                                    )) : null
                            }
                            <AfternoonTitle>
                                <CircleButton>
                                    <Circle>
                                        <CircleImage
                                            src={`${process.env.PUBLIC_URL}/assets/afternoon.png`}
                                            alt="점심"
                                        />
                                    </Circle>
                                    <H5>점심</H5>
                                </CircleButton>
                            </AfternoonTitle>
                            {   afternoonData ?
                                    afternoonData.map(food =>(
                                        <MorningContent>
                                        <CircleButton>
                                        <Circle>
                                            <CircleImage
                                                src={`${food.image}`}
                                                alt={`${food.name}`}
                                            />
                                        </Circle>
                                        </CircleButton>
                                            <ContentBedge>{food.name}<Gray>{food.serving_size_g}</Gray>g</ContentBedge>
                                            <ContentBedge><Bold>칼로리</Bold><Gray>{food.calories}</Gray>kcal</ContentBedge>
                                            <ContentBedge><Bold>탄수화물</Bold><Gray>{food.carbohydrates_total_g}</Gray>g</ContentBedge>
                                            <ContentBedge><Bold>단백질</Bold><Gray>{food.protein_g}</Gray>g</ContentBedge>
                                            <ContentBedge><Bold>지방</Bold><Gray>{food.fat_total_g}</Gray>g</ContentBedge>
                                        </MorningContent>
                                    )) : null
                            }
                            <EveningTitle>
                                <CircleButton>
                                    <Circle>
                                        <CircleImage
                                            src={`${process.env.PUBLIC_URL}/assets/night.png`}
                                            alt="저녁"
                                        />
                                    </Circle>
                                    <H5>저녁</H5>
                                </CircleButton>
                            {   eveningData ?
                                    eveningData.map(food =>(
                                        <MorningContent>
                                        <CircleButton>
                                        <Circle>
                                            <CircleImage
                                                src={`${food.image}`}
                                                alt={`${food.name}`}
                                            />
                                        </Circle>
                                        </CircleButton>
                                            <ContentBedge>{food.name}<Gray>{food.serving_size_g}</Gray>g</ContentBedge>
                                            <ContentBedge><Bold>칼로리</Bold><Gray>{food.calories}</Gray>kcal</ContentBedge>
                                            <ContentBedge><Bold>탄수화물</Bold><Gray>{food.carbohydrates_total_g}</Gray>g</ContentBedge>
                                            <ContentBedge><Bold>단백질</Bold><Gray>{food.protein_g}</Gray>g</ContentBedge>
                                            <ContentBedge><Bold>지방</Bold><Gray>{food.fat_total_g}</Gray>g</ContentBedge>
                                        </MorningContent>
                                    )) : null
                            }
                            </EveningTitle>
                            <TotalWrapper>
                                <TotalCal>
                                    <H6>총 칼로리</H6>
                                    <ContentBedge><Gray>{mealCalories}</Gray>kcal</ContentBedge>
                                </TotalCal>
                                <TotalCarbo>
                                    <H6>총 탄수화물</H6>
                                    <ContentBedge><Gray>{mealCarb}</Gray>kcal</ContentBedge>
                                </TotalCarbo>
                                <TotalPro>
                                    <H6>총 단백질</H6>
                                    <ContentBedge><Gray>{mealProtein}</Gray>kcal</ContentBedge>
                                </TotalPro>
                                <TotalFat>
                                    <H6>총 지방</H6>
                                    <ContentBedge><Gray>{mealFat}</Gray>kcal</ContentBedge>
                                </TotalFat>
                            </TotalWrapper>
                            <CalculateWrapper>
                                <CalculateBtn onClick={savehandler}>저장하기</CalculateBtn>
                                <RetryBtn onClick={retryhandler}>다시하기</RetryBtn>
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

const SearchBox = styled.div`
    display: flex;
    border-bottom: 6px solid #51CF66;
`;

const SearchInput = styled.input`
    font-size: 36px;
    line-height: 48px;
    display: block;
    width: 100%;
    height: 100%;
    border: 0;
    background-color: #fff;
    color: #000000;
    outline: none;
    font-weight: 600;
    margin-bottom: 0.5rem;
`;

const H5 = styled.span`
    font-size: 2rem;
    line-height: 44px;
    margin-bottom: 2rem;
    margin-right: 1rem;
    margin-left: 0.5rem;
    font-weight: 600;
`;

const H6 = styled.span`
    font-size: 1.5rem;
    margin-bottom: 2rem;
    margin-right: 0.5rem;
    margin-left: 0.5rem;
    font-weight: 600;
`;

const Content = styled.div`
    background: #f7f7f9;   
`;

const MorningContent = styled.div`
    display: flex;
    margin-top: 2rem;
    margin-left: 2rem;
    align-items: center;
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
    margin-right: 1rem;
`;

const RetryBtn = styled.button`
    font-size: 1.2rem;
    width: auto;
    padding-right: 2rem;
    padding-left: 2rem;
    height: 3rem;
    border-radius: 5px;
    color: #FFFFFF;
    font-weight: 600;
    background-color: #FD7E14;
`;

const CircleButton = styled.button`
    padding-left: 1.5rem;
    margin-right: 1.5rem;

    &:last-child {
        margin-right: 0;
    }

    span {
        font-weight: 700;
    }

    @media screen and (max-width: 768px) {
        width: 3rem;
        height: 1.5rem;
        background-color: #fd7e14;
        border-radius: 5px;
        color: #fff;
        margin-right: 0;
        margin-bottom: 1rem;
    }
`;

const Circle = styled.div`
    position: relative;
    width: 5rem;
    height: 5rem;
    margin-bottom: 0.5rem;
    background-color: #fff;
    border-radius: 50%;
    transition: all 200ms ease-in;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;
const CircleImage = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 3.5rem;
    border-radius: 50%;
`;

const TotalWrapper = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    padding-bottom: 2rem;
    margin-top: 3rem;
    margin-bottom: 1rem;
`;

const TotalCal = styled.span``;
const TotalCarbo = styled.span``;
const TotalPro = styled.span``;
const TotalFat = styled.span``;

const ContentBedge = styled.button`
    font-size: 1.3rem;
    width: auto;
    height: 2.5rem;
    padding-right: 1rem;
    padding-left: 0.5rem;
    border-radius: 5px;
    color: #000000;
    font-weight: 500;
    background-color: #FFFFFF;
`;

const Gray = styled.span`
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    color: #999999;
`;

const Bold = styled.span`
    font-weight: 600;
`;

export default DietCalculate;