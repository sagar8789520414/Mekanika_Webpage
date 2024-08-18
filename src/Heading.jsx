import React from "react";
import "./Header.css"; // Import the CSS file for styling


const Heading = () => {
  return <>
  <div className="heading">MEKANIKA</div>
  <div className="shotHead">Mekanika is the official society of Department of Mechanical Engineering, IIT Kharagpur</div>
  <form className="d-flex" role="search">
        <button className="regisBtn" type="submit">Register</button>
        <button className="readBtn" type="submit">Read More</button>
      </form>
  </>
};

export default Heading;
