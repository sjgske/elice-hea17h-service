import React, { useState, useEffect} from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import * as Api from '../../api';

const horizontalCenter = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

const Container = styled.div`
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
  display: flex;
  border-bottom: 6px solid #51CF66;
`;

const Input = styled.input`
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

  ${({ active }) =>
    active &&
    `
    padding-right: 25px; 
  `}
`;

const IconWrapper = styled.span`
  color: #51cf66;
  width: 50px;
  height: 50px;
  font-size: 2.5rem;
  padding-right: 0.5rem;
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
  // const [httpStatusCode, setHttpStatusCode] = useState(0);

  const fetchData = async () => {
  try{
    const dataList = await Api.get(`/foods`);
    const {data} = await Api.get(`/foods?name=${foodName}`);
    setFoodList(dataList.data);
    setFood(data);
    console.log(foodList);
    console.log(food);
  } catch(err) {
    // setHttpStatusCode(err.response.status);
    console.log(err);
    console.log(err.message);
  }};

  useEffect(()=>{
    const debounce = setTimeout(() => {
      if(keyword) fetchData();
      },200);
      return () => {
      clearTimeout(debounce);
  };}, [keyword]);

    return (
      <Container>
        <InputContainer>
          <IconWrapper>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </IconWrapper>
          <Input
            type="search"
            placeholder="Search"
            active={hasKeyword}
            value={keyword}
            onChange={handleKeyword}
            onKeyDown={handleEnter}
          />
          {keyword && <RemoveIcon onClick={handleClearKeyword} />}
        </InputContainer>
      </Container>
    );
  
}

export default SearchBar;