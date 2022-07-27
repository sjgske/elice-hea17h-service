import React from 'react';
import styled from 'styled-components';

function Box({ width, height, color, borderColor, className, children }) {
    return (
        <Root
            width={width}
            height={height}
            color={color}
            borderColor={borderColor}
            className={className}
        >
            {children}
        </Root>
    );
}

const Root = styled.div`
    background-color: ${({ color }) => color};
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    border-radius: 5px;
    border: ${({ borderColor }) => `1px solid ${borderColor}` || 0};
`;

export default Box;
