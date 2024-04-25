import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { team__member, team__img, team__name, team__title } from './team-bar.module.scss';
const TeamMember = ({ url, name, title }) => {
  return (
    <div className={team__member}>
      <StaticImage
        src="../images/sunny.jpg"
        className={team__img}
      />
      <span className={team__name}>{name}</span>
      <span className={team__title}>{title}</span>
    </div>
  )
}
export default TeamMember;