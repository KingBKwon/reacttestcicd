import React, { useState } from 'react';

function LikeButton() {
  // 좋아요 상태를 관리하는 state (기본값은 false)
  const [liked, setLiked] = useState(false);

  // 좋아요 버튼의 스타일을 정의합니다.
  const buttonStyle = {
    backgroundColor: liked ? 'red' : 'grey', // 좋아요 상태에 따라 색상 변경
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    
    
  };

  // 버튼 클릭 이벤트 핸들러
  const toggleLike = () => {
    setLiked(!liked); // 좋아요 상태 토글
  };

  return (
    <button style={buttonStyle} onClick={toggleLike}>
      {liked ? '좋아요 취소' : '좋아요'}
    </button>
  );
}

export default LikeButton;
