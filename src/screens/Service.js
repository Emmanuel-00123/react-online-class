import { FaPlaneDeparture } from "react-icons/fa";
import { IoMdMicrophone, IoMdSettings } from "react-icons/io";
import { TiWeatherPartlySunny } from "react-icons/ti";

////////////////// SECTION SERVICES ///////////////
export function Service() {
  return (
    // <div className="sectionService">
    <div className="section">
      <LittleHeading>CATEGORY</LittleHeading>
      <SecondaryHeading>We Offer Best Services</SecondaryHeading>
      <div className="serviceBoxes">
        <div className="serviceBox">
          <TiWeatherPartlySunny className="serviceIcon" />
          <ServiceBoxHeading>Calculated Weather</ServiceBoxHeading>
          <ServiceBoxDescription>
            Built Wicket longer admire do barton vanity itself do in it.
          </ServiceBoxDescription>
        </div>

        <div className="serviceBox">
          <FaPlaneDeparture className="serviceIcon" />
          <ServiceBoxHeading>Best Flights</ServiceBoxHeading>
          <ServiceBoxDescription>
            Engrossed listening. Park gate sell they west hard for the.
          </ServiceBoxDescription>
        </div>

        <div className="serviceBox">
          <IoMdMicrophone className="serviceIcon" />
          <ServiceBoxHeading>Local Events</ServiceBoxHeading>
          <ServiceBoxDescription>
            Barton vanity itself do in it. Preferd to men it engrossed
            listening.
          </ServiceBoxDescription>
        </div>
        <div className="serviceBox">
          <IoMdSettings className="serviceIcon" />
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
