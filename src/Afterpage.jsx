import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import StarRating from './StarRating'; // 별점 컴포넌트를 임포트합니다.

function AfterPage() {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [ageGroup, setAgeGroup] = useState('20s'); // 기본값으로 '20s' 설정

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleAgeGroupChange = (e) => {
    setAgeGroup(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 폼 제출 로직
    console.log(`Rating: ${rating}, Review: ${review}, Age Group: ${ageGroup}`);
    // 서버로 데이터 전송 등의 처리를 여기에 추가
  };

  return (
    <div>
      <h1>당신의 피드백?</h1>
      <form onSubmit={handleSubmit}>
        <StarRating rating={rating} onRatingChange={handleRatingChange} />
        <label>
          리뷰를 남겨주세요!:
          <textarea
            value={review}
            onChange={handleReviewChange}
          />
        </label>
        <button type="submit">제출</button>
      </form>

      <h2>'나'에게 맞는 제품을 찾아보세요</h2>
      <select value={ageGroup} onChange={handleAgeGroupChange}>
        <option value="10s">10대</option>
        <option value="20s">20대</option>
        <option value="30s">30대</option>
        <option value="40s">40대 이상</option>
      </select>
      {/* 나이대별 추천 제품을 표시하는 로직 */}
      {/* 예를 들어, ageGroup 상태에 따라 다른 컴포넌트를 렌더링 */}
    </div>
  );
}

export default AfterPage;
