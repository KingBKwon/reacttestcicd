import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [setId, setSetId] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // 백엔드 서버가 준비되지 않았으므로, 응답을 기다리지 않고 바로 다음 페이지로 이동합니다.
    navigate('/userinfo');
  };

  return (
    <div>
      <header style={{ background: 'red', color: 'white', padding: '10px' }}>
        헬로:D
      </header>
      <main style={{ padding: '15px' }}>
        <p>여러분의 요청을 해결 하는 헬로:D</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="setId">셋탑 번호:</label>
          <input
            type="text"
            id="setId"
            value={setId}
            onChange={(e) => setSetId(e.target.value)}
          />
          <button type="submit">로그인</button>
        </form>
      </main>
    </div>
  );
};

export default Login;
