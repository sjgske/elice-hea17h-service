import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EditInfo() {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [userInfo, setUserInfo] = useState({});
    const [isLoading, setIsLoading] = useState(false);
  
    const handleChangeUserInfo = (e) => {
      const { name, value } = e.target;
      setUserInfo({
        ...userInfo,
        [name]: value,
      });
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      if (userInfo.currentPassword !== currentPassword) {
        alert('현재 비밀번호를 다르게 입력했습니다.');
        return;
      }
      if (newPassword !== confirmPassword) {
        alert('새로운 비밀번호가 서로 일치하지 않습니다.');
        return;
      }
      await new Promise((resolve) => {
        setTimeout(resolve, 1000);
      });
      alert(`회원정보가 변경되었습니다.`);
    };
  
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_DOMAIN}:${process.env.REACT_APP_SERVER_PORT}/api/user`,
          {
            headers: {
              'Content-Type': 'application/json; charset=utf-8',
              authorization: `Bearer ${sessionStorage.getItem('token')}`,
            },
          },
        );
        setUserInfo(data);
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    };
  
    useEffect(() => {
      fetchData();
    }, []);

    return (
        <div>
          <MenuBar />
          {userInfo && (
            <form onSubmit={handleSubmit}>
              <div>
                아이디 :
                <input
                  name="id"
                  type="text"
                  value={userInfo.id}
                  onChange={handleChangeUserInfo}
                />
              </div>
              <div>
                이름 :
                <input
                  name="name"
                  type="text"
                  value={userInfo.fullName}
                  onChange={handleChangeUserInfo}
                />
              </div>
              <div>
                현재 비밀번호 :
                <input
                  name="password"
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                />
              </div>
              <div>
                새 비밀번호 :
                <input
                  name="password"
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
              <div>
                새 비밀번호 확인 :
                <input
                  name="password"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <div>
                전화번호 :
                <input
                  name="phoneNumber"
                  type="phoneNumber"
                  value={userInfo.phoneNumber}
                  onChange={handleChangeUserInfo}
                  placeholder="010-1234-5678"
                />
              </div>
              <button type="submit">회원정보수정</button>
            </form>
          )}
        </div>
      );
    }
export default Foods;
