import React from 'react'
import { Card } from 'react-bootstrap'
import placeholder from '../images/placeholder.jpg'

const ShowcaseItem = (props) => {
  return (
    <>
    <Card bg='dark' className='text-light'>
      <Card.Header>Quote</Card.Header>
      <Card.Img variant="top" src={placeholder}/>
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