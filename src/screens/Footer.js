import ImgPlayStore from "../img/play-store.png";
import ImgAppleStore from "../img/apple-store.png";
import { BiLogoFacebook } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footerLogoBox">
          <p className="footerLogo">Jadoo</p>
          <p className="footerLogoText smallText">
            Book your trip in minute, get full Control for much longer.
          </p>
        </div>
        <div className="footerHeadBox">
          <FooterLinkHead>Company</FooterLinkHead>
          <div className="footerLinks">
            <FooterLinks>About</FooterLinks>
            <FooterLinks>Careers</FooterLinks>
            <FooterLinks>Mobile</FooterLinks>
          </div>
        </div>
        <div className="footerHeadBox">
          <FooterLinkHead>Contact</FooterLinkHead>
          <div className="footerLinks">
            <FooterLinks>Help/FAQ</FooterLinks>
            <FooterLinks>Press</FooterLinks>
            <FooterLinks>Affiliate</FooterLinks>
          </div>
        </div>
        <div className="footerHeadBox">
          <FooterLinkHead>More</FooterLinkHead>
          <div className="footerLinks">
            <FooterLinks>Airline Fees</FooterLinks>
            <FooterLinks>Airlines</FooterLinks>
            <FooterLinks>Low fare tips</FooterLinks>
          </div>
        </div>
        <div className="footerHeadBox">
          <div className="socialIcons">
            <BiLogoFacebook className="socialIcon iconFB" />
            <FaInstagram className="socialIcon iconIG" />
            <FaTwitter className="socialIcon iconTW" />
          </div>
          <p>Discover our app</p>
          <div className="storeIcons">
            <img
              src={ImgPlayStore}
              alt="play-store-icon"
              className="storeIcon"
            />
            <img
              src={ImgAppleStore}
              alt="apple-store-icon"
              className="storeIcon"
            />
          </div>
        </div>
      </div>
      <p className="rights smallText">All rights reserved@jadoo.co</p>
    </footer>
  );
}

function FooterLinkHead({ children }) {
  return <h3 className="footerLinkHead">{children}</h3>;
}

function FooterLinks({ children }) {
  return (
    <a href="/footerLink" className="footerLink smallText">
      {children}
    </a>
  );
}

export default Footer;
