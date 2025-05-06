import { LittleHeading, SecondaryHeading } from "./Service";
import { BiSelection } from "react-icons/bi";
import { MdOutlinePayments } from "react-icons/md";
import { IoCarSportOutline } from "react-icons/io5";
import ImgGreece from "../img/mohammad-karami-LLbql0iSoNQ-unsplash.jpg";
import { ImLeaf } from "react-icons/im";
import { FaBookmark } from "react-icons/fa";
import { IoIosPaperPlane } from "react-icons/io";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { FaRegHeart } from "react-icons/fa";

export function Bookings() {
  return (
    <div className="bookingsBoxes">
      <div className="bookingsTextBox">
        <LittleHeading>Easy and Fast</LittleHeading>
        <SecondaryHeading>Book your next trip in 3 easy steps</SecondaryHeading>
        <div className="descriptionBox">
          <BiSelection className="bookingsIcon iconSelect" />
          <div className="bookingsDescription">
            <LittleHeading>Choose Destination</LittleHeading>

            <BookingsDescriptionText>
              Choose your favourite place. No matter where you travel inside the
              World.
            </BookingsDescriptionText>
          </div>
        </div>

        <div className="descriptionBox">
          <MdOutlinePayments className="bookingsIcon iconPay" />
          <div className="bookingsDescription">
            <LittleHeading>Make Payment</LittleHeading>

            <BookingsDescriptionText>
              After find your perfect spot, make your payment and get ready to
              travel.
            </BookingsDescriptionText>
          </div>
        </div>

        <div className="descriptionBox">
          <IoCarSportOutline className="bookingsIcon iconCar" />
          <div className="bookingsDescription">
            <LittleHeading>Reach Airport on Selected Date</LittleHeading>
            <BookingsDescriptionText>
              Lastly, you have to arrive at the airport on time and enjoy the
              vacation.
            </BookingsDescriptionText>
          </div>
        </div>
      </div>
      <div className="bookingsImgBox">
        <img
          src={ImgGreece}
          alt="pic of a lady in greece"
          className="bookingsImg"
        />
        <p className="tripToGreece">Trip To Greece</p>
        <p className="smallText">14-29 June | by Robbin Joseph</p>
        <div className="tripIconsDiv">
          <span>
            <ImLeaf className="tripIcons tripIconColor" />
          </span>
          <span>
            <FaBookmark className="tripIcons tripIconColor" />
          </span>
          <span>
            <IoIosPaperPlane className="tripIcons tripIconColor" />
          </span>
        </div>
        <div className="lowerTrip">
          <span className="tripSpanText">
            <HiOutlineBuildingOffice2 className="tripIcons" />
            <p className="smallText">24 people going</p>
          </span>
          <FaRegHeart className="tripIcons iconHeart" />
        </div>
      </div>
    </div>
  );
}

function BookingsDescriptionText({ children }) {
  return <p className="bookingsDescriptionText smallText">{children}</p>;
}
