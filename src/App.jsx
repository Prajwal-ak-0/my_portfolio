// App.jsx

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';
import Home from './components/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

const App = () => {
  return (
    <main>
      <NextUIProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </NextUIProvider>
    </main>
  );
};

export default App;
