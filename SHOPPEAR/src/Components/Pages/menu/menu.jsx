import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/banner';
import Card from './Components/Card/card';

function menu() {
  return (
    <div >
      <Navbar></Navbar>
      <Banner></Banner>
      <div></div>
      <Card></Card>

    </div>
  );
}

export default menu;