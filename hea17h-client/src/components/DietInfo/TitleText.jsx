import React from 'react';
import styled from 'styled-components';

function TitleText({ children }) {
    return <Text>{children}</Text>;
}

const Text = styled.p`
    font-size: 1.2rem;
    font-weight: bold;
    margin: 0;
`;

export default TitleText;
