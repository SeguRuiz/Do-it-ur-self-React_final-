import Navbar_Ho from "../../components/Navbar_Ho";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import CarouselS from "../../components/SliderIterador/Carousel";

const Home = () => {
  
  return (
    <>
      <Navbar_Ho />
      <div className="home_grid">
        <div></div>
        <div className="home_area">
          <div className="PrincipalArea">
          info Area
          </div>
           <div className="featuredArea"></div>
           <CarouselS/>
        </div>
      </div>
    </>
  );
};

export default Home;
