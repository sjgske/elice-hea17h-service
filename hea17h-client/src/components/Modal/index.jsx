import styled from 'styled-components';

const Div = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    background-color: #fff;
    border-radius: 5px;
    z-index: 100;
`;

const Background = styled.div`
    width: 100%;
    height: 100vh;
    background-color: rgba(26, 26, 26, 0.5);
`;

function Modal({ width, height, children }) {
    return (
        <>
            <Div width={width} height={height}>
                {children}
            </Div>
            <Background />
        </>
    );
}

export default Modal;
