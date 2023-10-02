import { Route, Routes } from "react-router-dom";
import Container from "react-bootstrap/Container";
import {IntlProvider} from "react-intl";
import localeEsMessages from "./locales/es.json";
import localeEnMessages from ".//locales/en.json";

import Login from "./Login/Login"
import Banner from "./Banner/Banner"
import Footer from "./Footer/Footer"
import Home from "./Home/Home"


const userLanguage = navigator.language;


const lenMessages = { 
  en: localeEnMessages,
  es: localeEsMessages
};


function AppRoutes() {
    
    return (
      <IntlProvider locale= {userLanguage} messages= {lenMessages[userLanguage]}>
        <Container className="mt-3">
          <Banner></Banner>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />        
          </Routes>
          <Footer></Footer>
        </Container>
      </IntlProvider>
    );
  }
  
  export default AppRoutes;