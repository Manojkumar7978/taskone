import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Nav from './components/nav';
import Favourites from './pages/favourites';
import Watchlist from './pages/watchlist';
import movieContext from './components/context';
import { useState } from 'react';

function App() {
  let [search, setSearch] = useState(null)
  return (
    <movieContext.Provider value={{ search, setSearch }}>

      <div className="App" style={{ maxWidth: '1200px', marginInline: 'auto' }}>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favourites' element={<Favourites />} />
          <Route path='/watchlist' element={<Watchlist />} />
        </Routes>

      </div>
    </movieContext.Provider>
  );
}

export default App;
