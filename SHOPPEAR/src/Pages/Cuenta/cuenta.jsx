import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Modal } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import Tab from 'react-bootstrap/Tab';
import './cuenta.css'
import { Persona, Descuento, VerProducto, CrearProd} from '../../Components/Iconos/iconos.jsx';
import Form from 'react-bootstrap/Form';
import Figure from 'react-bootstrap/Figure';
import imgTest from '/assets/MUJER/mj1.jpg';
import BotonCantidad from '../../Components/BotonCantidad/botonCantidad.jsx';
import CardEditable from '../../Components/cardEditable/cardEditable.jsx';
import { useSelector, useDispatch } from "react-redux";
import { modificarUsuario } from '../../redux/actions/auth.actions.js';
import React, { useState, useEffect } from 'react';
import { fetchProductosByIdUsuario } from '../../redux/actions/products.actions.js';

function MyVerticallyCenteredModal(props) {
    const dispatch = useDispatch();
    const { isAuthenticated, user, users, datosUsuario } = useSelector(state => state.auth);

    const [mail, setMail] = useState(datosUsuario.mail);
    const [nombreUsuario, setNombreUsuario] = useState(datosUsuario.username);
    const [nombre, setNombre] = useState(datosUsuario.nombre);
    const [apellido, setApellido] = useState(datosUsuario.apellido);
    const [password, setPassword] = useState(datosUsuario.password);
    const [direccion, setDireccion] = useState(datosUsuario.direccion);

    const modificarDatos = () => {
        dispatch(modificarUsuario(user, nombre, apellido, mail, password, direccion, nombreUsuario));
    };

    const handleButtonClick = () => {
        modificarDatos();
        props.onHide();
    };

return (
    <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    >
    <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        Cambiar mis Datos
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <Form>
                <Row className="justify-content-center" style={{paddingBottom: '1.3em'}}>
                    <Col md={6}>
                        <Form.Group controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="text"
                                defaultValue={datosUsuario.mail}
                                onChange={(e) => setMail(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="justify-content-center" style={{paddingBottom: '1.3em'}}>
                    <Col md={6}>
                        <Form.Group controlId="username">
                            <Form.Label>Usuario</Form.Label>
                            <Form.Control
                                type="text"
                                defaultValue={datosUsuario.username}
                                onChange={(e) => setNombreUsuario(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="justify-content-center" style={{paddingBottom: '1.3em'}}>
                    <Col md={6}>
                        <Form.Group controlId="nombre">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                type="text"
                                defaultValue={datosUsuario.nombre}
                                onChange={(e) => setNombre(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="justify-content-center" style={{paddingBottom: '1.3em'}}>
                    <Col md={6}>
                        <Form.Group controlId="apellido">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control
                                type="text"
                                defaultValue={datosUsuario.apellido}
                                onChange={(e) => setApellido(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="justify-content-center" style={{paddingBottom: '1.3em'}}>
                    <Col md={6}>
                        <Form.Group controlId="password">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Contraseña"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="justify-content-center" style={{paddingBottom: '1.3em'}}>
                    <Col md={6}>
                        <Form.Group controlId="direccion">
                            <Form.Label>Dirección</Form.Label>
                            <Form.Control
                                type="text"
                                defaultValue={datosUsuario.direccion}
                                onChange={(e) => setDireccion(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                </Row>
        </Form>
    </Modal.Body>
    <Modal.Footer>
        <Button onClick={handleButtonClick} variant='dark'>
        Guardar cambios
        </Button>
    </Modal.Footer>
    </Modal>
);
}

function Cuenta() {
    const dispatch = useDispatch();
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [cantProd, setCantProd] = useState(0);
    const [category, setCategory] = useState('');

    const { isAuthenticated, user, users, datosUsuario } = useSelector(state => state.auth);
    
    

    const handleClickMount = (value) => {
        if(value > 0){
            setCantProd(value)
        }
    }

    const productos = useSelector(state => state.products.productosByIdUsuario);
    const products = useSelector((state) => state.products.products);
    useEffect(() => {
        dispatch(fetchProductosByIdUsuario(user))
    }, [products]);
    
    const crearProducto = () => {
        //desp vemos
    };

    const [productName, setProductName] = useState(''); 
    const [discountPercentage, setDiscountPercentage] = useState(''); 
    const [modalShow, setModalShow] = useState(false); 
    
    const agregarDescuento = () => {
        //tengo que checkear que solo pueda ponerle descuento a los productos, no los products
        
    }

    

    function createDiscount(){
        const itemsUpdate = products.map((item) => {
            if(item.nombre.toLowercase() == productName.toLowercase()){
                
    
                return {...item, descuento: discountPercentage}
            }
            return item
        });
        dispatch(editExistingProduct(itemsUpdate));
        setShow(false);
    }

    function createDiscount(){
        const itemsUpdate = products.map((item) => {
            const itemCart = cartItems.find((i) => i.id === item.id);
            if(itemCart){
                
                //item.stock = item.stock - itemCart.mount;

                return {...item, stock: item.stock - itemCart.mount}
            }
            return item
        });
        setShow(true);
        //dispatch(editExistingProduct(itemsUpdate));
        dispatch(discountStock(itemsUpdate));
    }

return (
    <div style={{paddingBottom:'2em'}}>
            <hr />
            <div style={{ padding: '2em', marginBottom: '2em', textAlign: 'center' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                <h1 style={{ margin: 0 }}>
                ¡Hola<span style={{ color: '#0cc0df' }}> {datosUsuario.nombre}</span>!
                    </h1>
                </div>
            </div>
<Tab.Container id="list-group-item.active" defaultActiveKey="#link1">
    <Row>
    <Col sm={3}>
        <ListGroup>
        <ListGroup.Item action href="#link1" style={{ width: '80%', marginLeft: '4em', height: '4em',textAlign: 'center',alignItems: 'center',display: 'flex',justifyContent: 'space-around'}}>
            Mis Datos
        </ListGroup.Item>
        <ListGroup.Item action href="#link2" style={{ width: '80%', marginLeft: '4em', height: '4em',textAlign: 'center',alignItems: 'center',display: 'flex',justifyContent: 'space-around'}}>
            Mis Publicaciones
        </ListGroup.Item>
        <ListGroup.Item action href="#link3" style={{ width: '80%', marginLeft: '4em', height: '4em',textAlign: 'center',alignItems: 'center',display: 'flex',justifyContent: 'space-around'}}>
            Crear Producto
        </ListGroup.Item>
        <ListGroup.Item action href="#link4" style={{ width: '80%', marginLeft: '4em', height: '4em',textAlign: 'center',alignItems: 'center',display: 'flex',justifyContent: 'space-around'}}>
            Crear Descuento
        </ListGroup.Item>

        </ListGroup>
    </Col>
    <Col sm={6} style={{display: 'contents'}}>
        <Tab.Content style={{width: '60%'}}>
        <Tab.Pane eventKey="#link1">
        <div style={{ display: 'inline-flex', alignItems: 'center', alignItems: 'baseline'}}>
        <Persona/>
        <h4 style={{marginLeft:'0.2em'}}>Mis Datos</h4>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        </div>
            <Form>
                <Row className="justify-content-center" style={{paddingBottom: '1.3em'}}>
                    <Col md={6}>
                        <Form.Group controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={datosUsuario.mail}
                                aria-label="Disabled input example"
                                readOnly
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="justify-content-center" style={{paddingBottom: '1.3em'}}>
                    <Col md={6}>
                        <Form.Group controlId="username">
                            <Form.Label>Usuario</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={datosUsuario.username}
                                aria-label="Disabled input example"
                                readOnly
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="justify-content-center" style={{paddingBottom: '1.3em'}}>
                    <Col md={6}>
                        <Form.Group controlId="nombre">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={datosUsuario.nombre}
                                aria-label="Disabled input example"
                                readOnly
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="justify-content-center" style={{paddingBottom: '1.3em'}}>
                    <Col md={6}>
                        <Form.Group controlId="apellido">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={datosUsuario.apellido}
                                aria-label="Disabled input example"
                                readOnly
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="justify-content-center" style={{paddingBottom: '1.3em'}}>
                    <Col md={6}>
                        <Form.Group controlId="direccion">
                            <Form.Label>Dirección</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={datosUsuario.direccion}
                                aria-label="Disabled input example"
                                readOnly
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <div style={{display: 'flex', justifyContent: 'flex-end', marginTop:'1em'}}>
                        <Button variant="dark" onClick={() => setModalShow(true)}>
                            Cambiar mis datos
                        </Button>
                </div>
            </Form>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </Tab.Pane>


        <Tab.Pane eventKey="#link2">
                                <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                                    <VerProducto />
                                    <h4 style={{ marginLeft: '0.2em' }}>Ver Publicaciones</h4>
                                </div>
                                <div className='products'>
                                    {productos.map(prod =>
                                        <CardEditable
                                            key={prod.id}
                                            id={prod.id}
                                            name={prod.nombre}
                                            price={prod.precio}
                                            img={prod.img}
                                            description={prod.descripcion}
                                        />
                                    )}
                                </div>
                            </Tab.Pane>


        <Tab.Pane eventKey="#link3">
        <div style={{ display: 'inline-flex', alignItems: 'center'}}>
            <CrearProd/>
            <h4 style={{ marginLeft: '0.2em' }}>Crear Producto</h4>
        </div>
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                type="name"
                placeholder="Nombre del Producto"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
                autoFocus
                />
            </Form.Group>
            <Row>
                <Col>
                <Form style={{ width: '50%' }}>
                <Form.Label>Precio</Form.Label>
                <Form.Control
                type="number"
                placeholder="Precio"
                value={precio}
                onChange={(e) => setPrecio(e.target.value)}
                required
                autoFocus
                />
                </Form>
                </Col>
                <Col>
                    <Form.Label>Cantidad</Form.Label>
                    <BotonCantidad mount={cantProd} onClick={handleClickMount}/>
                </Col>
            </Row>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Descripción</Form.Label>
                <Form.Control as="textarea" rows={3} 
                placeholder="Descripción"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                required
            />
            </Form.Group>
            <Form.Select aria-label="Seleccionar Categoría" onChange={(e) => setCategory(e.target.value)}>
                <option>Seleccionar Categoría</option>
                <option value="Hogar">Hogar</option>
                <option value="Mujer">Mujer</option>
                <option value="Hombre">Hombre</option>
                <option value="Mascotas">Mascotas</option>
                <option value="Electrónica">Electrónica</option>
            </Form.Select>
            <br />
            <div className="img-div">
            <Figure>
            <Figure.Image
                alt="171x180"
                src={imgTest}
                />
            </Figure>
        </div>
            <Form.Label>Agregar Foto</Form.Label>
            <Form.Group controlId="formFile">
            <Form.Control type="file" style={{width:'65%'}}/>
            </Form.Group>
            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                <Button variant="dark" type='submit'>
                    Publicar Producto
                </Button>
            </div>
        </Form>
        </Tab.Pane>


        <Tab.Pane eventKey="#link4">
        <div style={{ display: 'inline-flex', alignItems: 'center', alignItems: 'baseline', alignItems: 'flex-start'}}>
            <Descuento/>
        <h4 style={{marginLeft:'0.2em'}}>Crear Descuento</h4>
        </div>
        <Form.Group onSubmit={createDiscount}>
            <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Nombre del producto:</Form.Label>
                <Form.Control
                    type="text" 
                    placeholder="Nombre del Producto"
                    value={productName} 
                    onChange={(e) => setProductName(e.target.value)}
                    autoFocus
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                <Form.Label>Descuento (%):</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Descuento"
                    value={discountPercentage}
                    onChange={(e) => setDiscountPercentage(e.target.value)} 
            />
            <div style={{display: 'flex', justifyContent: 'flex-end', marginTop:'1em'}}>
                <Button variant="dark" type='submit'>
                    Aplicar
                </Button>
            </div>
            </Form.Group>
            </Form>
        </Form.Group>
        </Tab.Pane>

        </Tab.Content>
    </Col>
    </Row>
</Tab.Container>
</div>
);
}

export default Cuenta;

