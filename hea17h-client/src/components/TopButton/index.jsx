import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const useScroll = initialValue => {
    const [isActive, setIsActive] = useState(initialValue);

    const listener = () =>
        window.pageYOffset > 30 ? setIsActive(true) : setIsActive(false);

    useEffect(() => {
        window.addEventListener('scroll', listener);
        return () => {
            window.removeEventListener('scroll', listener);
        };
    });
    return { isActive };
};

useScroll.defaultProps = {
    initialValue: false,
};

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 50px;
    right: 50px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    font-size: 2rem;
    background-color: #51cf66;
    color: #fff;
    transition: all 200ms ease-in;
    opacity: 0;

    &:hover,
    &:active {
        background-color: #3cb371;
    }

    &.active {
        opacity: 100;
        cursor: pointer;
    }
`;

function TopButton() {
    const { isActive } = useScroll(false);
    return (
        <Button
            type="button"
            id="TopButton"
            className={isActive ? 'active' : null}
            onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
        >
            <FontAwesomeIcon icon={faArrowUp} />
        </Button>
    );
}

export default TopButton;
