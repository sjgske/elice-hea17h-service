import React from 'react';
import styled from 'styled-components';

function Button({ width, color, children }) {
    return (
        <Div width={width} color={color}>
            {children}
        </Div>
    );
}

const Div = styled.div`
    background-color: ${({ color }) => color};
    width: ${({ width }) => width};
    height: 2.5rem;
    border-radius: 5px;
    color: white;
    font-size: 1rem;
    font-weight: bold;
    line-height: 2.5rem;
    text-align: center;

    &:hover {
        cursor: pointer;
    }
`;

export default Button;
