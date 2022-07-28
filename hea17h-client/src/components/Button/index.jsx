import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import PropTypes from 'prop-types';

function Button({ width, color, fontColor, children, onClick }) {
    return (
        <Root
            width={width}
            color={color}
            fontColor={fontColor}
            onClick={onClick}
        >
            {children}
        </Root>
    );
}

Button.propTypes = {
    width: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    fontColor: PropTypes.string,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
};

Button.defaultProps = {
    fontColor: 'white',
    onClick: null,
};

const Root = styled.button`
    display: block;
    background-color: ${({ color }) => color};
    width: ${({ width }) => width};
    height: 2.5rem;
    border-radius: 5px;
    color: ${({ fontColor }) => fontColor};
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
