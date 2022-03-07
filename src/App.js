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

function App() {
  return (
  <div className='bg-dark'>
    <Topbar></Topbar>
    <div className="App">
      <Welcome id="welcome"></Welcome>
      <Aboutme id="aboutme"></Aboutme>
      <Education id="education"></Education>
      <Skills id="skills"></Skills>
      <Projects id="projects"></Projects>
      <ContactMe id="contacts"></ContactMe>
    </div>
    <Bottombar></Bottombar>
  </div>
  );
}

export default App;
