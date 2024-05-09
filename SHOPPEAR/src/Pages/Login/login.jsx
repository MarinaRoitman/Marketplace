import React, { useState } from 'react';
import { Form, Button, Container, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom'; 

const Login = () => {
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar la lógica de inicio de sesión, como enviar los datos a un servidor, etc.
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <Container>
            <h1 className="text-center">Iniciar Sesión</h1>
            <Form onSubmit={handleSubmit}>
                <Row className="justify-content-center" style={{paddingBottom: '1.3em'}}>
                    <Col md={6}>
                        <Form.Group controlId="formularioEmail">
                            <Form.Label>Usuario</Form.Label>
                            <Form.Control
                                type="name"
                                placeholder="Usuario123"
                                value={usuario}
                                onChange={(e) => setUsuario(e.target.value)}
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="justify-content-center" style={{paddingBottom: '1.3em'}}>
                    <Col md={6}>
                        <Form.Group controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Ingrese su contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </Form.Group>
                    </Col>
                </Row>
                <div className="text-center">
                    <Button variant="dark" type="submit" className="w-100" style={{marginTop: '0.3em',marginBottom: '1em',maxWidth: '120px' }}>
                    Iniciar Sesión
                    </Button>
                </div>
            </Form>
            <p className="text-center mt-3">
                ¿No tienes una cuenta? 
                <Link to="/CrearCuenta">Regístrate aquí</Link>
            </p>
        </Container>
    );
};

export default Login;
