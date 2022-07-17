import React from 'react';
import styled from 'styled-components';

function TitleText({ children }) {
    return <Text>{children}</Text>;
}

const Text = styled.p`
    font-size: 1.2rem;
    font-weight: bold;
    margin: 0;

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

export default TitleText;
