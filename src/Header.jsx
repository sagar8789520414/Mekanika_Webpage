import React from "react";
import "./Header.css"; // Import the CSS file for styling


const Header = () => {
  return <>
  {/* <div className="head">
    <div className="img">
        <img src="./logo.jpg"></img>
        </div>
  
  </div>; */}
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    {/* <a className="navbar-brand" href="#">Navbar</a> */}
    < img className= "logo" src="https://scontent.fmaa8-1.fna.fbcdn.net/v/t39.30808-6/305211864_485413496931465_4855000598672877199_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=-J2WUG1AcVwQ7kNvgF14zNm&_nc_ht=scontent.fmaa8-1.fna&oh=00_AYAKc11n2XvVXoEHAtUy2cMRJRho5rg8Oi7AslzkzmTZPQ&oe=66C2B058"></img>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link " href="\">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="/events">Events</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="/workshops">Workshops</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="/contact us">Contact Us</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Type to Search" aria-label="Search"></input>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  </>
};

export default Header;
