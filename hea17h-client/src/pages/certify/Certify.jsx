import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Box from '../../components/Box';
import Button from '../../components/Button';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #f7f7f9;
`;

const Main = styled.div`
    width: 42vw;
    height: 100%;
    padding: 0 4rem;
    background-color: #fff;
`;

const H1 = styled.h1`
    font-weight: 700;
    font-size: 1.7rem;
    margin-bottom: 0.5rem;
    letter-spacing: -0.05rem;
`;

const P = styled.p`
    color: #999999;
    font-size: 0.9rem;
`;

const Span = styled.span`
    font-weight: 700;
    font-size: 0.9rem;
`;

const Div = styled.div``;

const SpaceRight = styled.div`
    * {
        margin-right: 1.2rem;
    }

    *:last-child {
        margin: 0;
    }
`;

const Img = styled.img`
    max-height: 150px;
    margin: 0 0 0.5rem;
`;

const Circle = styled.div`
    position: relative;
    width: 50px;
    height: 50px;
    margin-bottom: 0.5rem;
    background-color: #fff;
    border-radius: 50%;

    svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 2rem;
        color: #51cf66;
    }
`;

const SubmitBox = styled(Box)`
    cursor: pointer;
    margin-bottom: 1.5rem;
`;

function Certify() {
    return (
        <Container>
            <Main className="flex-column center">
                <Div className="margin-bottom">
                    <H1>취득하신 자격증을 촬영하여 업로드 합니다.</H1>
                    <P>
                        * 자격증의 문서번호가 식별 가능하도록 이미지를
                        첨부해주세요
                    </P>
                    <P>
                        * 면허증명서의 양식은 다를 수 있습니다. 다만 예시 사진과
                        같이 주요 내용은 같아야 합니다.
                    </P>
                    <P>
                        * 여러분의 소중한 개인정보 보호를 위하여 인증에 필요한
                        최소한의 정보를 수집하고 있습니다. 본인의 이름과 얼굴
                        사진은 가리고 면허증을 촬영해주세요.
                    </P>
                </Div>

                <SpaceRight className="flex margin-bottom">
                    <Div className="flex-column">
                        <Img
                            src={`${process.env.PUBLIC_URL}/assets/certify1.png`}
                            alt="생활스포츠지도사"
                        />
                        <Span>생활스포츠지도사</Span>
                    </Div>
                    <Div className="flex-column">
                        <Img
                            src={`${process.env.PUBLIC_URL}/assets/certify2.png`}
                            alt="체형관리사"
                        />
                        <Span>체형관리사</Span>
                    </Div>
                    <Div className="flex-column">
                        <Img
                            src={`${process.env.PUBLIC_URL}/assets/certify3.png`}
                            alt="국제필라테스자격증"
                        />
                        <Span>국제필라테스자격증</Span>
                    </Div>
                </SpaceRight>

                <SubmitBox
                    width="95%"
                    height="12rem"
                    color="#F5F5F5"
                    className="flex center"
                >
                    <Circle>
                        <FontAwesomeIcon icon={faPlus} />
                    </Circle>
                    <input type="file" className="hidden" />
                </SubmitBox>

                <Button width="10rem" color="#51cf66">
                    제출하기
                </Button>
            </Main>
        </Container>
    );
}

export default Certify;
