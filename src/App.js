import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { NavBar} from './components/NavBar';
import { Banner } from './components/Banner';
import { Education } from './components/Education';
import { Skills } from './components/Skills';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Education />
      <Skills />
    </div>
  );
}

export default App;
