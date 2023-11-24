// import React from 'react'
import "./Header.css";
import des from "../../images/destination-5.jpg";
import carol from "../../images/carousel-2.jpg";

export default function Header() {
  return (
    <div>
      <div className="HeaderCon">
        <div className="welcome">
          <h2 className="myh2">Welcome to Pluto Airs</h2>
          <h4 className="myh4">Where Your destination is our interest</h4>
        </div>
        <div className="headerCard1">
          <img className="cardimg" src={des} alt="" />
          <p>
            Looking for the best destinations and at affordable price? <br />{" "}
            Look no further, here at Pluto Airs we provide you with the best
            options to easy the stress.{" "}
          </p>
          <div className="Conbtn">
            <button className="btnn">Let's Fly</button>
          </div>
        </div>
        <div className="headerCard2">
          <img className="cardimg" src={carol} alt="" />
          <p>
            From the plains to the Sharath we fly you forth and back with no
            miss harps and uncertainty. let us fly you with comfort and peace of
            mind at your finger tips.
          </p>
        </div>
      </div>
    </div>
  );
}
