import Navbar_Ho from "../../components/Navbar_Ho";

const About_Us = () => {
  return (
    <>
      <Navbar_Ho />
      <div className="about_Us_Page">
        <div></div>
        <div className="about_Us_Container">
          <div className="Team_Info">
            <div className="Info_Area">
              <div className="info_InnerText">
                <h1>Have any questions?</h1>
                <div className="text_AreasInfo">
                  <textarea
                    value={
                      "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"
                    }
                    className="text1"
                    disabled
                  ></textarea>
                  <textarea
                    value={
                      "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"
                    }
                    className="text2"
                    disabled
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="card_Area"></div>
          </div>
          <div className="Form_And_Questions">
            <div className="card_Area"></div>
            <div className="Info_AreaForm">
              <div className="tittle_Ab">
                <h1>Contact ME!</h1>
                <textarea
                  className="text3"
                  value={
                    "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"
                  }
                  disabled
                ></textarea>
              </div>
              <form action="" className="about_form">
                <input
                  type="text"
                  placeholder="Email address"
                  className="inpAb"
                />
                <input
                  type="text"
                  placeholder="Ur question"
                  className="inAb2"
                />
                <button className="btn_Ab">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About_Us;
