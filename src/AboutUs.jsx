import React from "react";
 // Import the CSS file for styling
 import SocialLinks from "./Icons";


const AboutUs = () => {
  return <>
  <div className="block">
    <div className="mergePic"></div>
    <div className="about">
        <div className="aboutHead">About Us</div>
        <div className="aboutPara">Mekanika extends a warm and enthusiastic welcome to all newstudents and wishes them a successful future.</div><br></br>
        <div className="aboutPara">Mekanika functions with a team composed of second-year, third-year and fourth-year undergraduates students for the department related activities and skills training.</div>
       <br></br> <div className="aboutPara">Social Media Links--</div><br></br>
       <SocialLinks/></div>
  </div>
  </>
};

export default AboutUs;