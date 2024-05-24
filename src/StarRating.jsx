// StarRating.jsx
import React from 'react';

function StarRating({ rating }) {
  const maxStars = 5;
  const stars = Array.from({ length: maxStars }, (_, index) => (
    index < rating ? '★' : '☆'
  ));

  return (
    <div className="star-rating">
      {stars.map((star, index) => (
        <span key={index}>{star}</span>
      ))}
    </div>
  );
}

export default StarRating;
