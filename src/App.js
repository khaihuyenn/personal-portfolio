import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import { NavBar} from './components/NavBar';
import { Banner } from './components/Banner';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact} from './components/Contact';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
