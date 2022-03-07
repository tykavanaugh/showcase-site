import React from 'react'
import ShowcaseItem from './ShowcaseItem'
import { Container, Row, Col } from "react-bootstrap"

const Projects = () => {
  return (
    <div className="bg-light text-dark p-5">
      <Container className='mt-5'>
      <div className="text-center fs-2">Projects</div>
        <Row className='m-5'>
          <Col>
            <ShowcaseItem></ShowcaseItem>
          </Col>
          <Col>
            <ShowcaseItem></ShowcaseItem>
          </Col>
          <Col>
            <ShowcaseItem></ShowcaseItem>
          </Col>
        </Row>
        <Row className='m-5'>
          <Col>
            <ShowcaseItem></ShowcaseItem>
          </Col>
          <Col>
            <ShowcaseItem></ShowcaseItem>
          </Col>
          <Col>
            <ShowcaseItem></ShowcaseItem>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Projects