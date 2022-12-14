import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Pages/Main/Main';
import LoginTap from './Pages/Login/LoginTap/LoginTap';
import StoreList from './Pages/ResList/StoreList';
import ResultList from './Pages/ResultList/ResultList';
import Detail from './Pages/Detail/Detail';
import ReviewWrite from './Pages/ReviewWrite/ReviewWrite';
import MyPage from './Pages/MyPage/MyPage';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import AdminEdit from './Pages/adminEdit/AdminEdit';
import AdminCreate from './Pages/adminEdit/AdminCreate';
import AdminPage from './Pages/AdminPage/AdminPage';
import SignupTap from './Pages/Login/SignupTap/SignupTap';

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/logintap" element={<LoginTap />} />
        <Route path="/reslist" element={<StoreList />} />
        <Route path="/resultlist" element={<ResultList />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/detail/write/:name" element={<ReviewWrite />} />
        <Route path="/admin/edit/:id" element={<AdminEdit />} />
        <Route path="/admin/create" element={<AdminCreate />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/adminpage" element={<AdminPage />} />
        <Route path="/SignupTap" element={<SignupTap />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
