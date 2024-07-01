import Navbar_Ho from "../../components/Navbar_Ho";

const Home = () => {
  return (
    <>
      <Navbar_Ho />
      <div className="home_grid">
        <div></div>
        <div className="home_area">
          <div className="Tittle_Home">
            <div className="MainText_Home">
              <div className="big_textHome">Im a big text!</div>

              <div className="small_Text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                Delectus blanditiis commodi.
                <br />
              </div>
            </div>
            <div className="slider_Container">
              <div className="slider">
                <div className="sliderBtn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="40px"
                    viewBox="0 -960 960 960"
                    width="30px"
                    fill="#8bb4f8"
                    className="arrow1"
                  >
                    <path d="M400-80 0-480l400-400 61 61.67L122.67-480 461-141.67 400-80Z" />
                  </svg>
                </div>
              </div>
              <div className="Categories_Show">
                iterador de categorias (Wip)
              </div>
              <div className="slider">
                <div className="sliderBtn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="40px"
                    viewBox="0 -960 960 960"
                    width="30px"
                    fill="#8bb4f8"
                  >
                    <path d="m309.67-81.33-61-61.67L587-481.33 248.67-819.67l61-61.66 400 400-400 400Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="general_Information">
            <div className="community_Link">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="120px"
                  viewBox="0 -960 960 960"
                  width="120px"
                  fill="#8bb4f8"
                  className="iconAdd2"
                >
                  <path d="M280.67-240q-15 0-27.84-13.17Q240-266.33 240-281.33v-92h506.67V-720H840q15 0 27.5 13.17Q880-693.67 880-678v597.33L720.67-240h-440ZM80-280v-558.67q0-15 12.5-28.16Q105-880 120-880h519.33q15.67 0 28.17 12.83 12.5 12.84 12.5 28.5v357.34q0 15-12.5 28.16Q655-440 639.33-440H240L80-280Zm533.33-226.67v-306.66H146.67v306.66h466.66Zm-466.66 0v-306.66 306.66Z" />
                </svg>
              </div>
              <p>Community</p>
            </div>
            <div>
              <div className="big_texthome">
                ¿Searching feedBack <br />
                or wanna share ur art?
              </div>
              <br />
              <div className="small_TextHome">
                Check out ur community and see others arts!
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
