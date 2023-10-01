import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "./Banner.css"
import imagen from "./cafe.png";

function Banner(){

    return(

        <div>
         <Row>
            <Col className="banner-title">El aroma mágico</Col>
         </Row>
         <div className="line-divider"></div>
         <Row>
            <img src={imagen} fluid className="imagen" alt='imagen'></img> 
         </Row>
         <div className="line-divider"></div>
       </div> 
    );
}

export default Banner;