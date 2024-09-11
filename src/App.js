import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/pages/home/home';
import Error from './views/pages/error404/error';
import About from './views/pages/about/about';
import Contact from './views/pages/contact/contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/*' element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
