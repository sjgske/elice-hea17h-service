import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import TopButton from '../../components/TopButton';
import Nav from '../../components/Nav';
import DietBox from '../../components/DietList/DietBox';
import Loading from '../../components/Loading';
import ControlDate from '../../components/DietList/ControlDate';
import * as Api from '../../api';
import { htmlStringDate, separateThousand } from '../../utils/UsefulFunction';

function DietList() {
    const [data, setData] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [httpStatusCode, setHttpStatusCode] = useState(0);
    const [loading, setLoading] = useState(false);

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
            const res = await Api.get('/diets');
            const sortedData = await res.data.payLoad.sort(
                (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
            );
            setData(sortedData);
            setFiltered(sortedData);
            setLoading(false);
        } catch (err) {
            setLoading(false);
            setHttpStatusCode(err.response.status);
        }
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
                    <ControlDate data={data} setFiltered={setFiltered} />

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

export default DietList;
