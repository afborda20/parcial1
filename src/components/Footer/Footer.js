import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "./Footer.css"

function Footer(){

    return(

        <div className="mt-4">
             <Row>
                <Col fluid className="footer-text text-center">
                    Contact us: +57 3102105253 - info@elaromamagico.com - @elaromamagico
                </Col>
            </Row>
       </div> 
    );
}

export default Footer;