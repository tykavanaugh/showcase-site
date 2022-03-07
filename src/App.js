import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Topbar from './components/Topbar';
import Bottombar from './components/Bottombar';
import Projects from './components/Projects';
import Welcome from './components/Welcome';
import Aboutme from './components/Aboutme';
import Education from './components/Education';
import Skills from './components/Skills';
import ContactMe from './components/ContactMe';
import { Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from 'react';


function App() {
  const [lightTheme, setLightTheme] = useState("light")
  const [darkTheme, setDarkTheme] = useState("dark")
  const [textTheme, setTextTheme] = useState("light")

  const toggleTheme = () => {
    if (darkTheme === 'dark'){
      setLightTheme('dark')
      setDarkTheme('light')
      setTextTheme('dark')
    } else {
      setLightTheme('light')
      setDarkTheme('dark')
      setTextTheme('light')
    }
  }
  const toggleColor = () => {
    if (darkTheme === 'primary'){
      setLightTheme('light')
      setDarkTheme('dark')
      setTextTheme('light')
    } else {
      setLightTheme('info')
      setDarkTheme('primary')
      setTextTheme('light')
    }
  }

  return (
  <div className='bg-dark'>
    <Topbar 
      lightTheme={lightTheme} 
      darkTheme={darkTheme} 
      textTheme={textTheme} 
      toggleTheme={toggleTheme} 
      toggleColor={toggleColor}>

    </Topbar>
    <div className="App">
      <Routes>
        <Route path="welcome" element={<Welcome lightTheme={lightTheme} darkTheme={darkTheme} textTheme={textTheme} id="welcome"></Welcome>}/>
        <Route path="aboutme" element={<Aboutme lightTheme={lightTheme} darkTheme={darkTheme} textTheme={textTheme} id="aboutme"></Aboutme>}/>
        <Route path="education" element={<Education lightTheme={lightTheme} darkTheme={darkTheme} textTheme={textTheme} id="education"></Education>}/>
        <Route path="skills" element={<Skills lightTheme={lightTheme} darkTheme={darkTheme} textTheme={textTheme} id="skills"></Skills>}/>
        <Route path="projects" element={<Projects lightTheme={lightTheme} darkTheme={darkTheme} textTheme={textTheme} id="projects"></Projects>}/>
        <Route path="contacts" element={<ContactMe lightTheme={lightTheme} darkTheme={darkTheme} textTheme={textTheme} id="contacts"></ContactMe>}/>
      </Routes>
    </div>
    <Bottombar lightTheme={lightTheme} darkTheme={darkTheme} textTheme={textTheme}></Bottombar>
  </div>
  );
}

export default App;
