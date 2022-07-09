import React from 'react';
import styled from 'styled-components';

function Box({ width, height, color, children }) {
    return (
        <Div width={width} height={height} color={color}>
            {children}
        </Div>
    );
}

const Div = styled.div`
    background-color: ${({ color }) => color};
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    border-radius: 5px;
`;

export default Box;
