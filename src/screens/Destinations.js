import { LittleHeading, SecondaryHeading } from "./Service";
import Img1 from "../img/david-kohler-VFRTXGw1VjU-unsplash.jpg";
import Img2 from "../img/showkat-chowdhury-EEURnHmDVCk-unsplash.jpg";
import Img3 from "../img/alex-vasey-3lxrM5yvkcI-unsplash.jpg";
import { IoAirplaneSharp } from "react-icons/io5";
import ShapeImg from "../img/destination-shape.svg";

/////////////// SECTION TOP SELLING ///////////////
export function Destinations() {
  return (
    <div className="section shapeDestination">
      <LittleHeading>Top Selling</LittleHeading>
      <SecondaryHeading>Top Destinations</SecondaryHeading>
      <div className="destinationBoxes">
        <div className="destinationBox">
          <img src={Img1} alt="pic of a city" className="img" />
          <div className="description">
            <div className="lP">
              <Location>Rome, Italy</Location>
              <Price>$5,42K</Price>
            </div>
            <Duration>10 Days Trip</Duration>
          </div>
        </div>
        <div className="destinationBox">
          <img src={Img2} alt="pic of a city" className="img" />
          <div className="description">
            <div className="lP">
              <Location>London, UK</Location>
              <Price>$4.5K</Price>
            </div>
            <Duration>12 Days Trip</Duration>
          </div>
        </div>
        <div className="destinationBox">
          <img src={Img3} alt="pic of a city" className="img" />
          <div className="description">
            <div className="lP">
              <Location>Full Europe</Location>
              <Price>$15K</Price>
            </div>
            <Duration>28 Days Trip</Duration>
          </div>
        </div>

        <div className="destinationShapeImg">
          <img src={ShapeImg} alt="shape-pic" />
        </div>
      </div>
    </div>
  );
}

function Location({ children }) {
  return (
    <a href="/location" className="locationLink">
      {children}
    </a>
  );
}

function Price({ children }) {
  return <p className="priceTag">{children}</p>;
}

function Duration({ children }) {
  return (
    <div className="duration">
      <IoAirplaneSharp className="durationIcon" />{" "}
      <p className="smallText">{children}</p>
    </div>
  );
}
