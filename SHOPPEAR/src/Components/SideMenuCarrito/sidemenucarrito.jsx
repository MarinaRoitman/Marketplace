import React from 'react'
import './SideMenuCarrito.css'


const [count, setCount] = useState(0)

const [estaAbierto, abrirMenuCostado] = useState(false)
const abiertoMenuCostado = () => abrirMenuCostado(true)
const cerrarMenuCostado = () => abrirMenuCostado(false)

const SideMenuCarrito = () => {

  return (
    <div>
    <h1>Ola</h1>
    </div>
);
}

export default SideMenuCarrito