import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/footer";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Menu/menu.jsx";
import Electronica from "./Pages/Electronica/electronica.jsx";
import Hombre from "./Pages/Hombre/hombre.jsx";
import Mujer from "./Pages/Mujer/mujer.jsx";
import Niños from "./Pages/Chicos/Niños.jsx";
import Mascotas from "./Pages/Mascotas/mascotas.jsx";
import Account from "./Pages/Cuenta/cuenta.jsx";
import Pago from './Pages/Pago/pago.jsx';
import PruebaDisplay from "./Pages/pruebaDisplay/prueba.jsx";

function App() {
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
          <Route path="/holi" element={<PruebaDisplay />}></Route>

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
/*
          <Route path="/producto/:id" element={<ProductosDisplay />} />
*/