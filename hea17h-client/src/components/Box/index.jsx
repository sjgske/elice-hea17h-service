import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

Box.propTypes = {
    width: PropTypes.string.isRequired,
    height: PropTypes.string,
    color: PropTypes.string,
    borderColor: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};

Box.defaultProps = {
    height: 'auto',
    color: '',
    borderColor: '',
    className: '',
};

const Root = styled.div`
    background-color: ${({ color }) => color};
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    border-radius: 5px;
    border: ${({ borderColor }) =>
        borderColor ? `1px solid ${borderColor}` : 0};
`;

export default Box;
