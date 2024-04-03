import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/banner';
import Card from './Components/Card/card';
import Footer from './Components/Footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Banner></Banner>
      <Card></Card>
      <Footer></Footer>
    </div>
  );
}

export default App;

