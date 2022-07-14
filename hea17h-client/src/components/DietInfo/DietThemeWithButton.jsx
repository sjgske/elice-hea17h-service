import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Box from '../Box';
import Badge from '../Badge';
import Button from '../Button';
import Modal from '../Modal';

const Container = styled(Box)`
    padding: 2rem 2.5rem;
    margin: 0 auto 30px;

    @media screen and (max-width: 1024px) {
        width: 100%;
    }
`;

const Div = styled.div``;

const SpaceBottom = styled.div`
    * {
        margin-bottom: 0.5rem;
    }

    *:last-child {
        margin: 0;
    }
`;

const SpaceRight = styled.div`
    * {
        margin-right: 1.2rem;
    }

    *:last-child {
        margin: 0;
    }
`;

const H3 = styled.h3`
    font-size: 1.3rem;
    margin-right: 1rem;
`;

const H4 = styled.h4`
    font-size: 1.3rem;
    margin-right: 1rem;
`;

const Calorie = styled.span`
    font-weight: 600;
    strong {
        color: #999999;
    }
`;

const CircleButton = styled.button`
    margin-right: 1.5rem;

    &:last-child {
        margin-right: 0;
    }

    span {
        font-weight: 700;
    }

    &:hover div {
        transform: scale(1.1);
    }
`;

const Circle = styled.div`
    position: relative;
    width: 80px;
    height: 80px;
    margin-bottom: 0.5rem;
    background-color: #fff;
    border-radius: 50%;
    transition: all 200ms ease-in;
`;

const CircleImage = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70px;
`;

const DietTitle = styled.h3`
    font-size: 1.3rem;
    margin-right: 1rem;
    flex-grow: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const Grey = styled.p`
    font-size: 1.3rem;
    font-weight: 700;
    color: #999999;
`;

const CommentBox = styled(Box)`
    padding: 1rem;
    flex-grow: 1;
`;

const IconButton = styled.button`
    position: absolute;
    top: 1.5rem;
    right: 2rem;
    font-size: 1.2rem;
`;

function DietBox({ date, theme, calorie }) {
    const [isActive, setIsActive] = useState(false);
    const [show, setShow] = useState(false);

    return (
        <>
            <Container
                width="60vw"
                color="#faf3e3"
                className="flex-space-between"
            >
                <SpaceBottom>
                    <Badge>{date}</Badge>
                    <DietTitle>{theme}</DietTitle>
                    <Calorie>
                        <strong>{calorie}</strong> kcal
                    </Calorie>
                </SpaceBottom>
                <Div>
                    <CircleButton onClick={() => setIsActive(!isActive)}>
                        <Circle>
                            <CircleImage
                                src={`${process.env.PUBLIC_URL}/assets/food1.png`}
                                alt="아침"
                            />
                        </Circle>
                        <span>아침</span>
                    </CircleButton>
                    <CircleButton onClick={() => {}}>
                        <Circle>
                            <CircleImage
                                src={`${process.env.PUBLIC_URL}/assets/food2.png`}
                                alt="점심"
                            />
                        </Circle>
                        <span>점심</span>
                    </CircleButton>
                    <CircleButton onClick={() => {}}>
                        <Circle>
                            <CircleImage
                                src={`${process.env.PUBLIC_URL}/assets/food3.png`}
                                alt="저녁"
                            />
                        </Circle>
                        <span>저녁</span>
                    </CircleButton>
                </Div>
            </Container>

            <DetailBox
                className={!isActive ? 'hidden' : null}
                onClick={() => setShow(true)}
            />

            <Modal
                width="25rem"
                height="25rem"
                className={!show ? 'hidden' : null}
            >
                <Div className="margin-bottom">
                    <SpaceBottom>
                        <H3>코멘트</H3>
                        <Grey>
                            생활스포츠지도사2급
                            <br />
                            전문가의 코멘트입니다.
                        </Grey>
                    </SpaceBottom>
                </Div>
                <CommentBox width="100%" height="10rem" borderColor="#D9D9D9">
                    ...
                </CommentBox>
                <IconButton
                    onClick={() => {
                        setShow(false);
                    }}
                >
                    <FontAwesomeIcon icon={faXmark} />
                </IconButton>
            </Modal>
        </>
    );
}

function DetailBox({ className, onClick }) {
    return (
        <Container width="60vw" color="#F5F5F5" className={className}>
            <Div className="margin-bottom">
                <H3>아침</H3>
            </Div>
            <Div className="margin-bottom">
                <SpaceBottom>
                    <Div className="flex-align-items">
                        <H4>고기</H4>
                        <Badge>
                            <Calorie>
                                <strong>164.9</strong> kcal
                            </Calorie>
                        </Badge>
                    </Div>
                    <Badge>
                        <Calorie>
                            <strong>닭가슴살(100g)</strong> X <strong>1</strong>{' '}
                            = <strong>164.9</strong> kcal
                        </Calorie>{' '}
                    </Badge>
                </SpaceBottom>
            </Div>
            <Div className="margin-bottom">
                <SpaceBottom>
                    <Div className="flex-align-items">
                        <H4>채소</H4>
                        <Badge>
                            <Calorie>
                                <strong>136.18</strong> kcal
                            </Calorie>
                        </Badge>
                    </Div>
                    <Badge>
                        <Calorie>
                            <strong>방울토마토(100g)</strong> X{' '}
                            <strong>3</strong> = <strong>0.0018</strong> kcal
                        </Calorie>{' '}
                    </Badge>
                    <Badge>
                        <Calorie>
                            <strong>양상추 샐러드(100g)</strong> X{' '}
                            <strong>2</strong> = <strong>136</strong> kcal
                        </Calorie>{' '}
                    </Badge>
                </SpaceBottom>
            </Div>
            <Div className="margin-bottom">
                <Div className="flex-align-items">
                    <H4>총합</H4>
                    <Badge>
                        <Calorie>
                            <strong>371.08</strong> kcal
                        </Calorie>
                    </Badge>
                </Div>
            </Div>

            <SpaceRight className="flex">
                <Button width="120px" color="#51CF66" onClick={onClick}>
                    코멘트 보기
                </Button>
                <Button
                    width="120px"
                    color="#FD7E14"
                    onClick={() => {
                        if (window.confirm('정말 삭제하시겠습니까?')) {
                            window.alert('삭제되었습니다.');
                            window.location.reload(true);
                        }
                    }}
                >
                    삭제하기
                </Button>
            </SpaceRight>
        </Container>
    );
}

export default DietBox;
