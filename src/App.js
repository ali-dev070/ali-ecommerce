import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Slider from './components/Slider';
import Shop from './pages/Shop';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <Slider />
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Shop />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
