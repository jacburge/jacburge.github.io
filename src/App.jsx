import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Art from './pages/Art';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import EmbaPlj from './pages/EmbaPlj';
import Footer from './components/Footer';

function StandardLayout() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/emba-plj" element={<EmbaPlj />} />
        <Route element={<StandardLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/art" element={<Art />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
