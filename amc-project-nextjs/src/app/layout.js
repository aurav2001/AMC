import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: {
    template: '%s | AMC Pro',
    default: 'AMC Pro - Annual Maintenance Contract Services',
  },
  description: 'Professional IT maintenance services for businesses. Hardware support, software solutions, network security, and comprehensive AMC plans in Noida.',
  keywords: ['AMC', 'Annual Maintenance Contract', 'IT maintenance', 'computer repair', 'network support', 'Noida', 'IT services', 'hardware support'],
  authors: [{ name: 'AMC Pro' }],
  creator: 'AMC Pro',
  openGraph: {
    title: 'AMC Pro - Professional IT Maintenance Services',
    description: 'Comprehensive Annual Maintenance Contracts for businesses. Hardware, software, and network support.',
    url: 'https://amcpro.in',
    siteName: 'AMC Pro',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AMC Pro - IT Maintenance Services',
    description: 'Professional IT maintenance services for businesses.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

// WhatsApp floating button component
const WhatsAppButton = () => (
  <a
    href="https://wa.me/919810443288"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-[100] hover:opacity-90 transition-all transform hover:scale-110"
    aria-label="Chat on WhatsApp"
  >
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
      alt="WhatsApp"
      className="w-16 h-16 drop-shadow-lg"
    />
  </a>
);

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 min-h-screen font-sans antialiased text-slate-900 selection:bg-primary-100 selection:text-primary-900">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
