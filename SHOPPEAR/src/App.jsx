import './App.css';
import Navbar from './Components/Navbar/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Menu/menu.jsx';
import Electronica from './Pages/Electronica/electronica.jsx';
import Hombre from './Pages/Hombre/hombre.jsx';
import Mujer from './Pages/Mujer/mujer.jsx';
import Niños from './Pages/Chicos/Niños.jsx';
import Mascotas from './Pages/Mascotas/mascotas.jsx';
import Account from './Pages/Cuenta/cuenta.jsx';

function App() {
  return (
    <div>
          <Router>
            
            <Navbar></Navbar>
            
            <Routes>
              <Route path="/" exact element={<Home />}></Route>
              <Route path="/Electronica" element={<Electronica />}></Route>
              <Route path="/Hombre" element={<Hombre />}></Route>
              <Route path="/Mujer" element={<Mujer />}></Route>
              <Route path="/Niños" element={<Niños />}></Route>
              <Route path="/Mascotas" element={<Mascotas />}></Route>
              <Route path="/Cuenta" element={<Account />}></Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
