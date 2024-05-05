import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from '/assets/logo.png'; 

function Footer() {
    const linkStyle = {
        color: 'black', 
        textDecoration: 'none' 
    };

    return (
        <footer style={{ backgroundColor: '#f8f9fa', padding: '20px 0', marginTop: '20px' }}>
            <Container>
                <Row>
                    <Col xs={12} md={4} style={{marginTop:'0.1sem'}}>
                        <Row>
                            <Col xs="auto">
                                <img src={Logo} alt="Logo" style={{ width: '4em'}} />
                            </Col>
                            <Col>
                                <div>
                                    <h5>¡Contactanos!</h5>
                                    <p style={{marginBottom: '5px'}}>Teléfono: 0800-122-8233</p>
                                    <p style={{marginBottom: '5px'}}>Email: info@SHOPPEAR.com</p>
                                    <p>Dirección: Libertad 1340, C1016 CABA</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} md={4}>
                        <h5>Enlaces Rápidos</h5>
                        <ul style={{ listStyleType: 'none', padding: 0 }}>
                            <li><a href="/" style={linkStyle}>Inicio</a></li>
                            <li><a href="/Mujer" style={linkStyle}>Mujer</a></li>
                            <li><a href="/Hombre" style={linkStyle}>Hombre</a></li>
                            <li><a href="/Niños" style={linkStyle}>Niños</a></li>
                            <li><a href="/Mascotas" style={linkStyle}>Mascotas</a></li>
                            <li><a href="/Electronica" style={linkStyle}>Electronica</a></li>
                        </ul>
                    </Col>
                    <Col xs={12} md={4}>
                        <h5>Seguínos en Redes</h5>
                        <ul style={{ listStyleType: 'none', padding: 0 }}>
                            <li><a href="https://facebook.com/tupagina" style={linkStyle} target="_blank">Facebook</a></li>
                            <li><a href="https://twitter.com/tupagina" style={linkStyle} target="_blank">Twitter</a></li>
                            <li><a href="https://instagram.com/tupagina" style={linkStyle} target="_blank">Instagram</a></li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p style={{ textAlign: 'center', marginTop: '20px' }}>© 2024 SHOPPEAR. Todos los derechos reservados.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;