import Navbar_Ho from "../../components/Navbar_Ho";

const About_Us = () => {
  return (
    <>
      <Navbar_Ho />
      <div className="about_Us_Page">
        <div></div>
        <div className="about_Us_Container">
          <div className="Info_AreaForm">
            <div className="form">
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
              <textarea
                className="inAb2"
                placeholder="Write ur question down here!"
              ></textarea>
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
