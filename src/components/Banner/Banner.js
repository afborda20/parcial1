import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "./Banner.css"
import imagen from "./cafe.png";

function Banner(){

    return(

        <div className="login center-content">
         <Row>
            <Col className="title"><h2>El aroma magico</h2></Col>
         </Row>
         <div className="line-divider"></div>
         <Row>
            <Col> <img src={imagen} alt="Imagen" /></Col>
         </Row>
         <div className="line-divider"></div>
       </div> 
    );
}

export default Banner;