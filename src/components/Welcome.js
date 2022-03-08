import React from 'react'

const Welcome = (props) => {
  return (
    <div className={`bg-${props.darkTheme} bg-gradient text-${props.textTheme} p-5 text-center`}>
      <div className='container'>
        <div className="fs-1">Welcome!</div>
        <div className="fs-3">Try out the theme changer on the top right and take a look around</div>
      </div>
    </div>
  )
}


export default Welcome