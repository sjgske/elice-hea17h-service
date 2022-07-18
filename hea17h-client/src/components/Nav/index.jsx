import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCalculator,
    faList,
    faComment,
    faChalkboardUser,
    faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

function Nav() {
    return (
        <Container>
            <LeftSide>
                <LogoLink to="/">
                    {/* HEA<span style={{ color: '#FD7E14' }}>17</span>H. */}
                    <Logo
                        src={`${process.env.PUBLIC_URL}/assets/logo.png`}
                        alt="logo"
                    />
                </LogoLink>
                <Menu>
                    <NavLink to="/diet">
                        <StyledFontAwesomeIcon icon={faCalculator} size="xl" />
                        <SubMenu>식단계산</SubMenu>
                    </NavLink>
                    <NavLink to="/diet/list">
                        <StyledFontAwesomeIcon icon={faList} size="xl" />
                        <SubMenu>식단 목록</SubMenu>
                    </NavLink>
                    <NavLink to="/comment">
                        <StyledFontAwesomeIcon icon={faComment} size="xl" />
                        <SubMenu>코멘트</SubMenu>
                    </NavLink>
                    <NavLink to="/coaching">
                        <StyledFontAwesomeIcon
                            icon={faChalkboardUser}
                            size="xl"
                        />
                        <SubMenu>코칭</SubMenu>
                    </NavLink>
                </Menu>
            </LeftSide>
            <RightSide>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <LoginButton>
                    <NavLink to="/login">로그인</NavLink>
                </LoginButton>
                <SignupButton>
                    <NavLink to="/signup">회원가입</NavLink>
                </SignupButton>
            </RightSide>
        </Container>
    );
}

const Container = styled.div`
    margin: 0 auto;
    width: 100%;
    height: 80px;

    background-color: #faf3e3;

    display: flex;
`;

const LeftSide = styled.div`
    width: 65%;

    display: flex;
`;

const LogoLink = styled(NavLink)`
    display: flex;
    align-items: center;
    margin: 0 20px;
`;

const Logo = styled.img`
    width: 120px;
`;

const Menu = styled.div`
    display: flex;

    line-height: 80px;
`;

const SubMenu = styled.text`
    margin: 0 10px;

    color: #3cb371;
    font-weight: 700;

    @media screen and (max-width: 768px) {
        position: absolute;
        width: 1px;
        height: 1px;
        margin: -1px;
        overflow: hidden;
        clip-path: polygon(0 0, 0 0, 0 0);
    }
`;

const RightSide = styled.div`
    width: 35%;
    display: flex;
    justify-content: right;
    margin: 0 20px;
    align-items: center;

    color: #3cb371;
    font-weight: 700;
    line-height: 80px;

    @media screen and (max-width: 768px) {
        margin: 0 10px;
    }
`;

const LoginButton = styled.text`
    margin: 0 1rem;

    @media screen and (max-width: 768px) {
        margin-right: 0.1rem;
    }
`;

const SignupButton = styled.button`
    width: 90px;
    height: 40px;

    color: #fd7e14;
    background-color: white;
    border: 1px solid transparent;
    border-radius: 30px;

    font-weight: 700;

    @media screen and (max-width: 768px) {
        width: 80px;
        height: 30px;
    }
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    color: #3cb371;
    display: none;

    @media screen and (max-width: 768px) {
        display: inline;
        margin: 0 8px;
    }
`;

export default Nav;
