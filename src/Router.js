import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Pages/Main/Main';
import Login from './Pages/Login/Login';
import StoreList from './Pages/ResList/StoreList';
import ResultList from './Pages/ResultList/ResultList';
import Detail from './Pages/Detail/Detail';
import ReviewWrite from './Pages/ReviewWrite/ReviewWrite';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reslist" element={<StoreList />} />
        <Route path="/resultlist" element={<ResultList />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/detail/write" element={<ReviewWrite />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
