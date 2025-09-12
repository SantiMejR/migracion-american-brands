import CarruselAutomatico from "../components/CarruselAutomatico";
import Footer from "../components/Footer";

import CarruselManual from "../components/CarruselManual";
import CarruselFits from "../components/CarruselFits";

const Home = ({ agregarAlCarrito }) => {
  return (
    <div>
      
      <CarruselAutomatico />
      <CarruselFits agregarAlCarrito={agregarAlCarrito} />
      <CarruselManual/>
      <Footer/>
    </div>
  );
};

export default Home;