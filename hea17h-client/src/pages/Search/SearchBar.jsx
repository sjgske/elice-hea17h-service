import React, { useState, useEffect} from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import * as Api from '../../api';

const horizontalCenter = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  border-bottom: 2px solid #0bde8b;
  background-color: #fff;
  padding: 20px 60px;
  box-sizing: border-box;
`;

// Link태그의 스타일을 입히는것
// horizontalCenter 스타일 컴포넌트를 믹스인하여 속성값 전달
// 뒤로가기 버튼
const ArrowIcon = styled(Link)`
  ${horizontalCenter}
  left: 18px;
  display: block;
  width: 21px;
  height: 18px;
  background-position: -164px -343px;
  vertical-align: top;
  background-image: url(https://s.pstatic.net/static/www/m/uit/2020/sp_search.623c21.png);
  background-size: 467px 442px;
  background-repeat: no-repeat;
`;

const SearchIcon = styled.span`
  ${horizontalCenter}
  right: 18px;
  width: 24px;
  height: 24px;
  background-position: -356px -260px;
  display: inline-block;
  overflow: hidden;
  color: transparent;
  vertical-align: middle;
  background-image: url(https://s.pstatic.net/static/www/m/uit/2020/sp_search.623c21.png);
  background-size: 467px 442px;
  background-repeat: no-repeat;
`;

// 글자를 입력하면 RemoveIcon이 나오게 되고 누르면 input의 value값이 사라짐
const RemoveIcon = styled.span`
  ${horizontalCenter}
  right: 0px;
  width: 20px;
  height: 20px;
  margin-right: 1rem;
  background-position: -389px -29px;
  display: inline-block;
  overflow: hidden;
  color: transparent;
  vertical-align: top;
  background-image: url(https://s.pstatic.net/static/www/m/uit/2020/sp_search.623c21.png);
  background-size: 467px 442px;
  background-repeat: no-repeat;
`;

const InputContainer = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  background-color: #fff;
  font-weight: 700;
  font-size: 20px;
  box-sizing: border-box;

  ${({ active }) =>
    active &&
    `
    padding-right: 25px; 
  `}
`;

const AlertMessage = styled.p`
  color: #F03E3E;
`;

function SearchBar({ onAddKeyword }) {
  // 1. 검색어를 state 로 다루도록 변경
  // 2. 이벤트 연결
  // 3. Link to 설명

  const [clickEditBtn, setClickEditBtn] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [foodName, setFoodName] = useState('');
  const [foodAmount, setFoodAmount] = useState(`100g`);

  const handleKeyword = (e) => {
    setKeyword(e.target.value);
  };
  const handleEnter = (e) => {
    if (keyword && e.keyCode === 13) {
      // 엔터일때 addkeyword에 전달
      onAddKeyword(keyword);
      setKeyword('');
      setClickEditBtn(!clickEditBtn);
    }
    const foodData = e.target.value.split(' ');
    setFoodName(foodData[0]);
    setFoodAmount(foodData[1]);
    console.log(foodName);
    console.log(foodAmount);
  };

  const handleClearKeyword = () => {
    setKeyword('');
  };

  // 키워드를 가지고 있다면 active가 발생하여 padding
  const hasKeyword = !!keyword;

  // keyword가 있으면 true, 없으면 false
  console.log(!!keyword);
 
  const [foodList, setFoodList] = useState([]);
  const [food, setFood] = useState([]);
  const [httpStatusCode, setHttpStatusCode] = useState(0);

  const fetchData = async () => {
  try{
    const dataList = await Api.get(`/foods`);
    const {data} = await Api.get(`/foods?name=${foodName}`);
    setFoodList(dataList.data);
    setFood(data);
    console.log(foodList);
    console.log(food);
  } catch(err) {
    setHttpStatusCode(err.response.status);
    console.log(err);
    console.log(err.message);
  }};

  useEffect(()=>{
    fetchData();
  }, [keyword]);

    return httpStatusCode === 500 ? (
      <Container>
        <ArrowIcon className="flex-column-align-items" to="/diet" />
        <InputContainer>
        <Input
            placeholder="검색어를 입력해주세요"
            active={hasKeyword}
            value={keyword}
            onChange={handleKeyword}
            onKeyDown={handleEnter}
          />
          <AlertMessage>추가 할 수 없는 항목입니다.</AlertMessage>
          {keyword && <RemoveIcon onClick={handleClearKeyword} />}
        </InputContainer>
        <SearchIcon />
      </Container>
    ) : (
      <Container>
        <ArrowIcon className="flex-column-align-items" to="/diet" />
        <InputContainer>
        <Input
            placeholder="검색어를 입력해주세요"
            active={hasKeyword}
            value={keyword}
            onChange={handleKeyword}
            onKeyDown={handleEnter}
          />
          {keyword && <RemoveIcon onClick={handleClearKeyword} />}
        </InputContainer>
        <SearchIcon />
      </Container>
    );
  
}

export default SearchBar;