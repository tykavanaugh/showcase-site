import React from 'react'
import aplus from '../images/aplus.png'
import linux from '../images/linux.png'
import networkplus from '../images/networkplus.png'
import cloud from '../images/cloud.png'
import safe from '../images/safe.png'

const Aboutme = (props) => {
  return (
    <div className={`bg-${props.darkTheme} bg-gradient text-${props.textTheme} p-5`}>
      <div className="container">
        <div className={`bg-${props.darkTheme} m-5 fs-1 border border-${props.lightTheme} rounded mx-auto w-50 text-${props.textTheme}`}>I am Ty Kavanaugh</div>
        <div className="fs-3 text-md-start">
          I'm a veteran and Emergency Medical Service and Public Safety worker, Security and IT professional, and graduate of a Software Engineering bootcamp looking for a team-oriented group. I have a decade of experience in a high-stakes technical environment as both a team leader and frontline technician.
          I'm looking for a Software Engineering position that allows me to learn and continue my journey as a developer that offers opportunities to solve challenging problems by building, updating and securing systems in creative ways.
        </div>
        <div className={`bg-${props.lightTheme} w-75 m-5 mx-auto p-3 fs-1 border border-${props.darkTheme} rounded text-${props.darkTheme}`}>
          <img className={'p-3 rounded certimg'} src={aplus} alt="comptia a plus"/>
          <img className={'p-3 rounded certimg'} src={networkplus} alt="comptia network plus"/>
          <img className={'p-3 rounded certimg'} src={safe} alt="agile safe"/>
          <img className={'p-3 rounded certimg'} src={linux} alt="roppers academy linux"/>
          <img className={'p-3 rounded certimg'} src={cloud} alt="amazon web services cloud"/>
        </div>
      </div>
    </div>
  )
}

export default Aboutme