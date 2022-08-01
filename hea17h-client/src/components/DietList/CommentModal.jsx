import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faXmark,
    faAngleLeft,
    faAngleRight,
} from '@fortawesome/free-solid-svg-icons';
import { setModalIsOpen } from '../../slices/dietListSlice';
import Box from '../Box';
import Modal from '../Modal';

function CommentModal({ comment }) {
    const dispatch = useDispatch();
    const { modalIsOpen } = useSelector(state => state.dietList);

    const [page, setPage] = useState(0);
    const [hover, setHover] = useState(false);

    return (
        <Modal
            width="25rem"
            height="25rem"
            className={!modalIsOpen ? 'hidden' : null}
            style={{ position: 'relative' }}
        >
            {!comment.length ? (
                <>
                    <Div className="flex" style={{ padding: '2rem 0' }}>
                        <H3>아직 작성된 코멘트가 없습니다.</H3>
                    </Div>
                    <IconButton
                        onClick={() => {
                            dispatch(setModalIsOpen(false));
                        }}
                    >
                        <FontAwesomeIcon icon={faXmark} />
                    </IconButton>
                </>
            ) : (
                <>
                    <Div className="margin-bottom">
                        <SpaceBottom style={{ position: 'relative' }}>
                            <H3>코멘트</H3>
                            <GreyText>
                                {comment[page].expert.certificate[0].name}
                                <br />
                                전문가의 코멘트입니다.
                                <SmallLink
                                    onMouseEnter={() => setHover(true)}
                                    onMouseLeave={() => setHover(false)}
                                >
                                    전문가 정보 더보기
                                </SmallLink>
                            </GreyText>

                            <HoverDiv className={!hover ? 'hidden' : null}>
                                <h5>전문가 정보</h5>
                                <span>
                                    {comment[page].expert.certificate
                                        .map(el => el.name)
                                        .join(' / ')}
                                </span>
                                <img
                                    src={
                                        comment[page].expert.certificate[0]
                                            .image
                                    }
                                    alt="자격증"
                                />
                            </HoverDiv>
                        </SpaceBottom>
                    </Div>
                    <CommentBox width="100%" borderColor="#D9D9D9">
                        {comment[page].content}
                    </CommentBox>
                    <IconButton
                        onClick={() => {
                            dispatch(setModalIsOpen(false));
                        }}
                    >
                        <FontAwesomeIcon icon={faXmark} />
                    </IconButton>

                    {comment.length > 1 && (
                        <>
                            <LeftButton
                                onClick={() => {
                                    if (page === 0) {
                                        return;
                                    }
                                    setPage(page - 1);
                                }}
                            >
                                <FontAwesomeIcon icon={faAngleLeft} />
                            </LeftButton>
                            <RightButton
                                onClick={() => {
                                    if (page === comment.length - 1) {
                                        return;
                                    }
                                    setPage(page + 1);
                                }}
                            >
                                <FontAwesomeIcon icon={faAngleRight} />
                            </RightButton>

                            <PageText>
                                <span>{`${page + 1} / ${comment.length}`}</span>
                            </PageText>
                        </>
                    )}
                </>
            )}
        </Modal>
    );
}

CommentModal.propTypes = {
    comment: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const Div = styled.div``;

const SpaceBottom = styled.div`
    & > * {
        margin-bottom: 0.7rem;
    }

    *:last-child {
        margin: 0;
    }
`;

const H3 = styled.h3`
    font-size: 1.3rem;
    margin-right: 1rem;
`;

const GreyText = styled.p`
    font-size: 1.3rem;
    font-weight: 700;
    color: #999999;

    small {
        display: block;
        padding-top: 0.3rem;
        font-size: 0.8rem;
        font-weight: 400;
        color: #333;
        text-decoration: underline;
    }
`;

const LeftButton = styled.button`
    width: 50px;
    height: 50px;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
`;

const RightButton = styled.button`
    width: 50px;
    height: 50px;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
`;

const CommentBox = styled(Box)`
    padding: 1rem;
    flex-grow: 1;
    overflow: auto;
`;

const IconButton = styled.button`
    position: absolute;
    top: 1.5rem;
    right: 2rem;
    font-size: 1.2rem;
`;

const HoverDiv = styled.div`
    position: absolute;
    top: 0;
    right: -180px;
    padding: 1rem;
    width: 250px;
    background-color: #f5f5f5;
    opacity: 0.8;

    h5 {
        font-size: 1rem;
        margin-bottom: 1rem;
    }

    span {
        font-size: 0.9rem;
        display: inline-block;
        margin-bottom: 1rem;
    }

    img {
        width: 100%;
    }
`;

const PageText = styled.div`
    position: absolute;
    bottom: 48px;
    left: 50%;
    transform: translateX(-50%);
`;

const SmallLink = styled.small`
    display: block;
    width: fit-content;
    cursor: pointer;
`;

export default React.memo(CommentModal);
