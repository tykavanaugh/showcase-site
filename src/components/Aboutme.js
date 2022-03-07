import React from 'react'

const Aboutme = (props) => {
  return (
    <div className={`bg-${props.darkTheme} text-${props.textTheme} p-5`}>
      <div className="container">
        <div>
          <p>About me</p>
        </div>
      </div>
    </div>
  )
}

export default Aboutme