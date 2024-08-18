import React, { useState, useEffect, useRef } from 'react';
import "./App.css"; // Import the CSS file for styling


const Wings = () => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // Optional: Stop observing after it has entered view
          }
        },
        {
          threshold: 0.1, // Adjust this value based on when you want the animation to trigger
        }
      );
  
      if (elementRef.current) {
        observer.observe(elementRef.current);
      }
  
      return () => {
        if (elementRef.current) {
          observer.unobserve(elementRef.current);
        }
      };
    }, []);

  return <>

    <div className="wingHeading ">The Three Units of Mekanika</div>
    <div    ref={elementRef}
      className={`slide-container ${isVisible ? 'show-enter-active' : 'show-enter'}`}  >
 <div className="wings">
   <div className="cards">
    <div className="card ">
  <div className="cardIcon cardIcon1 "></div>
  <div className="card-body">
    <h5 className="card-title">Design Team</h5>
    <p className="card-text">The Design Team is renowned for its creative excellence and innovative approach to visual communication.</p>
    <a href="/design_team" className="btn btn-primary cardBtn1">Read More</a>
  </div> 
</div>
<div className="card ">
  <div className="cardIcon cardIcon3"></div>
  <div className="card-body">
    <h5 className="card-title">Web Team</h5>
    <p className="card-text">The Web Team has consistently excelled in designing and developing cutting-edge digital solutions. </p>
    <a href="/web_team" className="btn btn-primary cardBtn2">Read More</a>
  </div> 
</div>
<div className="card">
  <div className="cardIcon cardIcon2"></div>
  <div className="card-body">
    <h5 className="card-title">Core Team</h5>
    <p className="card-text">The Core Team is the driving force behind our organization’s strategic initiatives, known for their ability to tackle complex challenges and deliver results.</p>
    <a href="core_team" className="btn btn-primary cardBtn3">Read More</a>
  </div> 
</div>
</div>
</div>
  </div>
  </>
};

export default Wings;