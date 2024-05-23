import React from "react";
import Carousel from "react-bootstrap/Carousel";

function CarouselSlider() {
  return (
    <div className="Carousel">
      <Carousel interval={null}>
        <Carousel.Item>
          <img src={require("../../img/slider/1.webp")} text="First slide" />
          <div className="black_layer">
            <div className="container">
              <h1>Welcome to GHS Kahuwa</h1>
              <p>
                Empowering students with quality education and holistic
                development for a brighter future.
              </p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img src={require("../../img/slider/2.webp")} text="Second slide" />
          <div className="black_layer">
            <div className="container">
              <h1>Welcome to GHS Kahuwa</h1>
              <p>
                Empowering students with quality education and holistic
                development for a brighter future.
              </p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img src={require("../../img/slider/3.webp")} text="Third slide" />
          <div className="black_layer">
            <div className="container">
              <h1>Welcome to GHS Kahuwa</h1>
              <p>
                Empowering students with quality education and holistic
                development for a brighter future.
              </p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselSlider;
