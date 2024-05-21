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
        <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '55vh' }}>
            <div style={{boxShadow: '0px 0px 17px rgb(133 133 133 / 29%)',borderRadius:'1em', padding:'2em', width: '40%', alignItems: 'center'}}>
            <h1 className="text-center" style={{color:'#0cc0df', paddingBottom:'0.4em'}}>Iniciar Sesión</h1>
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
                            placeholder="Contraseña"
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
                ¿No tienes una cuenta?{' '}
                <Link to="/CrearCuenta" style={{ color: '#0cc0df', textDecoration: 'none', fontWeight: 'bold' }}>
                    <span style={{ textDecoration: 'none'}}>Regístrate aquí</span>
                </Link>

            </p>
            </div>
        </Container>
    );
};

export default Login;
