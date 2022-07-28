import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function Badge({ fontColor, children }) {
    return <Root fontColor={fontColor}>{children}</Root>;
}

Badge.propTypes = {
    fontColor: PropTypes.string,
    children: PropTypes.node.isRequired,
};

Badge.defaultProps = {
    fontColor: 'black',
};

const Root = styled.div`
    background-color: white;
    padding: 0 5px;
    width: fit-content;
    height: fit-content;
    border-radius: 5px;
    font-size: 1rem;
    color: ${({ fontColor }) => fontColor};
    font-weight: bold;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 0.8rem;
    }
`;

export default Badge;
