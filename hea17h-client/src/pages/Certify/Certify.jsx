import React from 'react';
import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import Button from '../../components/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    margin: 0;
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

const FormBox = styled.form`
    width: 95%;
    padding: 1.2rem 0;
    margin-bottom: 1.5rem;
    background-color: #f5f5f5;
    border-radius: 5px;
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

                <FormBox className="flex-column center">
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                        style={{ width: '20rem' }}
                    >
                        <Form.Label>자격증 이름</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="생활스포츠지도사 2급"
                        />
                    </Form.Group>
                    <Form.Group
                        controlId="formFile"
                        className="mb-4"
                        style={{ width: '20rem' }}
                    >
                        <Form.Label>자격증 파일</Form.Label>
                        <Form.Control type="file" />
                    </Form.Group>
                    <Button type="submit" width="10rem" color="#51cf66">
                        제출하기
                    </Button>
                </FormBox>
            </Main>
        </Container>
    );
}

export default Certify;
