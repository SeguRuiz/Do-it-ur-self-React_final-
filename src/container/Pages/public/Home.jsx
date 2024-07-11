import Navbar_Ho from "../../components/Navbar_Ho";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Footer from "../../components/Footer";
import Community2 from "../../../assets/imgs/Community3.svg";

import CarouselS from "../../components/SliderIterador/Carousel";

const Home = () => {
  return (
    <>
      <Navbar_Ho />
      <div className="home_grid">
        <div></div>
        <div className="home_area">
          <div className="PrincipalArea"></div>
          <div className="featuredArea">
            <div className="featuredInfo">
              <p className="featuredText">Dale un vistazo a los destacados de la semana!</p>
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
                  Lorem ipsum dolor sit am <br />
                  adipisicing elit
                </div>
                <br />
                <br />
                <div className="SubText">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                  <br />
                  Delectus blanditiis commodi cum rem autem quod aliquam eum.{" "}
                  <br />
                  Eveniet non commodi alias necessitatibus facilis fugiat illum{" "}
                  <br />
                  dolor corporis, repudiandae recusandae accusantium.
                </div>
                <div>
                  <button className="ComunnityBtn">
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
