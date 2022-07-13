import styled from 'styled-components';

const Div = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    padding: 3rem;
    background-color: #fff;
    border-radius: 5px;
    z-index: 30;
`;

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(26, 26, 26, 0.5);
    z-index: 20;
`;

function Modal({ width, height, className, children }) {
    return (
        <div className={className}>
            <Div width={width} height={height}>
                {children}
            </Div>
            <Background />
        </div>
    );
}

export default Modal;
