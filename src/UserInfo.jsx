import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserInfo = () => {
  const navigate = useNavigate();

  // '나' 이미지 클릭 핸들러
  const handleMyProfileClick = () => {
    navigate('/moviedetail');
  };

  return (
    <div style={{ background: '#f0f0f0', padding: '20px' }}>
      <header style={{ background: 'red', color: 'white', padding: '10px' }}>
        헤더:D
      </header>
      <main style={{ display: 'flex', justifyContent: 'space-around', padding: '20px' }}>
        <div style={{ background: 'grey', padding: '20px' }}>
          <p>아빠</p>
        </div>
        <div style={{ background: 'grey', padding: '20px' }}>
          <p>엄마</p>
        </div>
        {/* '나' 이미지를 클릭하면 /moviedetail로 이동 */}
        <div style={{ background: 'grey', padding: '20px' }} onClick={handleMyProfileClick}>
          <p>나</p>
        </div>
        <div style={{ fontSize: '24px', marginLeft: '20px' }}>+</div>
      </main>
    </div>
  );
};

export default UserInfo;
