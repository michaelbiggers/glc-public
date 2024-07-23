import React, { ReactFragment } from "react";

interface ChildProps {
  heading: string;
  subheading?: string;
  callToActionText?: string;
  callToActionURL?: string;
  backgroundURL?: string;
  backgroundColor?: string;
}
const Subhead = (props) => {
  return (
    <div className="col-xs-12 col-sm-6">
      {props.subheading ? (<p className=''>{props.subheading}</p>) : ''}
      {props.callToActionText && props.callToActionURL ? `<p><a className="btn btn--primary" href="${props.callToActionURL}">${props.callToActionText}</a></p>` : ''}
    </div>
  )
}
const Hero: React.FC<ChildProps> = (props) => {
  return (
    <section className={`container-fluid`} style={{ position: 'relative', }}>
      <div className='hero__bg'
        style={{
          backgroundImage: props.backgroundURL ? `url(${props.backgroundURL})` : 'none',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '200vw',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1
        }}></div>
      <div className='hero__color'
        style={{
          backgroundColor: props.backgroundColor ? props.backgroundColor : '',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          opacity: .5,
          mixBlendMode: 'screen'
        }}></div>
      <div className="row center-xs center-sm middle-xs" style={{ minHeight: '33vh' }}>
        <div className="col-xs-12 col-sm-8">
          <h1 className=''>{props.heading}</h1>
        </div>
        {props.subheading || props.callToActionText ? Subhead(props) : ''}
      </div>
    </section>
  )
}

export default Hero;