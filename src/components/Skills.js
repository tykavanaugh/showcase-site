import React from 'react'
import { Tabs,Tab } from 'react-bootstrap'

const Skills = (props) => {
  return (
  <div className={`bg-${props.darkTheme} bg-gradient text-${props.textTheme} p-5`}>
    <div className="container">
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="langs" title="Languages" tabClassName={`bg-${props.darkTheme} text-${props.textTheme}`}>
          <div className="fs-3 text-center mt-5">Python</div>
          <hr/>
          <div className="fs-5 text-start">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis quia molestias atque? Culpa, assumenda voluptate.</div>
          <div className="fs-3 text-center mt-5">Javascript/ES6</div>
          <hr/>
          <div className="fs-5 text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sed ipsam enim voluptatem culpa quam!</div>
          <div className="fs-3 text-center mt-5">Powershell</div>
          <hr/>
          <div className="fs-5 text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sed ipsam enim voluptatem culpa quam!</div>
          <div className="fs-3 text-center mt-5">SQL</div>
          <hr/>
          <div className="fs-5 text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sed ipsam enim voluptatem culpa quam!</div>
          <div className="fs-3 text-center mt-5">HTML/CSS/JSX</div>
          <hr/>
          <div className="fs-5 text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sed ipsam enim voluptatem culpa quam!</div>
          <div className="fs-3 text-center mt-5">C</div>
          <hr/>
          <div className="fs-5 text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sed ipsam enim voluptatem culpa quam!</div>
        </Tab>
        <Tab eventKey="stacks" title="Frameworks" tabClassName={`bg-${props.darkTheme} text-${props.textTheme}`}>
          <div className="fs-3 text-center mt-5">Django</div>
          <hr/>
          <div className="fs-5 text-start">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis quia molestias atque? Culpa, assumenda voluptate.</div>
          <div className="fs-3 text-center mt-5">ReactJS</div>
          <hr/>
          <div className="fs-5 text-start">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis quia molestias atque? Culpa, assumenda voluptate.</div>
          <div className="fs-3 text-center mt-5">Bootstrap</div>
          <hr/>
          <div className="fs-5 text-start">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis quia molestias atque? Culpa, assumenda voluptate.</div>
          <div className="fs-3 text-center mt-5">Flask</div>
          <hr/>
          <div className="fs-5 text-start">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis quia molestias atque? Culpa, assumenda voluptate.</div>
          <div className="fs-3 text-center mt-5">NodeJS</div>
          <hr/>
          <div className="fs-5 text-start">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis quia molestias atque? Culpa, assumenda voluptate.</div>
        </Tab>
        <Tab eventKey="contact" title="Cloud and Deployment" tabClassName={`bg-${props.darkTheme} text-${props.textTheme}`}>
          <div className="fs-3 text-center mt-5">AWS</div>
          <hr/>
          <div className="fs-5 text-start">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis quia molestias atque? Culpa, assumenda voluptate.</div>
          <div className="fs-3 text-center mt-5">Heroku</div>
          <hr/>
          <div className="fs-5 text-start">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis quia molestias atque? Culpa, assumenda voluptate.</div>
          <div className="fs-3 text-center mt-5">Docker</div>
          <hr/>
          <div className="fs-5 text-start">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis quia molestias atque? Culpa, assumenda voluptate.</div>
          <div className="fs-3 text-center mt-5">O365 and Microsoft Cloud</div>
          <hr/>
          <div className="fs-5 text-start">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis quia molestias atque? Culpa, assumenda voluptate.</div>
        </Tab>
        <Tab eventKey="systems" title="Systems" tabClassName={`bg-${props.darkTheme} text-${props.textTheme}`}>
          <div className="fs-3 text-center mt-5">Linux</div>
          <hr/>
          <div className="fs-5 text-start">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis quia molestias atque? Culpa, assumenda voluptate.</div>
          <div className="fs-3 text-center mt-5">Windows Server and Active Directory</div>
          <hr/>
          <div className="fs-5 text-start">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis quia molestias atque? Culpa, assumenda voluptate.</div>
          <div className="fs-3 text-center mt-5">Arduino and Rasperry Pi</div>
          <hr/>
          <div className="fs-5 text-start">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis quia molestias atque? Culpa, assumenda voluptate.</div>
        </Tab>
      </Tabs>
    </div>
  </div>
  )
}

export default Skills