import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './login.css';
import Figure from 'react-bootstrap/Figure';

const Login = () => {
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Usuario:', usuario);
        console.log('Password:', password);
    };

    return (
        <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '55vh' }}>
            <div style={{ display: 'flex', width: '80%'}}>
                <div style={{ background: 'rgb(12 192 223 / 26%)', borderRadius: '1em', padding: '2em', width: '35%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Figure>
                        <Figure.Image
                            alt="Chica Inicio"
                            src={'../../../public/assets/chicaInicio.png'}
                            className='chica-inicio-img'
                        />
                    </Figure>
                </div>
{/*boxShadow: 'rgb(219 219 219) 0px 0px 10px'*/}
                <div style={{ border:'0.5px solid rgb(221 221 221)', borderRadius: '1em', padding: '2em', width: '48%' }}>
                    <h1 className="text-center" style={{ color: '#0cc0df', paddingBottom: '0.3em', fontSize: '2.7em', textShadow: '1px 0px 0px #8b8b8b' }}>Iniciar Sesión</h1>
                    <Form onSubmit={handleSubmit}>
                        <Row className="justify-content-center" style={{ paddingBottom: '1.3em' }}>
                            <Col md={12}>
                                <Form.Group controlId="formularioEmail">
                                    <Form.Label>Usuario</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Usuario"
                                        value={usuario}
                                        onChange={(e) => setUsuario(e.target.value)}
                                        required
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="justify-content-center" style={{ paddingBottom: '1.3em' }}>
                            <Col md={12}>
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
                            <Button variant="dark" type="submit" className="w-100 custom-button custom-button:hover" style={{ marginTop: '0.3em', marginBottom: '1em', maxWidth: '120px', bsBtnHoverBg: '#0cc0df', bsBtnBg: '#0cc0df' }}>
                                Iniciar Sesión
                            </Button>
                        </div>
                    </Form>
                    <p className="text-center mt-3">
                        ¿No tienes una cuenta?{' '}
                        <Link to="/CrearCuenta" style={{ color: '#0cc0df', textDecoration: 'none', fontWeight: 'bold' }}>
                            <span style={{ textDecoration: 'none' }}>Regístrate aquí</span>
                        </Link>
                    </p>
                </div>
            </div>
        </Container>
    );
};

export default Login;
