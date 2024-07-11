import Navbar_Ho from "../../components/Navbar_Ho";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Footer from "../../components/Footer";
import Community2 from "../../../assets/imgs/Community3.svg";
import Art from "../../../assets/imgs/Art.svg";
import { useNavigate } from "react-router-dom";

import CarouselS from "../../components/SliderIterador/Carousel";

const Home = () => {
  const navegar = useNavigate();

  const moveCom = () => {
    navegar("/Home/Community");
  };

  const moveProducts = () => {
    navegar("/Home/Products");
  };

  return (
    <>
      <Navbar_Ho />
      <div className="home_grid">
        <div></div>
        <div className="home_area">
          <div className="PrincipalArea">
            <div className="artArea">
              <img src={Art} alt="" className="artImg" />
            </div>
            <div className="ArtText">
              <div className="TitleInfo">
                Bienvenido al rincon de los artistas! <br />
              </div>
              <br />
              <br />
              <div className="SubText">
                Estas en busca de suplementos para tus trabajos artisticos? <br />
                O quieres compartir un poco de tu trabajo con otros artistas?{" "}
                <br />
                <br />
                Aqui encontraras lo mejor de esos dos mundos!{" "}
                
              </div>
              <div>
                <button className="ComunnityBtn" onClick={moveProducts}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="40px"
                    viewBox="0 -960 960 960"
                    width="40px"
                    fill="#2a3242"
                  >
                    <path d="M226.67-80q-27 0-46.84-19.83Q160-119.67 160-146.67v-506.66q0-27 19.83-46.84Q199.67-720 226.67-720h100v-6.67q0-64 44.66-108.66Q416-880 480-880t108.67 44.67q44.66 44.66 44.66 108.66v6.67h100q27 0 46.84 19.83Q800-680.33 800-653.33v506.66q0 27-19.83 46.84Q760.33-80 733.33-80H226.67Zm0-66.67h506.66v-506.66h-100v86.66q0 14.17-9.61 23.75-9.62 9.59-23.84 9.59-14.21 0-23.71-9.59-9.5-9.58-9.5-23.75v-86.66H393.33v86.66q0 14.17-9.61 23.75-9.62 9.59-23.84 9.59-14.21 0-23.71-9.59-9.5-9.58-9.5-23.75v-86.66h-100v506.66ZM393.33-720h173.34v-6.67q0-36.33-25.17-61.5-25.17-25.16-61.5-25.16t-61.5 25.16q-25.17 25.17-25.17 61.5v6.67ZM226.67-146.67v-506.66 506.66Z" />
                  </svg>
                  <p>Productos</p>
                </button>
              </div>
            </div>
          </div>
          <div className="featuredArea">
            <div className="featuredInfo">
              <p className="featuredText">
                Dale un vistazo a los destacados de la semana!
              </p>
            </div>
            <CarouselS />
          </div>
          <div className="communityInfoArea">
            <div className="communityLink">
              <div className="communityIlustration">
                <img src={Community2} alt="" className="communityImg" />
              </div>
            </div>
            <div className="CommunityInfo">
              <div className="communityText">
                <div className="TitleInfo">
                  Que mejor forma de inspirarse <br />
                  que compartiendo tu trabajo!
                </div>
                <br />
                <br />
                <div className="SubText">
                  Visita la seccion de nuestra comunidad {" "}
                  <br />
                  y mira cuantos diferentes usos tienen nuestros productos{" "}
                  <br />
                  quien sabe talves encuentres un amigo por ahi....{" "}
                  <br />
                  <br />
                  Nunca sueltes el pincel!
                </div>
                <div>
                  <button className="ComunnityBtn" onClick={moveCom}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="40px"
                      viewBox="0 -960 960 960"
                      width="40px"
                      fill="#2a3242"
                      className="forumIcon"
                    >
                      <path d="M280.67-240q-15 0-27.84-13.17Q240-266.33 240-281.33v-92h506.67V-720H840q15 0 27.5 13.17Q880-693.67 880-678v597.33L720.67-240h-440ZM80-280v-558.67q0-15 12.5-28.16Q105-880 120-880h519.33q15.67 0 28.17 12.83 12.5 12.84 12.5 28.5v357.34q0 15-12.5 28.16Q655-440 639.33-440H240L80-280Zm533.33-226.67v-306.66H146.67v306.66h466.66Zm-466.66 0v-306.66 306.66Z" />
                    </svg>
                    <p>Comunidad</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
