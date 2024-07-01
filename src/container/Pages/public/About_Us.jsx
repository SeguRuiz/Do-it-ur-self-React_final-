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
          <div className="Developer_Info">
            <div className="textts">
              <div className="big_text">
                Esto es un texto muy creativo,
                <br />e inspiracional
              </div>
              <br />
              <div className="small_Text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                Delectus blanditiis commodi cum rem autem quod aliquam eum. <br />
                Eveniet non commodi alias necessitatibus facilis fugiat illum <br />
                dolor corporis, repudiandae recusandae accusantium.
              </div>
              <br />
              <br />
              <div className="small_Text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                Delectus blanditiis commodi cum rem autem quod aliquam eum. <br />

              </div>
               <br />
               <br />
               <br />
               <div className="big_text">
                Lorem ipsum dolor sit am <br />
                 adipisicing elit
              </div>
              <br />
              <br />
              <div className="small_Text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                Delectus blanditiis commodi cum rem autem quod aliquam eum. <br />
                Eveniet non commodi alias necessitatibus facilis fugiat illum <br />
                dolor corporis, repudiandae recusandae accusantium.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About_Us;
