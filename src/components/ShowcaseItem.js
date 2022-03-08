import React from 'react'
import { Card } from 'react-bootstrap'
import placeholder from '../images/placeholder.jpg'

const ShowcaseItem = (props) => {
  return (
    <>
    <Card bg={props.lightTheme} className={`text-${props.darkTheme} p-2`}>
      <Card.Header>
        <div className={`rounded bg-${props.darkTheme} text-${props.textTheme} fs-3`}>
          Title
        </div>
      </Card.Header>
      <Card.Img className='p-3 rounded' variant="top" src={placeholder}/>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
            erat a ante.{' '}
          </p>
          <footer className="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
    </>
  )
}

export default ShowcaseItem