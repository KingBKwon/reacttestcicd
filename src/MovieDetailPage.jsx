import React from 'react';
import { Link } from 'react-router-dom';
import './detailer.css'; 
import HiddenSearch from './HiddenSearch'; // HiddenSearch 컴포넌트를 임포트합니다.
import LikeButton from './LikeButton';
import StarRating from './StarRating'; // StarRating 컴포넌트를 임포트합니다.
import './StarRating.css'; // StarRating 컴포넌트의 스타일을 임포트합니다.
import Afterpage from './Afterpage';

/*
실제 작동할떄는
import axios from 'axios';
import React , {useState, useEffect } from 'react';

function MovieDetailPage({match}){
  const [movieDetails, setMovieDetails]=useState(null);
  const [cast, setCast]=useState([]);
  const [reviews, setReviews]=useState([]);
  const [relatedMovies,setRelatedMovies]=useState([]);


  useEffect(() => {
    const movieId = match.params.id; // URL에서 영화 ID를 가져옵니다.
    
    // 영화 상세 정보를 가져오는 API 호출
    axios.get(`/api/movies/${movieId}`)
      .then(response => {
        setMovieDetails(response.data);
      });

    // 출연진 정보를 가져오는 API 호출
    axios.get(`/api/movies/${movieId}/cast`)
      .then(response => {
        setCast(response.data);
      });

    // 리뷰 정보를 가져오는 API 호출
    axios.get(`/api/movies/${movieId}/reviews`)
      .then(response => {
        setReviews(response.data);
      });

    // 관련 영화 정보를 가져오는 API 호출
    axios.get(`/api/movies/${movieId}/related`)
      .then(response => {
        setRelatedMovies(response.data);
      });
  }, [match.params.id]);

  // 데이터가 로딩 중일 때 로딩 인디케이터를 표시할 수 있습니다.
  if (!movieDetails) {
    return <div>Loading...</div>;
  }
}
이런식으로 사용가능할듯 근데 데이터 형식이 어떻게 올지에 따른 판단을 봐야함

*/

const vod_info = [
  {posterURL: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/tw0i3kkmOTjDjGFZTLHKhoeXVvA.jpg",
  title:"파묘",
  genres: "오컬트, 공포",
  disp_rtm:"2:13",
  summary:"미국 LA, 거액의 의뢰를 받은 무당 화림과 봉길은 기이한 병이 대물림되는 집안의 장손을 만난다.,조상의 묫자리가 화근임을 알아챈 화림은 이장을 권하고, 돈 냄새를 맡은 최고의 풍수사 상덕과 장의사 영근이 합류한다. 절대 사람이 묻힐 수 없는 악지에 자리한 기이한 묘. 상덕은 불길한 기운을 느끼고 제안을 거절하지만, 화림의 설득으로 결국 파묘가 시작되고… 나와서는 안될 것이 나왔다.",
  trailer_url:"https://www.themoviedb.org/video/play?key=rjW9E1BR_30"}
];


