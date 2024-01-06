import React from 'react'
import { IconPhone } from "@tabler/icons-react";
import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import PlanTrip from "../components/PlanTrip";
import AboutMain from "../images/about/about-main.jpg";
import Box1 from "../images/about/icon1.png";
import Box2 from "../images/about/icon2.png";
import Box3 from "../images/about/icon3.png";

function About() {
  return (
    <>
      <section className="about-page">
        <HeroPages name="About" />
        <div className="container">
          <div className="about-main">
            <img className='about-main__img' src={AboutMain} alt="car-renting" />
            <div className="about-main__text">
              <h3>About Company</h3>
              <h2>You start the engine and your adventure begins</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia voluptas suscipit corrupti pariatur repudiandae illo eius blanditiis exercitationem magni ad cupiditate eos molestiae, quos inventore quibusdam, vero impedit imprudence.
              </p>
              <div className="about-main__text__icons">
                <div className="about-main__text__icons__box">
                  <img src={Box1} alt="car-icon" />
                  <span>
                    <h4>20</h4>
                    <p>Bike Types</p>
                  </span>
                </div>
                <div className="about-main__text__icons__box">
                  <img src={Box2} alt="car-icon" />
                  <span>
                    <h4>85</h4>
                    <p>Rental Outlets</p>
                  </span>
                </div>
                <div className="about-main__text__icons__box">
                  <img src={Box3} alt="car-icon" className='last-fk'/>
                  <span>
                    <h4>75</h4>
                    <p>Repair Shop</p>
                  </span>
                </div>
              </div>
            </div>  
          </div>  
          <PlanTrip />
        </div> 
      </section>
      <div className="book-banner">
        <div className="book-banner__overlay"></div>
        <div className="container">
          <div className="text-content">
            <h2>Book a Superbike by getting in touch with us</h2>
            <span>
              <IconPhone width={40} height={40} />
              <h3>(957) -XXX-XXXX</h3>  
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About