import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "./Footer.css"

import { FormattedMessage } from 'react-intl';


function Footer(){

    return(

        <div className="mt-4">
             <Row>
                <Col fluid className="footer-text text-center">
                    <FormattedMessage id="Contacto"/>
                </Col>
            </Row>
       </div> 
    );
}

export default Footer;