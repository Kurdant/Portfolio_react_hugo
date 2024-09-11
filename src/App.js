import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/pages/home/home';
import Error from './views/pages/error404/error';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/*' element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
