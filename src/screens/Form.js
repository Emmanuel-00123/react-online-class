import { MdOutlineMailOutline } from "react-icons/md";
import { FaPaperPlane } from "react-icons/fa";

function Form() {
  return (
    <div className="sectionForm">
      <div className="sectionFormBox">
        <div className="messageIcon">
          <FaPaperPlane className="icon" />
        </div>
        <h2 className="subInfo">
          Subscribe to get information, latest news and other interesting offers
          about Cobham
        </h2>
        <form className="formBox">
          <MdOutlineMailOutline className="formIcon" />
          <input
            type="text"
            placeholder="Enter email"
            required
            className="emailInput"
          />
          <button type="submit" className="submitBtn">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
export default Form;
