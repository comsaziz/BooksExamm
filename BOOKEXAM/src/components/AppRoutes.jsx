import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "../pages/Signup";
import Signin from "../pages/Signin"
import Home from "./Home";
import BookStore from "./BookStore";
import BookDetails from "./BookDetails ";
import ReadBooks from "./ReadBooks";
import Favorites from "./Favorites";



const AppRoutes = () => {
  return (
    <Router>
      <Routes>
      
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Book" element={<BookStore />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/read-books" element={<ReadBooks />} />
        <Route path="/book/:isbn" element={<BookDetails />} />
     
      </Routes>
    </Router>
  );
};

export default AppRoutes;