const cast = [
  { name: '최민식', imageUrl: 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/sd7gIA6nEkq6zumkDCfxSE0YSSV.jpg' },
  { name: '김고은', imageUrl: 'https://media.themoviedb.org/t/p/w138_and_h175_face/qjuCNIwVxXZ7B81jpuCSHkXBLPP.jpg' },
  { name: '유해진', imageUrl: 'https://media.themoviedb.org/t/p/w138_and_h175_face/y6L2EsmnbnCFxCgfHR2oeL7oQoo.jpg' },
  { name: '이도현', imageUrl: 'https://media.themoviedb.org/t/p/w138_and_h175_face/1iDRxID6mHf8rftDG0kLWzfXvQA.jpg'} 
];

const reviews = [
  { author: 'Wang', content: '재밌었는데 마지막이 아쉽', rating: 4 },
  { author: '왕왕', content: '그냥 그래용', rating: 3 },
  { author: '크아용', content: '멍멍', rating: 2 },
  { author: '세숑이', content: '왈왈', rating: 1 },
  { author: '메롱이', content: '너무 좋아용', rating: 5 },
  // ... 추가 리뷰 ...
];

const relatedMovies = [
  { title: '사바하', imageUrl: 'https://an2-img.amz.wtchn.net/image/v2/l1a-plNEIARDrVlmfjXc_Q.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXhMMjVqTm1nNWJYbHViWGQxTlhwcE4yNDNhbkl3SW4wLjk0MnUxbzBLcU9QTzN4YnJocXh2YklTVVNHLTNLQ1BfRXIxRUI1T2htVVk' },
  { title: '검은 사제들', imageUrl: 'https://an2-img.amz.wtchn.net/image/v2/09NZnwnlQVggGexLePzVFw.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXhMM1J1ZDJkMk9HVnFjV3hxZEd4MWMyMXhlVzV1SW4wLnROR2N0ajJ1RHFOZWF1b0xza3ZsakFMY1lBXzBXekxFYVpwLV9EODNsSFU' },
  { title: '사자', imageUrl: 'https://an2-img.amz.wtchn.net/image/v2/THpg0a8jQpOYeXLH8JhdBQ.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXhMMlY0WWpObGFXZHBlRFZ0WkdoeGJXeGhkWE51SW4wLlVrR3dhOHF0WGw1bmtuNl9mYzhBMzlwMFdRSW9EdjNDOEQtVmhjWXA5bjQ' }, 
];



function MovieDetailPage() {
    
  const movie = vod_info[0]
  const playTrailer = () => {
    window.open(movie.trailer_url, 'trailerWindow', 'width=800, height=450')
  }
  const positiveReviews = reviews.filter(review => review.rating >= 3);
  const negativeReviews = reviews.filter(review => review.rating < 3);

  return (
    <div id="container">        
      <header className="wrapper">
        <div className="wrapper-title">
          <a href="/">
            <h1>헬:D</h1>
          </a>
          <div className="wrapper-info-1">
            <ul>
              <li><a href="/movies">영화</a></li>
              <li><a href="/series">시리즈</a></li>
              <li><a href="/kids">키즈</a></li>
            </ul>
          </div>
        </div>
        <div className="search" >
        <HiddenSearch />
        </div>
        {/* 나머지부분 묶기 */}
        <ul className="wrapper-info-2">
          <li><a href="#">나</a></li>
          <li><a href="#">playlist</a></li>
        </ul>
      </header>

      {/* main */}
      <main>
        <div className="wrapper-back">
          <div className="wrapper-box">
            <Link to ="/Afterpage">
            <img src={movie.posterURL} className="box" /></Link>
          </div>
          <div className="wrapper-info-3">
            <div className="title-info">
              <h1>{movie.title}</h1>
              <div>
                <h2>장르: {movie.genres} </h2>
              </div>
              <div>
                <h2>상영 시간: {movie.disp_rtm} </h2>
              </div>
            </div>

            <div className="summary-box">
                <h2>줄거리:</h2>
                <p>{ movie.summary }</p>
              </div>

            <div className='like'>
            <LikeButton/>
            </div>

            <div>
              <button className="trailer" onClick = {playTrailer} >예고편 보기</button>
            </div>
          </div>
        </div>

        <section className="cast-list-section">
        <h2>출연진</h2>
        <ul className="cast-list">
        {cast.map((actor, index) => (
                <li key={index} className="card">
              <a href="#">
              <img src={actor.imageUrl} alt={actor.name} />
              </a>
            <p>{actor.name}</p>
            </li>
            ))}
        </ul>

        </section>

        
        <section className="content-section">
        <div className="positive-reviews">
        <h2>긍정 리뷰</h2>
        {positiveReviews.map((review, index) => (
          <div key={index} className="review">
            <StarRating rating={review.rating} />
            <p><strong>{review.author}</strong>: {review.content}</p>
          </div>
        ))}
      </div>
      <div className="negative-reviews">
        <h2>부정 리뷰</h2>
        {negativeReviews.map((review, index) => (
          <div key={index} className="review">
            <StarRating rating={review.rating} />
            <p><strong>{review.author}</strong>: {review.content}</p>
          </div>
        ))}
      </div>

        <div className="related-movies">
          <h2>관련 영화</h2>
          {relatedMovies.map((movie, index) => (
            <div key={index} className="moviecard">
              <img src={movie.imageUrl} alt={movie.title} />
              <p>{movie.title}</p>
            </div>
          ))}          
        </div>
      </section>
      </main>
    </div>
  );
}

export default MovieDetailPage;
