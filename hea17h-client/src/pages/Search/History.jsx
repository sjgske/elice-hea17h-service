import React from 'react';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faX, faPen} from '@fortawesome/free-solid-svg-icons';

const HistoryContainer = styled.div`
  font-size: 2rem;
  font-weight: 600;
  padding: 18px;
`;

const HeaderContainer = styled.div`
  overflow: hidden;
`;
const Title = styled.span`
  font-size: 1.8rem;
  float: left;
  font-weight: 600;
  color: #999999;
`;
const RemoveAll = styled.span`
  float: right;
  color: #999999;
  text-decoration: underline;
  cursor: pointer;
  font-weight: 400;
  font-size: 1.5rem;
`;

const RemoveText = styled.button`
  float: right;
  cursor: pointer;
  margin-right: 1rem;
  align-items: center;
  font-size: 1.5rem;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 5px;
  color: #FFFFFF;
  font-weight: 600;
  background-color: #FD7E14;
  margin-right: 1rem;
`;

const ListContainer = styled.ul`
  margin: 10px 0;
`;

// &는 자기 자신
// 마지막 요소 값을 제외한 값에 margin-bottom 속성 지정
const KeywordContainer = styled.li`
  overflow: hidden;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
const DailyConfig = styled.span`
  font-size: 2rem;
  font-weight: 600;
  color: #FD7E14;
  margin-right: 1rem;
`;

const RemoveButton = styled.button`
    align-items: center;
    font-size: 1.5rem;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 5px;
    color: #FFFFFF;
    font-weight: 600;
    background-color: #F03E3E;
    margin-right: 1rem;
`;

const Keyword = styled.span`
  font-size: 2rem;
  font-weight: 600;
  margin-right: 1rem;
`;

function History({ keywords, onRemoveKeyword, onClearKeywords}) {
  console.log('keyword', keywords);
  if (keywords.length === 0) {
    return <HistoryContainer>식단에 추가된 항목이 없습니다.</HistoryContainer>;
  }
  const navigate = useNavigate();

  return (
    <HistoryContainer>
      <HeaderContainer>
        <Title>추가 된 식단</Title>
        <RemoveAll onClick={onClearKeywords}>전체삭제</RemoveAll>
        <RemoveText onClick={() => navigate(`/diet`, { state: keywords })}><FontAwesomeIcon icon={faPen} /></RemoveText>
      </HeaderContainer>
      <ListContainer>
        {keywords.map(({ id, text, state }) => (
            <KeywordContainer key={id}>
              <DailyConfig>{state}</DailyConfig>
              <Keyword>{text}</Keyword>
              <RemoveButton
                // 눌렸을때 해야하는거라 arrow function을 사용하여 실행
                // 그냥 함수 쓰면은 그려지자마자 바로 실행
                onClick={() => {
                  onRemoveKeyword(id);
                }}
              >
              <FontAwesomeIcon icon={faX} />
              </RemoveButton>
            </KeywordContainer>
          ))}
      </ListContainer>
    </HistoryContainer>
  );
}

export default History;