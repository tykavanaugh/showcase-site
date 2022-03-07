import React from 'react'

const ContactMe = (props) => {
  return (
  <div className={`bg-${props.darkTheme} text-${props.textTheme} p-5`}>
    <div className="container">
      <div>
        <p>Contact me</p>
      </div>
    </div>
  </div>
  )
}

export default ContactMe