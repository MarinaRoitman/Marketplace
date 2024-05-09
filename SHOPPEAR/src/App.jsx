import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import {useSelector, useDispatch} from 'react-redux'
import {useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Menu/menu.jsx";
import Electronica from "./Pages/Electronica/electronica.jsx";
import Hombre from "./Pages/Hombre/hombre.jsx";
import Mujer from "./Pages/Mujer/mujer.jsx";
import Niños from "./Pages/Chicos/Niños.jsx";
import Mascotas from "./Pages/Mascotas/mascotas.jsx";
import Account from "./Pages/Cuenta/cuenta.jsx";
import Pago from './Pages/Pago/pago.jsx';
import ProductosDisplay from "./Components/ProductosDisplay/productosDisplay.jsx";
import Login from "./Pages/Login/login.jsx";
import CrearCuenta from "./Pages/CrearCuenta/crearCuenta.jsx";
import {startSearch} from "./redux/actions/search.actions.js";

function App() {
  const items = useSelector((state)=> state.products.products)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startSearch(items))
  }, []);

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/Electronica" element={<Electronica />}></Route>
          <Route path="/Hombre" element={<Hombre />}></Route>
          <Route path="/Mujer" element={<Mujer />}></Route>
          <Route path="/Niños" element={<Niños />}></Route>
          <Route path="/Mascotas" element={<Mascotas />}></Route>
          <Route path="/Cuenta" element={<Account />}></Route>
          <Route path="/Pago" element={<Pago />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/CrearCuenta" element={<CrearCuenta />}></Route>
          <Route path="/producto/:searchID" element={<ProductosDisplay />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
