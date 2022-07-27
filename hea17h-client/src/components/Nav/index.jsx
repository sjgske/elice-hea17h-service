import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCalculator,
    faList,
    faComment,
    faChalkboardUser,
    faCircleUser,
    faUserPlus,
    faLock,
    faLockOpen,
} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import * as Api from '../../api';

function Nav() {
    const [isExpert, setIsExpert] = useState(false);
    const token = localStorage.getItem('userToken');

    const getUserRole = async () => {
        const { data } = await Api.get('/users/getUser');
        if (data.role === 'expert') {
            setIsExpert(true);
        }
    };

    useEffect(() => {
        getUserRole();
    }, []);

    return (
        <Container>
            <LeftSide>
                <LogoLink to="/">
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
                    {isExpert ? (
                        <NavLink to="/coaching">
                            <StyledFontAwesomeIcon icon={faChalkboardUser} size="xl" />
                            <SubMenu>코칭</SubMenu>
                        </NavLink>
                    ) : (
                        ''
                    )}
                </Menu>
            </LeftSide>
            <RightSide>
                <LoginButton>
                    {token !== null ? (
                        <NavLink
                            to="/"
                            onClick={() => localStorage.removeItem('userToken')}
                        >
                            <StyledFontAwesomeIcon
                                icon={faLockOpen}
                                size="xl"
                            />
                            <SubMenu>로그아웃</SubMenu>
                        </NavLink>
                    ) : (
                        <NavLink to="/login">
                            <StyledFontAwesomeIcon icon={faLock} size="xl" />
                            <SubMenu>로그인</SubMenu>
                        </NavLink>
                    )}
                </LoginButton>

                {token !== null ? (
                    <NavLink to="/profile" style={{ color: 'white' }}>
                        <StyledFontAwesomeIcon
                            icon={faCircleUser}
                            size="xl"
                            style={{ color: '#fd7e14' }}
                        />
                        <SignupButton style={{ backgroundColor: '#fd7e14' }}>
                            <SubMenu style={{ color: 'white' }}>
                                마이페이지
                            </SubMenu>
                        </SignupButton>
                    </NavLink>
                ) : (
                    <NavLink to="/signup">
                        <StyledFontAwesomeIcon icon={faUserPlus} size="xl" />
                        <SignupButton>
                            <SubMenu style={{ color: '#fd7e14' }}>
                                회원가입
                            </SubMenu>
                        </SignupButton>
                    </NavLink>
                )}
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

    @media screen and (max-width: 768px) {
        width: 80px;
    }
`;

const Menu = styled.div`
    display: flex;

    line-height: 80px;
`;

const SubMenu = styled.div`
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

const LoginButton = styled.div`
    margin: 0 1rem;

    @media screen and (max-width: 768px) {
        margin-right: 0.1rem;
        word-break: break-all;
    }
`;

const SignupButton = styled.button`
    width: 6rem;
    height: 40px;

    color: #fd7e14;
    background-color: white;
    border: 1px solid transparent;
    border-radius: 30px;

    font-size: 1rem;
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

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    color: #3cb371;
    display: none;

    @media screen and (max-width: 768px) {
        display: inline;
        margin: 0 8px;
        font-size: 16px;
    }
`;

export default Nav;
