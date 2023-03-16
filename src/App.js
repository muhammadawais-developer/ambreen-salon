// import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Pages/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path='/' element={<Home />}/>
        <Route  path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
