import './App.css';
import ResponsiveAppBar from './component/appbar';
import Home from './component/home';
import './assets/style.css'
import About from './component/about';
import Footer from './component/footer';
import Project from './component/project';
import Skills from './component/skills';
import Contact from './component/contact';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <Home/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
