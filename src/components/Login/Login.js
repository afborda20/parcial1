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
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = () => {
        const isValid = true;
        
        if (isValid && password.length > 0) {
          navigate(`/home`); 
        }else{
            setError('Error de autenticación. Revise sus credenciales');
        }
      };

  return (
    <div className="login-content">
     <Row className="login-container"><Col><strong>Inicio de sesión</strong></Col></Row>
     <Row className="login-container">
        <Card className="login-card">
            <Row><Col><strong>Nombre de usuario</strong></Col></Row>
            <Row>
                <Form>
                    <Form.Group controlId="usuarioInput">
                        <Form.Control 
                            type="usuario" 
                            onChange={(e) => setUsuario(e.target.value)}
                            className="form-control"
                        />
                    </Form.Group>
                </Form>
            </Row>
            <Row><Col><strong>Contraseña</strong></Col></Row>
            <Row>
                <Col className = "mb-2">
                <Form>
                    <Form.Group controlId="passwordInput">
                    <Form.Control 
                    className="form-control"
                    type="password" 
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    </Form.Group>
                </Form>
                </Col>
            </Row>
            <Row>
                <Col><Button variant= "primary" className="green-button" onClick={handleSubmit}>Ingresar</Button></Col>
                <Col><Button variant= "primary" className="red-button">Cancelar</Button></Col>
            </Row>
            <Row>
                <Col>
                    <p className="error-message">{error}</p>
                </Col>
            </Row>
        </Card>
     </Row>

    </div>
  );
}

export default Login;
