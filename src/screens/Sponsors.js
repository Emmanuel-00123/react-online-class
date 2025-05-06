import Img1 from "../img/Axon.png";
import Img2 from "../img/Jetstar.png";
import Img3 from "../img/Expedia.png";
import Img4 from "../img/Qantas.png";
import Img5 from "../img/Alitalia.png";

function Sponsors() {
  return (
    <div className="sponsors-box">
      <img src={Img1} alt="axon-logo" className="sponsor-img" />
      <img src={Img2} alt="jetstar-logo" className="sponsor-img" />
      <img src={Img3} alt="expedia-logo" className="sponsor-img" />
      <img src={Img4} alt="qantas-logo" className="sponsor-img" />
      <img src={Img5} alt="alitalia-logo" className="sponsor-img" />
    </div>
  );
}
export default Sponsors;
