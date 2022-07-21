import React from 'react';
import styled from 'styled-components';

function Loading() {
    return <Spinner />;
}

const Spinner = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;

    @keyframes spinner {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    &,
    spinner {
        box-sizing: border-box;
        position: absolute;
        top: 50%;
        left: 50%;
        width: 64px;
        height: 64px;
        margin-top: -32px;
        margin-left: -32px;
        border-radius: 50%;
        border: 8px solid transparent;
        border-top-color: #fd7e14;
        border-bottom-color: #fd7e14;
        animation: spinner 0.8s ease infinite;
    }
`;

export default Loading;
