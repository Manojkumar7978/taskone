import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Nav from './components/nav';
import Favourites from './pages/favourites';
import Watchlist from './pages/watchlist';
import movieContext from './components/context';
import { useEffect, useState } from 'react';
import Private from './components/private';

function App() {
  let [search, setSearch] = useState(null)
  let [user, setUser] = useState(null)
  useEffect(() => {
    setUser(localStorage.getItem('email'))
  }, [])
  return (
    <movieContext.Provider value={{ search, setSearch, user, setUser }}>

      <div className="App" style={{ maxWidth: '1200px', marginInline: 'auto' }}>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favourites' element={<Private><Favourites /></Private>} />
          <Route path='/watchlist' element={<Private><Watchlist /></Private>} />
        </Routes>

      </div>
    </movieContext.Provider>
  );
}

export default App;
