import React from 'react';
import styled from 'styled-components';

function Badge({ fontColor, children }) {
    return <Root fontColor={fontColor}>{children}</Root>;
}

const Root = styled.div`
    background-color: white;
    padding: 0 5px;
    width: fit-content;
    height: fit-content;
    border-radius: 5px;
    font-size: 1rem;
    color: ${({ fontColor }) => fontColor || 'black'};
    font-weight: bold;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 0.8rem;
    }
`;

export default Badge;
