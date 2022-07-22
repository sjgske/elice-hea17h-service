import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';


function AxiosGet() {
  const [data, setData] = useState([]);
  
  useEffect( () => {
    axios.get("http://localhost:5000/foods",{
      params: { 
        name: '사과'
      },
    })
    .then(res => setData(res.data.documents))
    .catch(err => console.log(err));
  }, []);
  useEffect(() => {
    // 렌더링될때 한번 data에 변화가 생기면 한번더 실행
    console.log(data);
  }, [data]);

  return (
    <div>
      {data.map((v) => (
            <div>
              <h2>{v.name}</h2>
              <Imgs src={v.image}/>
              <div>{v.category}</div>
            </div>
          ))
      }
    </div>
  );
}
const Imgs = styled.img`
  width: 200px;
  height: 400px;
`;

export default AxiosGet;