import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import {
  team,
  team__heading,
  team__intro,
  team__member,
  team__img,
  team__name,
  team__title
} from './team-bar.module.scss';
import TeamMember from "./team-member";
const TeamBar = () => {
  return (
    <section className={`container-fluid ${team}`}>
      <div className="row middle-xs center-xs start-sm">
        <div className="col-xs-12 col-sm-6">
          <h2 className={team__heading}>Meet the team that makes a difference.</h2>
          <p className={team__intro}>Qualified providers, ready to work with you.</p>
        </div>
        <div className="col-xs-12 col-sm center-xs">
          <TeamMember
            img="../images/jacie.jpg"
            name="Jacie Currie"
            title="Speech Therapy & Language Pathology"
          />
        </div>
        <div className="col-xs-12 col-sm center-xs">
          <TeamMember
            img="../images/sunny.jpg"
            name="Sunny Biggers"
            title="Educational Assessments"
          />
        </div>
      </div>
    </section>
  )
}
export default TeamBar;