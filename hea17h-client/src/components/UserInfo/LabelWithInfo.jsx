import React from 'react';
import styled from 'styled-components';
import Box from '../Box';

function LabelWithInfo({ label, info }) {
    return (
        <Root>
            <p>{label}</p>
            <InfoBox width="10rem" height="1.5rem" borderColor="#ECECEC">
                {info}
            </InfoBox>
        </Root>
    );
}

const Root = styled.div`
    margin-top: 10px;

    & > p {
        margin-bottom: 5px;
    }

    @media (max-width: 768px) {
        font-size: 0.8rem;
    }
`;

const InfoBox = styled(Box)`
    font-size: 0.8rem;
    color: #999999;
    padding-left: 7px;
    line-height: 1.5rem;
`;

export default LabelWithInfo;
