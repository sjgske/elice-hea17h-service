import React from 'react';
import styled from 'styled-components';

function Button({ width, color, fontColor, children }) {
    return (
        <Div width={width} color={color} fontColor={fontColor}>
            {children}
        </Div>
    );
}

const Div = styled.div`
    background-color: ${({ color }) => color};
    width: ${({ width }) => width};
    height: 2.5rem;
    border-radius: 5px;
    color: ${({ fontColor }) => fontColor || 'white'};
    font-size: 1rem;
    font-weight: bold;
    line-height: 2.5rem;
    text-align: center;

    &:hover {
        cursor: pointer;
    }

    @media (max-width: 768px) {
        width: 7rem;
        font-size: 0.8rem;
    }
`;

export default Button;
