import React from 'react';
import styled from 'styled-components';

function Box({ width, height, color, borderColor, children }) {
    return (
        <Div
            width={width}
            height={height}
            color={color}
            borderColor={borderColor}
        >
            {children}
        </Div>
    );
}

const Div = styled.div`
    background-color: ${({ color }) => color};
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    border-radius: 5px;
    border: ${({ borderColor }) => `1px solid ${borderColor}` || 0};
`;

export default Box;
