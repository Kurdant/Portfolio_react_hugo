import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/pages/home/home';
import Error from './views/pages/error404/error';
import About from './views/pages/about/about';
import Contact from './views/pages/contact/contact';
import Projects from './views/pages/projects/projects';
import Project from './views/pages/project/project';
import Menu_Second from './views/components/menu_second/menu_second';

function App() {
  return (
    <div className="App">
      <Router>
        <Menu_Second/>
        <Routes>
          <Route path='/project/:id' element={<Project/>}/>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/*' element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
