import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMagnifyingGlass,
    faCalendarDays,
} from '@fortawesome/free-solid-svg-icons';
import Button from '../Button';
import { toStringDate } from '../../utils/UsefulFunction';

function ControlDate({ data, setFiltered }) {
    const getCurDate = useMemo(() => {
        const curDate = new Date();
        const firstDate = new Date(
            curDate.getFullYear(),
            curDate.getMonth(),
            1,
        );
        return { curDate, firstDate };
    }, []);

    const { curDate, firstDate } = getCurDate;

    const [startDate, setStartDate] = useState(toStringDate(firstDate));
    const [endDate, setEndDate] = useState(toStringDate(curDate));

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

    return (
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
                    onChange={e => setEndDate(e.target.value)}
                />
                <FontAwesomeIcon icon={faCalendarDays} />
            </InputGroup>
            <Button
                width="40px"
                color="#FD7E14"
                onClick={() => filterByDate(startDate, endDate)}
            >
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Button>
        </Search>
    );
}

ControlDate.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    setFiltered: PropTypes.func.isRequired,
};

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

const H4 = styled.h4`
    font-size: 1.3rem;
    margin-right: 1rem;
`;

export default React.memo(ControlDate);
