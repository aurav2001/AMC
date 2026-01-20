import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PlanDetails from './pages/PlanDetails';
import Hardware from './pages/Hardware';
import Software from './pages/Software';
import Business from './pages/Business';
import Printer from './pages/Printer';
import Networking from './pages/Networking';
import CCTV from './pages/CCTV';
import Footer from './components/Footer';
import AdminLogin from './pages/admin/AdminLogin';
import AdminLayout from './pages/admin/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import HomeEditor from './pages/admin/HomeEditor';
import PlansEditor from './pages/admin/PlansEditor';
import SettingsEditor from './pages/admin/SettingsEditor';
import SoftwareEditor from './pages/admin/SoftwareEditor';
import HardwareEditor from './pages/admin/HardwareEditor';
import ProtectedRoute from './components/ProtectedRoute';
import KeyboardShortcuts from './components/KeyboardShortcuts';

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
      <KeyboardShortcuts />
      <Routes>
        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/*" element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="home" element={<HomeEditor />} />
          <Route path="plans" element={<PlansEditor />} />
          <Route path="software" element={<SoftwareEditor />} />
          <Route path="hardware" element={<HardwareEditor />} />
          <Route path="settings" element={<SettingsEditor />} />
        </Route>

        {/* Public Routes */}
        <Route path="/*" element={
          <div className="bg-slate-50 min-h-screen font-sans antialiased text-slate-900 selection:bg-primary-100 selection:text-primary-900">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/plan/:id" element={<PlanDetails />} />
              <Route path="/services/hardware" element={<Hardware />} />
              <Route path="/services/software" element={<Software />} />
              <Route path="/services/business" element={<Business />} />
              <Route path="/services/printer" element={<Printer />} />
              <Route path="/services/networking" element={<Networking />} />
              <Route path="/services/cctv" element={<CCTV />} />
            </Routes>
            <Footer />
            <WhatsAppButton />
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;