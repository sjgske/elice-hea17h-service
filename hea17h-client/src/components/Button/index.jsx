import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';

function Button({ width, color, fontColor, children, onClick }) {
    return (
        <Div
            width={width}
            color={color}
            fontColor={fontColor}
            onClick={onClick}
        >
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
    transition: background-color 200ms ease;

    &:hover {
        cursor: pointer;
        background-color: ${({ color }) => darken(0.1, color)};
    }

    @media (max-width: 768px) {
        width: 7rem;
        font-size: 0.8rem;
    }
`;

export default Button;
