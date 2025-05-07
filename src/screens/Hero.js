// import img from "../img/anna-gru-EzTGFKfEdmM-unsplash.jpg";

import img from "../img/hero-img.png";
import { FaPlayCircle } from "react-icons/fa";

export function Hero() {
  return (
    <div className="sectionHero">
      <div className="textBox">
        <h3 className="firstText">Best Destinations around the world</h3>
        <h1 className="primaryHeading">
          Travel, enjoy and live a new and full life
        </h1>
        <p className="headingDescription smallText">
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.
        </p>
        <div className="heroBtns">
          <button className="heroBtn">
            <a href="/find" className="heroLink">
              Find out more
            </a>
          </button>
          {/* <button className="heroBtn">
                <a href="/find" className="heroLink">
                  Play demo
                </a>
              </button> */}
          <FaPlayCircle className="playBtn" />
          <p className="playText">Play demo</p>
        </div>
      </div>
      <div className="imgBox">
        <img src={img} alt="pic of a plane" className="heroImg" />
      </div>
    </div>
  );
}

// export default Hero;
