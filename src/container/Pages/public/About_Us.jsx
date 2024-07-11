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
                <h1>Contactame</h1>
                <textarea
                  className="text3"
                  value={
                    "El desarrollador es algo despistado, pero no te preocupes te aseguro que atendera tu duda!"
                  }
                  disabled
                ></textarea>
              </div>
              <form action="" className="about_form">
                <input
                  type="text"
                  placeholder="Tu correo electronico"
                  className="inpAb"
                />
                <textarea
                  className="inAb2"
                  placeholder="Cual es tu pregunta?"
                ></textarea>
                <button className="btn_Ab">Subir</button>
              </form>
            </div>
          </div>
          <div className="Developer_Info">
            <div className="textts">
              <div className="big_text">
                Cuales son nuestros
                <br />objetivos?
              </div>
              <br />
              <div className="small_Text">
                Queremos crear un lugar en que cada tipo de artista obtenga <br />
                los articulos que necesite de la forma mas accesible posible
              </div>
              <br />
              <br />
              <div className="small_Text">
                De esta forma evitar que abandone lo que le apasiona por la falta de material <br />
                ya que es un problema muy comun entre los artistas.<br />

              </div>
               <br />
               <br />
               <br />
               <div className="big_text">
                Tener una comunidad que impulse <br />
                a otros.
              </div>
              <br />
              <br />
              <div className="small_Text">
                Los artistas tenemos algo en comun, nos gustas enseñar nuestras
                creaciones, entonces no es mejor tener esas dos cosas en un solo lugar<br />
                con la posibilidad de ver el trabajo de los demas y que usaron <br />
                te preguntarias ¡Donde consigo esos productos!, aqui mismo!
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About_Us;
