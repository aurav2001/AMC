import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PlanDetails from './pages/PlanDetails';
import Footer from './components/Footer';

const WhatsAppButton = () => (
  <a
    href="https://wa.me/919810443288"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-[100] hover:opacity-90 transition-all transform hover:scale-110"
    aria-label="Chat on WhatsApp"
  >
    {/* Using a high-quality PNG icon */}
    <img 
      src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
      alt="WhatsApp"
      className="w-16 h-16 drop-shadow-lg"
    />
  </a>
);

function App() {
  return (
    <Router>
      <div className="bg-slate-50 min-h-screen font-sans antialiased text-slate-900 selection:bg-primary-100 selection:text-primary-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/plan/:id" element={<PlanDetails />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;