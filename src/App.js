import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Education from './Components/About/Education';
import Overview from './Components/About/Overview';
import Skills from './Components/About/Skills';
import Contact from './Components/Contact/Contact';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Projects from './Components/Projects/Projects';
import ProjectsCard from './Components/Projects/ProjectsCard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="App max-w-7xl mx-auto relative">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} >
          <Route path="overview" element={<Overview />} ></Route>
          <Route path="education" element={<Education />} ></Route>
          <Route path="skills" element={<Skills />} ></Route>
        </Route>

        <Route path="projects" element={<Projects />} ></Route>
        <Route path="projectsCard/:id" element={<ProjectsCard></ProjectsCard>} ></Route>
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
