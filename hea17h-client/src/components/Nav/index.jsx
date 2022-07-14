import React from 'react';
import styled from 'styled-components';
import { BiSearchAlt2 } from 'react-icons/bi';
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
                    <SubMenu>
                        <NavLink to="/diet">식단 계산</NavLink>
                    </SubMenu>
                    <SubMenu>
                        <NavLink to="/diet/list">식단 목록</NavLink>
                    </SubMenu>
                    <SubMenu>
                        <NavLink to="/comment">코멘트</NavLink>
                    </SubMenu>
                    <SubMenu>
                        <NavLink to="/coaching">코칭</NavLink>
                    </SubMenu>
                </Menu>
            </LeftSide>
            <RightSide>
                <BiSearchAlt2 size="35px" />
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
    position: fixed;
    top: 0;
    left: 0;
    z-index: 30;
    margin: 0 auto;
    width: 100%;
    height: 80px;

    background-color: #faf3e3;

    display: flex;
`;

const LeftSide = styled.div`
    width: 50%;

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

const SubMenu = styled.div`
    margin: 0 10px;

    color: #3cb371;
    font-weight: 700;
`;

const RightSide = styled.div`
    width: 50%;
    display: flex;
    justify-content: right;
    margin: 0 20px;
    align-items: center;

    color: #3cb371;
    font-weight: 700;
    line-height: 80px;
`;

const LoginButton = styled.div`
    margin: 0 20px;
`;

const SignupButton = styled.button`
    width: 90px;
    height: 40px;

    color: #fd7e14;
    background-color: white;
    border: 1px solid transparent;
    border-radius: 30px;

    font-weight: 700;
`;

export default Nav;
