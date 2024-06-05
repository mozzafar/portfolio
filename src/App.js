
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';

import Education from './pages/Education';
import Skills from './pages/Skills';
import Contact from './pages/Contact';


function App() {
  return (
    <div>
      <Navbar />
      
      <main>
        <Routes>
          <Route
          path='/'
          element={<Home />} 
          />
          
          <Route
          path='/education'
          element={<Education />} 
          />
          <Route
          path='/skills'
          element={<Skills />} 
          />
          <Route
          path='/contact'
          element={<Contact />} 
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
