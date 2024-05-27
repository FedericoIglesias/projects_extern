import React from "react";
import { PhotoList } from "./component/photoList";
import Header from "./component/header";
import Footer from "./component/footer";
import FavoriteList from "./component/favoriteList";
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<PhotoList />} />
        <Route path="/my-likes" element={<FavoriteList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
