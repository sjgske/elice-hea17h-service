import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMagnifyingGlass,
    faCalendarDays,
} from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/Button';
import TopButton from '../../components/TopButton';
import Nav from '../../components/Nav';
import DietBox from '../../components/DietInfo/DietThemeWithButton';
import Loading from '../../components/Loading';
import * as Api from '../../api';
import {
    htmlStringDate,
    toStringDate,
    separateThousand,
} from '../../utils/UsefulFunction';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: #f7f7f9;
    padding: 8vw 10vw;
`;

const Main = styled.div`
    background: #fff;
    padding: 5vw 8vw;
`;

const Search = styled.div`
    display: flex;
    align-items: center;
    height: 2.5rem;
    margin-bottom: 3rem;

    span {
        margin-right: 12px;
    }

    @media screen and (max-width: 768px) {
        h4 {
            display: none;
        }

        button {
            width: 40px;
        }
    }
`;

const InputGroup = styled.div`
    position: relative;

    input {
        width: 9rem;
        height: 2.5rem;
        margin-right: 12px;
        padding: 8px 14px;
        border: 1px solid #d9d9d9;
        font-weight: 700;
        text-align: end;
    }

    input[type='date']::-webkit-inner-spin-button,
    input[type='date']::-webkit-calendar-picker-indicator {
        position: absolute;
        top: 12px;
        left: 14px;
        width: 15px;
        z-index: 10;
        opacity: 0;
    }

    span {
        margin-right: 12px;
    }

    svg {
        position: absolute;
        top: 12px;
        left: 14px;
    }

    @media screen and (max-width: 768px) {
        input {
            width: 23vw;
            margin-right: 0.5rem;
        }

        span {
            margin-right: 0.5rem;
        }
    }
`;

const H1 = styled.h1`
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
    margin-bottom: 40px;
`;

const H4 = styled.h4`
    font-size: 1.3rem;
    margin-right: 1rem;
`;

const Div = styled.div`
    width: 100%;
    height: 13rem;
`;

function DietList() {
    const [data, setData] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [httpStatusCode, setHttpStatusCode] = useState(0);
    const [loading, setLoading] = useState(false);

    const curDate = new Date();
    const firstDate = new Date(curDate.getFullYear(), curDate.getMonth(), 1);
    const [startDate, setStartDate] = useState(toStringDate(firstDate));
    const [endDate, setEndDate] = useState(toStringDate(curDate));

    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem('userToken')) {
            alert('로그인 후 이용해주세요.');
            navigate('/login');
        }
    });

    const getDiet = async () => {
        try {
            setLoading(true);
            const res = await Api.get('/diets/getDiet');
            const sortedData = await res.data.payLoad.sort(
                (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
            );
            setData(sortedData);
            setFiltered(sortedData);
            console.log(sortedData);
            setLoading(false);
        } catch (err) {
            setLoading(false);
            setHttpStatusCode(err.response.status);
            console.log(err);
        }
    };

    const filterByDate = () => {
        const filteredData = data.filter(el => {
            const createdDate = new Date(el.createdAt).getTime();
            return (
                createdDate >= new Date(startDate).getTime() &&
                createdDate < new Date(endDate).getTime() + 1000 * 60 * 60 * 15
            );
        });
        setFiltered(filteredData);
    };

    useEffect(() => {
        getDiet();
    }, []);

    return (
        <>
            <Nav />
            {loading ? <Loading /> : null}
            <Container>
                <H1>식단 목록</H1>
                <Main>
                    <Search>
                        <H4>검색 기간</H4>
                        <InputGroup>
                            <input
                                type="date"
                                id="start"
                                value={startDate}
                                onChange={e => setStartDate(e.target.value)}
                            />
                            <FontAwesomeIcon icon={faCalendarDays} />
                        </InputGroup>
                        <span aria-hidden>~</span>
                        <InputGroup>
                            <input
                                type="date"
                                id="end"
                                value={endDate}
                                onChange={e => {
                                    setEndDate(e.target.value);
                                }}
                            />
                            <FontAwesomeIcon icon={faCalendarDays} />
                        </InputGroup>
                        <Button
                            width="40px"
                            color="#FD7E14"
                            onClick={() => {
                                filterByDate();
                            }}
                        >
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </Button>
                    </Search>

                    {httpStatusCode === 404 || !filtered.length ? (
                        <Div className="flex">
                            <H4>저장된 식단이 없습니다.</H4>
                        </Div>
                    ) : (
                        filtered.map(diet => (
                            <DietBox
                                key={diet._id}
                                id={diet._id}
                                date={htmlStringDate(diet.createdAt)}
                                theme={diet.name}
                                calorie={separateThousand(diet.totalCalories)}
                                comment={diet.comment}
                                dietFoods={diet.dietFoods}
                            />
                        ))
                    )}
                </Main>
            </Container>

            <TopButton />
        </>
    );
}

export default DietList;
