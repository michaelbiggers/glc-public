import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { hero, hero__heading, hero__intro, hero__img } from './hero.module.scss';

const Hero = () => {
  return (
    <section className={`container ${hero}`}>
      <div className="row center-xs start-sm">
        <div className="col-xs-12 col-sm-8">
          <h1 className={hero__heading}>Come Grow <br />With Us</h1>
        </div>
      </div>
      <div className="row center-xs start-sm">
        <div className="col-xs-12 col-sm-6">
          <p className={hero__intro}>Learning assessments and <br />speech therapy for all ages.</p>
          <p><a className="btn btn--primary" href="#who-we-help">Who We Can Help</a></p>
        </div>
        <div className="col-xs-12 col-sm-6 center-xs">
          <StaticImage
            src="../images/kingdom-849.png"
            className={hero__img}
          >
          </StaticImage>
        </div>
      </div>
    </section>
  )
}

export default Hero;