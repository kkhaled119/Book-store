import "./Slider.css";
import FirstBook from "../../images/book1.png";
import SecondBook from "../../images/book2.png";
import ThirdBook from "../../images/book3.png";
import { useState } from "react";
const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (dirrection) => {
    if (dirrection === "left") {
      setSlideIndex(slideIndex - 1);
    } else {
      setSlideIndex(slideIndex + 1);
    }
  };
  return (
    <div className="slider-container">
      {slideIndex !== 0 && (
        <i
          onClick={() => handleClick("left")}
          className="bi bi-chevron-double-left arrow-left"
        ></i>
      )}
      <div
        style={{ transform: `translateX(${slideIndex * -100}vw)` }}
        className="slider-wrapper"
      >
        <div className="slide first-slide">
          <div className="slide-img-wrapper">
            <img src={FirstBook} alt="" />
          </div>
          <div className="slide-info-wrapper">
            <h1 className="slied-info-title">Book Store </h1>
            <p className="slide-info-desc">
              It's not just reading.it's living the adventure.
            </p>
          </div>
        </div>
        <div className="slide second-slide">
          <div className="slide-img-wrapper">
            <img src={SecondBook} alt="" />
          </div>
          <div className="slide-info-wrapper">
            <h1 className="slied-info-title">The Books For Everyone</h1>
            <p className="slide-info-desc">
              You can read at home or at the bookstore
            </p>
          </div>
        </div>

        <div className="slide third-slide">
          <div className="slide-img-wrapper">
            <img src={ThirdBook} alt="" />
          </div>
          <div className="slide-info-wrapper">
            <h1 className="slied-info-title">Check Out The New Titles</h1>
            <p className="slide-info-desc">
              We send you book you want at home.
            </p>
          </div>
        </div>
      </div>
      {slideIndex !== 2 && (
        <i
          onClick={() => handleClick("right")}
          className="bi bi-chevron-double-right arrow-right"
        ></i>
      )}
    </div>
  );
};

export default Slider;
