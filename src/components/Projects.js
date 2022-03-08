import React from 'react'
import ShowcaseItem from './ShowcaseItem'
import { Container, Row, Col } from "react-bootstrap"

const Projects = (props) => {
  return (
    <div className={`bg-${props.darkTheme} bg-gradient text-${props.textTheme} p-5`}>
      <Container className='mt-5'>
      <div className="text-center fs-2">Projects</div>
        <Row className='m-5'>
          <Col>
            <ShowcaseItem lightTheme={props.lightTheme} darkTheme={props.darkTheme} textTheme={props.textTheme} ></ShowcaseItem>
          </Col>
          <Col>
            <ShowcaseItem lightTheme={props.lightTheme} darkTheme={props.darkTheme} textTheme={props.textTheme} ></ShowcaseItem>
          </Col>
          <Col>
            <ShowcaseItem lightTheme={props.lightTheme} darkTheme={props.darkTheme} textTheme={props.textTheme} ></ShowcaseItem>
          </Col>
        </Row>
        <Row className='m-5'>
          <Col>
            <ShowcaseItem lightTheme={props.lightTheme} darkTheme={props.darkTheme} textTheme={props.textTheme} ></ShowcaseItem>
          </Col>
          <Col>
            <ShowcaseItem lightTheme={props.lightTheme} darkTheme={props.darkTheme} textTheme={props.textTheme} ></ShowcaseItem>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Projects