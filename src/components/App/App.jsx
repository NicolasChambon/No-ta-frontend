import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home/Home';
import News from '../pages/News/News';
import BoHome from '../pages/BoHome/BoHome';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/admin" element={<BoHome />} />
      </Routes>
    </div>
  );
}

export default App;
