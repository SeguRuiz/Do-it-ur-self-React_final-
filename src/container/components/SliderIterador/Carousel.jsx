import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SliderContainer from "./SliderContainer";
import { useTheContext } from "../../../context/ContextProvider";

const CarouselS = () => {
  const { producstData } = useTheContext();
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      centerMode
      autoPlaySpeed={1000}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      custo
      itemClass="carousel-item-padding-40-px"
    >
      <SliderContainer
        text={producstData[0].Description}
        Img={producstData[0].Img}
      />
      <SliderContainer
        text={producstData[1].Description}
        Img={producstData[1].Img}
      />
      <SliderContainer
        text={producstData[2].Description}
        Img={producstData[2].Img}
      />
      <SliderContainer
        text={producstData[3].Description}
        Img={producstData[3].Img}
      />
      <SliderContainer
        text={producstData[4].Description}
        Img={producstData[4].Img}
      />
      <SliderContainer
        text={producstData[5].Description}
        Img={producstData[5].Img}
      />
    </Carousel>
  );
};

export default CarouselS;
