import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';


function DietSearch() {
    return(
        <Container>
            <Main>
                <Header>
                    <Div className="margin-bottom">
                        <H2>
                            Search<Green>.</Green>
                            <br /> 닭가슴살 200g<Orange>.</Orange>
                            <br /> 토마토 5개<Orange>.</Orange>
                        </H2>
                    </Div>
                    <SearchBox>
                        <IconWrapper>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </IconWrapper>
                            <SearchInput 
                            type="search"
                            placeholder="Search"
                            />
                    </SearchBox>
                </Header>
            </Main>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: #f7f7f9;
    padding: 8vw 10vw;
`;

const Main = styled.div`
    position: relative;
    background: #fff;
    padding: 5vw 8vw;
`;

const Header = styled.div`
    position: relative;
    margin-bottom: 6rem;
    z-index: 10;
`;

const Div = styled.div``;

const H2 = styled.h2`
    font-size: 2.5rem;
    line-height: 3.8rem;

    &:first-child {
        margin-bottom: 3rem;
    }
`;

const Green = styled.span`
    color: #51cf66;
`;

const Orange = styled.span`
    color: #FD7E14;
`;

const SearchBox = styled.div`
    display: flex;
    border-bottom: 6px solid #51CF66;
`;

const IconWrapper = styled.span`
    color: #51cf66;
    width: 50px;
    height: 50px;
    font-size: 2.5rem;
    padding-right: 0.5rem;
`;

const SearchInput = styled.input`
    font-size: 36px;
    line-height: 48px;
    display: block;
    width: 100%;
    height: 100%;
    border: 0;
    background-color: #fff;
    color: #000000;
    outline: none;
    font-weight: 600;
    margin-bottom: 0.5rem;
`;

export default DietSearch;