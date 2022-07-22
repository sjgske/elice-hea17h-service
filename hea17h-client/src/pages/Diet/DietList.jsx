import React from 'react';
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

function DietList() {
    return (
        <>
            <Nav />
            <Container>
                <H1>식단 목록</H1>
                <Main>
                    <Search>
                        <H4>검색 기간</H4>
                        <InputGroup>
                            <input
                                type="date"
                                id="start"
                                value="2022-07-01"
                                onChange={() => {}}
                            />
                            <FontAwesomeIcon icon={faCalendarDays} />
                        </InputGroup>
                        <span>~</span>
                        <InputGroup>
                            <input
                                type="date"
                                id="end"
                                value="2022-07-08"
                                onChange={() => {}}
                            />
                            <FontAwesomeIcon icon={faCalendarDays} />
                        </InputGroup>
                        <Button width="40px" color="#FD7E14">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </Button>
                    </Search>

                    <DietBox
                        date="2022.07.05"
                        theme="헬스장 가기 전에 먹기 좋은 식단"
                        calorie="1,443"
                    />

                    <DietBox
                        date="2022.07.06"
                        theme="다이어트 최고, 지중해식 식단"
                        calorie="1,329"
                    />
                </Main>
            </Container>

            <TopButton />
        </>
    );
}

export default DietList;
