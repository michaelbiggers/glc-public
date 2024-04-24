import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import {
  team,
  team__heading,
  team__intro,
  team__member,
  team__img,
  team__name,
  team__title} from './team-bar.module.scss';
const TeamBar = () => {
  return (
    <section className={`container-fluid ${team}`}>
      <div className="row middle-xs center-xs start-sm">
        <div className="col-xs-12 col-sm-6">
          <h2 className={team__heading}>Meet the team that makes a difference.</h2>
          <p className={team__intro}>Qualified providers, ready to work with you.</p>
        </div>
        <div className="col-xs-12 col-sm center-xs">
          <div className={team__member}>
            <StaticImage
              src="../images/jacie.jpg"
              className={team__img}
            ></StaticImage>
            <span className={team__name}>Jacie Currie</span>
            <span className={team__title}>Speech Therapy & Language Pathology</span>
          </div>
        </div>
        <div className="col-xs-12 col-sm center-xs">
          <div className={team__member}>
            <StaticImage
              src="../images/sunny.jpg"
              className={team__img}></StaticImage>
            <span className={team__name}>Sunny Biggers</span>
            <span className={team__title}>Educational Assessments</span>
          </div>
        </div>
      </div>
    </section>
  )
}
export default TeamBar;