import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Pages/Main/Main';
import Login from './Pages/Login/Login';
import ResList from './Pages/ResList/ResList';
import ResultList from './Pages/ResultList/ResultList';
import Detail from './Pages/Detail/Detail';
import ReviewWrite from './Pages/ReviewWrite/ReviewWrite';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import ReviewList from './Components/ReviewList/ReviewList';

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reslist" element={<ResList />} />
        <Route path="/resultlist" element={<ResultList />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/detail/write" element={<ReviewWrite />} />
        <Route path="/reviewList" element={<ReviewList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
