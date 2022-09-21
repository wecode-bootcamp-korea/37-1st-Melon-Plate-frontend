import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Pages/Main/Main';
import Login from './Pages/Login/Login';
import StoreList from './Pages/StoreList/StoreList';
import ResultList from './Pages/ResultList/ResultList';
import Detail from './Pages/Detail/Detail';
import ReviewWrite from './Pages/ReviewWrite/ReviewWrite';
import MyPage from './Pages/MyPage/MyPage';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/storelist" element={<StoreList />} />
        <Route path="/resultlist" element={<ResultList />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/detail/write" element={<ReviewWrite />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
