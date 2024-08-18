import React, { useState, useEffect, useRef } from 'react';
import "./App.css"// Import the CSS file for styling
import SocialLinksIITKGP from "./IconsIITKGP";


const Footer = () => {
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
  <div    ref={elementRef}
      className={`slide-container ${isVisible ? 'slide-enter-active' : 'slide-enter'}`}
   >
    <div className="footer">
        <div className="iitLogo"></div>
        <div className="iitDetails">
            <p className="paraDetails">Indian Institute Of Technology</p>
            <p className="paraDetails">Kharagpur, India-721302</p>
            <p className="paraDetails">Phone: +91-3222-255221</p>
            <p className="paraDetails">Fax: +91-3222-255303</p>
            <hr></hr>
            <SocialLinksIITKGP/>
        </div>
    </div>
    </div> </>
};

export default Footer;