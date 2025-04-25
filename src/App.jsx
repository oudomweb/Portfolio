import Navbar from './components/Navbar';
import Name from './components/Name';
import About from './components/Aboutpage';
import Project from './components/Project';
import Skills from './components/Skills';
import Services from './components/Services';
import Footerb from './components/Footerb';

function App() {
  return (
        <div className="App">
          <Navbar/>
          <Name/>
          <About/>
          <Project/>
          <Skills/>
          <Services/>
          <Footerb/>
        </div>
  )
}

export default App;