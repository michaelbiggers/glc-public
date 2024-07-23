import React from "react";

interface ChildProps {
  heading: string;
  subheading?: string;
  callToActionText?: string;
  callToActionURL?: string;
  backgroundURL?: string;
  backgroundColor?: string;
}
const Hero: React.FC<ChildProps> = (props) => {
  return (
    <section
      className={`container-fluid`}
      style = {{
        backgroundImage: props.backgroundURL ? props.backgroundURL : 'none',
        backgroundColor: props.backgroundColor ? props.backgroundColor : '' 
      }}
      >
      <div className="row center-xs center-sm">
        <div className="col-xs-12 col-sm-8">
          <h1 className=''>{props.heading}</h1>
        </div>
      </div>
      <div className="row center-xs center-sm">
        <div className="col-xs-12 col-sm-6">
          {props.subheading ? `<p className=''>${props.subheading}</p>` : ''}
          {props.callToActionText && props.callToActionURL ? `<p><a className="btn btn--primary" href="${props.callToActionURL}">${props.callToActionText}</a></p>` : ''}
        </div>
      </div>
    </section>
  )
}

export default Hero;