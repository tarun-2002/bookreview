import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";
import FAQ from "./pages/FAQ/FAQ";
import BookAdd from "./pages/BookAdd/BookAdd";
import ContactUs from "./pages/ContactUs/ContactUs";
import UserReview from "./pages/UserReview/UserReview";
import CommitteeReview from "./pages/CommitteeReview/CommitteeReview";
import BookView from "./pages/BookView/BookView";



const App = () => {
  return (
        <>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="add-book" element={<BookAdd />} />
                <Route path="blog" element={<Blog />} />
                <Route path="faq" element={<FAQ />} />
                <Route path="contact-us" element={<ContactUs />} />
                <Route path="user-review" element={<UserReview />} />
                <Route path="committee-review" element={<CommitteeReview />} />
                <Route path="view-book" element={<BookView/>} />
              </Route>
            </Routes>
          </BrowserRouter>
        </>
  );
};

export default App;
