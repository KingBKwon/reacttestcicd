import React, { useState, useRef } from 'react';
import './HiddenSearch.css';
import searchIcon from './search.png';

const HiddenSearch = () => {
  const [isActive, setIsActive] = useState(false);
  const inputRef = useRef(null);

  const toggleSearch = () => {
    setIsActive(!isActive);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    
    <div className={`search ${isActive ? 'active' : ''}`}>
      <input
        ref={inputRef}
        type="text"
        className="input"
        placeholder="배우명 혹은 영화 이름 검색"
      />
      <button className="btn" onClick={toggleSearch}>
        <img src={searchIcon} alt="Search" />
      </button>
    </div>
    
  );
};

export default HiddenSearch;
