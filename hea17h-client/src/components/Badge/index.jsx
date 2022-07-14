import React from 'react';
import styled from 'styled-components';

function Badge({ width, fontColor, className, children }) {
    return (
        <Div width={width} fontColor={fontColor} className={className}>
            {children}
        </Div>
    );
}

const Div = styled.div`
    background-color: white;
    padding: 0 5px;
    max-width: ${({ width }) => width || 'fit-content'};
    min-height: 1.5rem;
    border-radius: 5px;
    font-size: 1rem;
    color: ${({ fontColor }) => fontColor || 'black'};
    font-weight: bold;
    text-align: center;
    line-height: 1.5rem;

    @media (max-width: 768px) {
        font-size: 0.7rem;
    }
`;

export default Badge;
