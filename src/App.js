import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Nav from './pages/nav';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='./' element={<Home />} />
      </Routes>

    </div>
  );
}

export default App;
