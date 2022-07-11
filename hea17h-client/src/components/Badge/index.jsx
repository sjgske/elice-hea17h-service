import React from 'react';
import styled from 'styled-components';

function Badge({ width, fontColor, children }) {
    return (
        <Div width={width} fontColor={fontColor}>
            {children}
        </Div>
    );
}

const Div = styled.div`
    background-color: white;
    width: ${({ width }) => width};
    height: 1.5rem;
    border-radius: 5px;
    font-size: 1rem;
    color: ${({ fontColor }) => fontColor || 'black'};
    font-weight: bold;
    text-align: center;
    line-height: 1.5rem;
`;

export default Badge;
