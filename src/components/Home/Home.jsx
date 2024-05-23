import React from "react";
import "./StyleHome.css";
import Carousel from "./Carousel";
import { AnnouncmentData } from "../../Data";

function Home() {
  return (
    <div className="Home">
      <Carousel />
      <div className="Announcments">
        <div className="head">
          <h1>
            <span>IMPORTANT</span> ANNOUNCEMENTS
          </h1>
          <p>
            <span></span>
          </p>
        </div>
        <div className="announcments_container">
          {AnnouncmentData.map((item, index) => (
            <div className="info" key={index}>
              <div className="sub">
                <p>{item.sub}</p>
              </div>
              <div className="des">
                <p>{item.des}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="About">
        <div className="head">
          <h1>
            ABOUT <span>GHS</span> KAHUWA
          </h1>
          <p>
            <span></span>
          </p>
        </div>
        <div className="about_container">
          <div className="Left">
            <div className="image">
              <img src={require("../../img/about.webp")} />
            </div>
          </div>
          <div className="Right">
            <p>
              GHS Kahuwa is a premier educational institution dedicated to
              nurturing young minds and fostering a passion for learning. With a
              commitment to academic excellence and holistic development, we
              offer a supportive and inclusive environment where students
              thrive. Our experienced faculty, modern facilities, and diverse
              extracurricular programs ensure that every student receives a
              well-rounded education. Join us at GHS Kahuwa, where we shape the
              leaders of tomorrow.
            </p>
            <button>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
