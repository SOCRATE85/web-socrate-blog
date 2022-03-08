import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/our-mission" element={<About />} />
        <Route path="/our-experience" element={<About />} />
        <Route path="/why-us" element={<About />} />
        <Route path="/our-services" element={<About />} />
        <Route path="/our-courses" element={<About />} />
        <Route path="/our-services/weekly-webinars-for-working-dbas" element={<About />} />
        <Route path="/corporate-training" element={<About />} />
        <Route path="/our-services/interview-bootcamps" element={<About />} />
        <Route path="/our-services/mentorship-program" element={<About />} />
        <Route path="/our-services/one-on-one-on-the-job-support" element={<About />} />
        <Route path="/our-services/scholarships" element={<About />} />
        <Route path="/our-services/refer-earn" element={<About />} />
        <Route path="/our-clients" element={<About />} />
        <Route path="/testimonials" element={<About />} />
        <Route path="/careers" element={<About />} />
        <Route path="/our-blog" element={<About />} />
        <Route path="/apply-for-training-now" element={<About />} />
        <Route path="/contact-us" element={<About />} />
        <Route path="/faqs" element={<About />} />
        <Route path="/become-an-instructor" element={<About />} />
        <Route path="/website-policy" element={<About />} />
        <Route path="/terms-conditions" element={<About />} />
      </Routes>
    </Layout>    
  );
}

export default App;
