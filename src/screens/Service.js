import Icon1 from "../img/icon1.png";
import Icon2 from "../img/icon2.png";
import Icon3 from "../img/icon3.png";
import Icon4 from "../img/icon4.png";

////////////////// SECTION SERVICES ///////////////
export function Service() {
  return (
    // <div className="sectionService">
    <div className="section">
      <LittleHeading>CATEGORY</LittleHeading>
      <SecondaryHeading>We Offer Best Services</SecondaryHeading>
      <div className="serviceBoxes">
        <div className="serviceBox">
          <img src={Icon1} alt="weather-icon" />
          <ServiceBoxHeading>Calculated Weather</ServiceBoxHeading>
          <ServiceBoxDescription>
            Built Wicket longer admire do barton vanity itself do in it.
          </ServiceBoxDescription>
        </div>

        <div className="serviceBox">
          <img src={Icon2} alt="flight-icon" />
          <ServiceBoxHeading>Best Flights</ServiceBoxHeading>
          <ServiceBoxDescription>
            Engrossed listening. Park gate sell they west hard for the.
          </ServiceBoxDescription>
        </div>

        <div className="serviceBox">
          <img src={Icon3} alt="mic-icon" />
          <ServiceBoxHeading>Local Events</ServiceBoxHeading>
          <ServiceBoxDescription>
            Barton vanity itself do in it. Preferd to men it engrossed
            listening.
          </ServiceBoxDescription>
        </div>
        <div className="serviceBox">
          <img src={Icon4} alt="customize-icon" />
          <ServiceBoxHeading>Customization</ServiceBoxHeading>
          <ServiceBoxDescription>
            We deliver outsourced aviation services for military customers.
          </ServiceBoxDescription>
        </div>
      </div>
    </div>
  );
}
export function LittleHeading({ children }) {
  return <h3 className="serviceLittleHeading">{children}</h3>;
}
export function SecondaryHeading({ children }) {
  return <h2 className="secondaryHeading">{children}</h2>;
}
// function ServiceBox() {
//   <ServiceBoxHeading></ServiceBoxHeading>
// }
function ServiceBoxHeading({ children }) {
  return <h3 className="tertiaryHeading">{children}</h3>;
}
function ServiceBoxDescription({ children }) {
  return <p className="serviceDescription smallText">{children}</p>;
}
