import React, { useState } from "react";
import "./botonCantidad.css";
import { Button } from "react-bootstrap";

const BotonCantidad = ({ mount, onClick }) => {
    const [count, setCount] = useState(mount);

    const handleIncrementCounter = () => {
        setCount((count) => count + 1);
        onClick(count + 1)
    };

    const handleDecrementCounter = () => {
        if (count > 1) {
            setCount((count) => count - 1);
            onClick(count - 1)
        }
    };

    return (
        <div className="btn-grupo">
            <Button variant='dark' className="decrement-btn" onClick={handleDecrementCounter}>
                <span className="material-symbols-outlined">-</span>
            </Button>
            <p className="p-style">{count}</p>
            <Button variant='dark' className="increment-btn" onClick={handleIncrementCounter}>
                <span className="material-symbols-outlined">+</span>
            </Button>
        </div>
    );
};

export default BotonCantidad;