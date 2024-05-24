import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './login';
import UserInfo from './UserInfo'; // Assuming UserInfo component is already imported
import MovieDetailPage from './MovieDetailPage'; // Assuming MovieDetailPage component is already imported
import Afterpage from './Afterpage';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/userinfo" element={<UserInfo />} />
        <Route path="/movie/:id" element={<MovieDetailPage />} /> 
        <Route path="/afterpage" element={<Afterpage />} />
      </Routes>
    </Router>
  );
};

export default App;
