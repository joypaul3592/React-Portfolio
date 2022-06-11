import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Education from './Components/About/Education';
import Overview from './Components/About/Overview';
import Skills from './Components/About/Skills';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Portfolio from './Components/Portfolio/Portfolio';

function App() {
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

        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
