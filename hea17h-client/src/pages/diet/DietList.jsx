import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMagnifyingGlass,
    faCalendarDays,
    faXmark,
} from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/Button';
import Badge from '../../components/Badge';
import Box from '../../components/Box';
import Modal from '../../components/Modal';
import TopButton from '../../components/TopButton';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: #f7f7f9;
    padding: 15vw 10vw;
`;

const Main = styled.div`
    background: #fff;
    padding: 5vw 8vw;
`;

const Search = styled.div`
    display: flex;
    align-items: center;
    height: 2.5rem;
    margin-bottom: 3rem;

    span {
        margin-right: 12px;
    }
`;

const InputGroup = styled.div`
    position: relative;

    input {
        width: 8rem;
        height: 2.5rem;
        margin-right: 12px;
        padding: 8px 14px;
        border: 1px solid #d9d9d9;
        font-weight: 700;
        text-align: end;
    }

    input[type='date']::-webkit-inner-spin-button,
    input[type='date']::-webkit-calendar-picker-indicator {
        display: none;
        -webkit-appearance: none;
    }

    span {
        margin-right: 12px;
    }

    svg {
        position: absolute;
        top: 12px;
        left: 14px;
    }
`;

const Div = styled.div``;

const MarginDiv = styled.div`
    margin-bottom: 2rem;
`;

const SpaceDiv = styled.div`
    *:not(last-child) {
        margin-bottom: 0.5rem;
    }
`;

const FlexBox = styled.div`
    display: flex;
    align-items: center;
`;

const H1 = styled.h1`
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
    margin-bottom: 40px;
`;

const H3 = styled.h3`
    font-size: 1.3rem;
    margin-right: 1rem;
`;

const Calorie = styled.span`
    font-weight: 600;
    strong {
        color: #999999;
    }
`;

const Grey = styled.p`
    font-size: 1.3rem;
    font-weight: 700;
    color: #999999;
`;

const MainBox = styled(Box)`
    display: flex;
    justify-content: space-between;
    padding: 35px 45px;
    margin: 0 auto 30px;
`;

const DetailBox = styled(Box)`
    padding: 35px 45px;
    margin: 0 auto 30px;
`;

const CommentBox = styled(Box)`
    padding: 1rem;
    flex-grow: 1;
`;

const CircleButton = styled.button`
    margin-right: 1.5rem;

    &:last-child {
        margin-right: 0;
    }
`;

const Circle = styled.div`
    position: relative;
    width: 80px;
    height: 80px;
    margin-bottom: 0.5rem;
    background-color: #fff;
    border-radius: 50%;
`;

const CircleImage = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50px;
    height: 50px;
`;

const ButtonGroup = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    *:not(last-child) {
        margin-right: 1.5rem;
    }
`;

const IconButton = styled.button`
    position: absolute;
    top: 1.5rem;
    right: 2rem;
    font-size: 1.2rem;
