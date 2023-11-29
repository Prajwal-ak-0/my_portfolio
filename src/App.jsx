import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Home from './components/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import {NextUIProvider} from "@nextui-org/react";

export default function App() {
    return (
      <main className=''>
        <NextUIProvider>
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </Router>
        </NextUIProvider>
      </main>
    )
  }