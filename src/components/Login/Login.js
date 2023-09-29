import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button"
import Form from 'react-bootstrap/Form';
import Card from "react-bootstrap/Card";


import "./Login.css";


function Login() {

    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = () => {
        const isValid = true;
        
        if (isValid && password.length > 0) {
          navigate(`/home`); 
        }else{
            window.alert('Error de autenticación. Revise sus credenciales');

        }
      };

  return (
    <div className="login center-content">
     <Row><Col className="title"><strong>Inicio de sesión</strong></Col></Row>
     <Row>
        <Card>
            <Row><Col className="title"><strong>Nombre de usuario</strong></Col></Row>
            <Row>
                <Form>
                    <Form.Group controlId="usuarioInput">
                        <Form.Control 
                            type="usuario" 
                            placeholder="Nombre de usuario" 
                            className="wider-form-control"
                            onChange={(e) => setUsuario(e.target.value)}
                        />
                    </Form.Group>
                </Form>
            </Row>
            <Row><Col className="title"><strong>Contraseña</strong></Col></Row>
            <Row>
                <Col className = "mb-2">
                <Form>
                    <Form.Group controlId="passwordInput">
                    <Form.Control 
                    type="password" 
                    placeholder="Ingresa tu contraseña" 
                    className="wider-form-control"
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    </Form.Group>
                </Form>
                </Col>
            </Row>
            <Row>
                <Col><Button variant= "primary" className="wider-form-control" onClick={handleSubmit}>Ingresar</Button></Col>
                <Col><Button variant= "primary" className="wider-form-control">Cancelar</Button></Col>
            </Row>
        </Card>
     </Row>

    </div>
  );
}

export default Login;
