import React from 'react'

const Welcome = (props) => {
  return (
    <div className={`bg-${props.darkTheme} text-${props.textTheme} p-5 text-center`}>
      <div className='container'>
        <div className="welcome-text">Welcome</div>
      </div>
    </div>
  )
}


export default Welcome