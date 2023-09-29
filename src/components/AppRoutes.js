import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Container from "react-bootstrap/Container";

import Login from "./Login/Login"
import Banner from "./Banner/Banner"
import Footer from "./Footer/Footer"
import Home from "./Home/Home"

function AppRoutes() {
    
    return (
      <Container className="mt-3">
        <Banner></Banner>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />        </Routes>
        <Footer></Footer>
      </Container>
    );
  }
  
  export default AppRoutes;