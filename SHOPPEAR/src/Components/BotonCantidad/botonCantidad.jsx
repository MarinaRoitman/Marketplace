import React, { useState } from "react";
import "./botonCantidad.css";
import { Button } from "react-bootstrap";

const BotonCantidad = ({ minValue = 0, maxValue = 100 }) => {
    const [count, setCount] = useState(minValue);

    const handleIncrementCounter = () => {
        if (count < maxValue) {
            setCount((prevState) => prevState + 1);
        }
    };

    const handleDecrementCounter = () => {
        if (count > minValue) {
            setCount((prevState) => prevState - 1);
        }
    };

    return (
        <div className="btn-grupo">
            <Button variant='dark' className="increment-btn" onClick={handleIncrementCounter}>
                <span className="material-symbols-outlined">+</span>
            </Button>
            <p className="p-style">{count}</p>
            <Button variant='dark' className="decrement-btn" onClick={handleDecrementCounter}>
                <span className="material-symbols-outlined">-</span>
            </Button>
        </div>
    );
};

export default BotonCantidad;