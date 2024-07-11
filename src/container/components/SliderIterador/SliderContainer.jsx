import "./slider.css";

const sliderContainer = ({ Title, Img, text }) => {
  return (
    <div className="sliderContainer">
      <div className="imgArea">
        <img src={Img} alt="" className="sliderImg" />
      </div>
      <div className="DescriptionArea">
        <textarea className="descriptionS" disabled value={text}></textarea>
      </div>
    </div>
  );
};

export default sliderContainer;
