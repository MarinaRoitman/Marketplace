import React, { useEffect, useState } from "react";
import "./botonCantidad.css";
import { Button } from "react-bootstrap";

const BotonCantidad = ({ mount, setMount, onClick }) => {

    const handleIncrementCounter = () => {
        setMount(mount + 1);
        onClick(mount + 1);
    };

    const handleDecrementCounter = () => {
        if (mount > 1) {
            setMount(mount - 1);
            onClick(mount - 1);
        }
    };

    return (
        <div className="btn-grupo">
            <Button variant='dark' className="decrement-btn" onClick={handleDecrementCounter}>
                <span className="material-symbols-outlined">-</span>
            </Button>
            <p className="p-style">{mount}</p>
            <Button variant='dark' className="increment-btn" onClick={handleIncrementCounter}>
                <span className="material-symbols-outlined">+</span>
            </Button>
        </div>
    );
};

export default BotonCantidad;