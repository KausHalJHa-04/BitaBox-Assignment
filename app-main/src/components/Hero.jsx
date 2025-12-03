import React from "react";
import "./Hero.css";
import vrMan from "../assets/vr-man.png";
import textpic from "../assets/Group 11.png";
import textpix from "../assets/Group12.png";
import Feature from "./Feature";

const Hero = () => {
  return (
    <>
    <section className="hero">
      <div className="left">
        <h4 className="sub-title">VIRTUAL HEADSETS</h4>

        <h1 className="title">
          Experience a <br /> new dimension <br /> of reality
        </h1>

        <p className="desc">
          ⭐ Step into the future with our virtual headset, come to life right
          before your eyes
        </p>

        <div className="buttons">
          <button className="btn-primary">Visit Store <i className="ri-arrow-right-line"></i></button>
          <button className="btn-outline">Explore <i className="ri-compass-line"></i></button>
        </div>

        <h4>Follow Us</h4> <br />
        <div className="socials"> 
          <i className="ri-twitter-fill"></i>
          <i className="ri-instagram-fill"></i>
          <i className="ri-discord-fill"></i>
          <i className="ri-facebook-fill"></i>
        </div>
      </div>

      <div className="right">
        <div className="img">

        <img src={vrMan} alt="VR user" className="vr-img" />
        <img src={textpic} alt="" className="textpic"/><hr />
        <img src={textpix} alt="" className="textpix"/>
        </div> <br />
       <div className="floating-box ">
        <i className="ri-bookmark-3-line"> Enhanced Education</i> &nbsp;&nbsp;&nbsp;&nbsp;   
        <i className="ri-link-unlink-m"> Training and Simulation</i>
       </div>
       
      </div>
    </section>
    </>
  );
};

export default Hero;
