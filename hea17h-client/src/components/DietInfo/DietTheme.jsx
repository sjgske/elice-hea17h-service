import React from 'react';
import styled from 'styled-components';
import Box from '../Box';
import Badge from '../Badge';

function DietTheme({ date, theme, calorie, children }) {
    return (
        <DietThemeBox width="75%" height="8rem" color="#faf3e3">
            <DietInfo>
                <Badge width="6rem">{date}</Badge>
                <h3>{theme}</h3>
                <p>{calorie} kcal</p>
            </DietInfo>
            {children}
        </DietThemeBox>
    );
}

const DietThemeBox = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 30px;

    @media (max-width: 768px) {
        flex-direction: column;
        min-height: 9rem;
    }
`;

const DietInfo = styled.div`
    width: 100%;
    height: 8rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 7px;

    & > p {
        font-weight: bold;
        color: #999999;
    }

    @media (max-width: 768px) {
        font-size: 0.7rem;
        margin-bottom: 10px;
    }
`;

export default DietTheme;
