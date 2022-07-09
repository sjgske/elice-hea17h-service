import React from 'react';
import styled from 'styled-components';

function Badge({ width, children }) {
    return <Div width={width}>{children}</Div>;
}

const Div = styled.div`
    background-color: white;
    width: ${({ width }) => width};
    height: 1.5rem;
    border-radius: 5px;
    font-size: 1rem;
    font-weight: bold;
    text-align: center;
    line-height: 1.5rem;
`;

export default Badge;
