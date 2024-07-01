/*import React from "react";
import { render, fireEvent } from '@testing-library/react';
import BotonCantidad from "../Components/BotonCantidad/botonCantidad.jsx";

test('Test 1: Incrementa el contador y llama a onClick con el nuevo valor', () => {
    const setMount = jest.fn();
    const onClick = jest.fn();
    const { getByText } = render(<BotonCantidad mount={1} setMount={setMount} onClick={onClick} />);

    const incrementButton = getByText('+');
    fireEvent.click(incrementButton);

    expect(setMount).toHaveBeenCalled();
    expect(onClick).toHaveBeenCalled();
});*/