`;

function DietList() {
    return (
        <>
            <Container>
                <H1>식단 목록</H1>
                <Main>
                    <Search>
                        <H3>검색 기간</H3>
                        <InputGroup>
                            <input
                                type="date"
                                id="start"
                                value="2022-07-01"
                                onChange={() => {}}
                            />
                            <FontAwesomeIcon icon={faCalendarDays} />
                        </InputGroup>
                        <span>~</span>
                        <InputGroup>
                            <input
                                type="date"
                                id="end"
                                value="2022-07-08"
                                onChange={() => {}}
                            />
                            <FontAwesomeIcon icon={faCalendarDays} />
                        </InputGroup>
                        <Button width="40px" color="#FD7E14">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </Button>
                    </Search>

                    <MainBox width="55vw" color="#faf3e3">
                        <SpaceDiv>
                            <Badge>2022.07.05</Badge>
                            <H3>헬스장 가기 전에 먹기 좋은 식단</H3>
                            <Calorie>
                                <strong>1,443</strong> kcal
                            </Calorie>
                        </SpaceDiv>
                        <Div>
                            <CircleButton>
                                <Circle>
                                    <CircleImage src="" alt="아침" />
                                </Circle>
                                <span>아침</span>
                            </CircleButton>
                            <CircleButton>
                                <Circle>
                                    <CircleImage src="" alt="점심" />
                                </Circle>
                                <span>점심</span>
                            </CircleButton>
                            <CircleButton>
                                <Circle>
                                    <CircleImage src="" alt="저녁" />
                                </Circle>
                                <span>저녁</span>
                            </CircleButton>
                        </Div>
                    </MainBox>

                    <DetailBox width="55vw" color="#F5F5F5">
                        <MarginDiv>
                            <H3>아침</H3>
                        </MarginDiv>

                        <MarginDiv>
                            <SpaceDiv>
                                <FlexBox>
                                    <H3>고기</H3>
                                    <Badge>
                                        <Calorie>
                                            <strong>164.9</strong> kcal
                                        </Calorie>
                                    </Badge>
                                </FlexBox>
                                <Badge>
                                    <Calorie>
                                        <strong>닭가슴살(100g)</strong> X{' '}
                                        <strong>1</strong> ={' '}
                                        <strong>164.9</strong> kcal
                                    </Calorie>{' '}
                                </Badge>
                            </SpaceDiv>
                        </MarginDiv>

                        <MarginDiv>
                            <SpaceDiv>
                                <FlexBox>
                                    <H3>채소</H3>
                                    <Badge>
                                        <Calorie>
                                            <strong>136.18</strong> kcal
                                        </Calorie>
                                    </Badge>
                                </FlexBox>
                                <Badge>
                                    <Calorie>
                                        <strong>방울토마토(100g)</strong> X{' '}
                                        <strong>3</strong> ={' '}
                                        <strong>0.0018</strong> kcal
                                    </Calorie>{' '}
                                </Badge>
                                <Badge>
                                    <Calorie>
                                        <strong>양상추 샐러드(100g)</strong> X{' '}
                                        <strong>2</strong> ={' '}
                                        <strong>136</strong> kcal
                                    </Calorie>{' '}
                                </Badge>
                            </SpaceDiv>
                        </MarginDiv>

                        <MarginDiv>
                            <FlexBox>
                                <H3>총합</H3>
                                <Badge>
                                    <Calorie>
                                        <strong>371.08</strong> kcal
                                    </Calorie>
                                </Badge>
                            </FlexBox>
                        </MarginDiv>

                        <ButtonGroup>
                            <Button width="120px" color="#51CF66">
                                코멘트 보기
                            </Button>
                            <Button width="120px" color="#FD7E14">
                                삭제하기
                            </Button>
                        </ButtonGroup>
                    </DetailBox>

                    <MainBox width="55vw" color="#faf3e3">
                        <SpaceDiv>
                            <Badge>2022.07.06</Badge>
                            <H3>다이어트 최고, 지중해식 식단</H3>
                            <Calorie>
                                <strong>1,329</strong> kcal
                            </Calorie>
                        </SpaceDiv>
                        <Div>
                            <CircleButton>
                                <Circle>
                                    <CircleImage src="" alt="아침" />
                                </Circle>
                                <span>아침</span>
                            </CircleButton>
                            <CircleButton>
                                <Circle>
                                    <CircleImage src="" alt="점심" />
                                </Circle>
                                <span>점심</span>
                            </CircleButton>
                            <CircleButton>
                                <Circle>
                                    <CircleImage src="" alt="저녁" />
                                </Circle>
                                <span>저녁</span>
                            </CircleButton>
                        </Div>
                    </MainBox>
                </Main>
            </Container>

            <Modal width="25rem" height="25rem" className="hidden">
                <MarginDiv>
                    <SpaceDiv>
                        <H3>코멘트</H3>
                        <Grey>
                            생활스포츠지도사2급
                            <br />
                            전문가의 코멘트입니다.
                        </Grey>
                    </SpaceDiv>
                </MarginDiv>
                <CommentBox width="100%" height="10rem" borderColor="#D9D9D9">
                    ...
                </CommentBox>
                <IconButton>
                    <FontAwesomeIcon icon={faXmark} />
                </IconButton>
            </Modal>

            <TopButton />
        </>
    );
}

export default DietList;
