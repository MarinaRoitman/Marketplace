import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useSelector, useDispatch } from "react-redux";

function Example() {
const [show, setShow] = useState(false);

const products = useSelector((state) => state.products.products);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

const [productName, setProductName] = useState(''); // Estado para el nombre del producto
const [discountPercentage, setDiscountPercentage] = useState(''); // Estado para el porcentaje de descuento


function createDiscount(){
    console.log(productName)
    console.log(products)

    const itemsUpdate = products.map((item) => {
        if(item.nombre.toLowercase() == productName.toLowercase()){
            

            return {...item, descuento: discountPercentage}
        }
        return item
    });
    dispatch(editExistingProduct(itemsUpdate));
    console.log(itemsUpdate);
    setShow(false);
}

function createDiscount(){
        console.log(products)
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
        //console.log("patito",itemsUpdate);
        dispatch(discountStock(itemsUpdate));

    }

return (
    <>
        <Button variant="info" onClick={handleShow} style={{margin:'1em'}}>
        Crear Descuento
        </Button>
        <Modal size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered 
        show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Crear Descuento</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form.Group onSubmit={createDiscount}>
            <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Nombre del producto:</Form.Label>
                <Form.Control
                    type="text" 
                    placeholder="Nombre del Producto"
                    value={productName} // Valor del estado
                    onChange={(e) => setProductName(e.target.value)} // Actualiza el estado
                    autoFocus
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                <Form.Label>Descuento (%):</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Descuento"
                    value={discountPercentage} // Valor del estado
                    onChange={(e) => setDiscountPercentage(e.target.value)} // Actualiza el estado
            />
            <Button variant="dark" type="submit" onClick={handleClose} style={{marginTop:'1em'}}>
                Agregar
            </Button>
            </Form.Group>
        </Form>
            </Form.Group>
        </Modal.Body>

    </Modal>
    
    </>
);
}

export default Example;


/*



         <div style={{ display: 'block' }}>
                    Producto: <input type="text" placeholder='Inserte Producto' name="fname"/>
                </div>
                <div style={{ display: 'block' }}>
                    Inserte(%): <input type="text" placeholder='Inserte Descuento' name="fname"/>
                    <Button variant="dark" type="submit" onClick={handleClose} style={{marginLeft:'1em'}}>
                        Agregar
                    </Button>
                </div>
                

*/