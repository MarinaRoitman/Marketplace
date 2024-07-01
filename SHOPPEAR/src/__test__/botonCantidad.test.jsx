import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BotonCantidad from './BotonCantidad.jsx';

// Configurar babel para Jest
require('@babel/register')({
    presets: ['@babel/preset-env', '@babel/preset-react']
});

describe('BotonCantidad Component', () => {
    test('debe incrementar el contador cuando se hace clic en el botón de incremento', () => {
        const setMount = jest.fn();
        const onClick = jest.fn();
        render(<BotonCantidad mount={1} setMount={setMount} onClick={onClick} />);

        const incrementButton = screen.getByText('+');
        fireEvent.click(incrementButton);

        expect(setMount).toHaveBeenCalledWith(2);
        expect(onClick).toHaveBeenCalledWith(2);
    });

    test('debe decrementar el contador cuando se hace clic en el botón de decremento', () => {
        const setMount = jest.fn();
        const onClick = jest.fn();
        render(<BotonCantidad mount={2} setMount={setMount} onClick={onClick} />);

        const decrementButton = screen.getByText('-');
        fireEvent.click(decrementButton);

        expect(setMount).toHaveBeenCalledWith(1);
        expect(onClick).toHaveBeenCalledWith(1);
    });

    test('no debe decrementar el contador por debajo de 1', () => {
        const setMount = jest.fn();
        const onClick = jest.fn();
        render(<BotonCantidad mount={1} setMount={setMount} onClick={onClick} />);

        const decrementButton = screen.getByText('-');
        fireEvent.click(decrementButton);

        expect(setMount).not.toHaveBeenCalled();
        expect(onClick).not.toHaveBeenCalled();
    });
});