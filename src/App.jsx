// app.jsx
import React, { useState, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import PortfolioSection from './components/PortfolioSection';
import WhatWeDelilverSection from './components/WhatWeDelilverSection';
import CoreCompetenciesSection from './components/CoreCompetenciesSection';
import HowWeWorkSection from './components/HowWeWorkSection';
import MissionVisionSection from './components/MissionVisionSection';
import TestimonialsSection from './components/TestimonialsSection';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import SidebarContact from './components/sidebarContact/SidebarContact';
import './components/sidebarContact/SidebarContact.css';
import { Logo } from './assets';
import './App.css';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions';
import Imprint from './components/Imprint';
import UiUxDesignPage from './pages/UiUxDesignPage';
import AiAutomationPage from './pages/AiAutomationPage';
import EcommerceSolutionsPage from './pages/EcommerceSolutionsPage';
import MarketingSeoPage from './pages/MarketingSeoPage';
import MobileAppDevelopmentPage from './pages/MobileAppDevelopmentPage';
import CustomWebDevPage from './pages/CustomWebDevPage';
import ScrollToTop from './ScrollToTop';
import TechnologyStackSection from './components/TechnologyStackSection';

// Home component to render existing content
const Home = ({ openSidebar }) => {
  const { t } = useTranslation();

  return (
    <>
      {/* Meta tags for Home page */}
      <title>{t('meta.home.title')}</title>
      <meta name='description' content={t('meta.home.description')} />
      <meta property='og:title' content={t('meta.home.title')} />
      <meta property='og:description' content={t('meta.home.description')} />
      <meta property='og:type' content='website' />
      <meta property='og:url' content='https://bwdigit.com/' />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={t('meta.home.title')} />
      <meta name='twitter:description' content={t('meta.home.description')} />

      <HeroSection openSidebar={openSidebar} />
      <ServicesSection />
      <AboutSection />
      <PortfolioSection />
      <WhatWeDelilverSection />
      <CoreCompetenciesSection />
      <HowWeWorkSection />
      <MissionVisionSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
    </>
  );
};

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <Router>
      <ScrollToTop />
      <AppContent
        isSidebarOpen={isSidebarOpen}
        openSidebar={openSidebar}
        closeSidebar={closeSidebar}
      />
    </Router>
  );
}

function AppContent({ isSidebarOpen, openSidebar, closeSidebar }) {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div
      className={
        isHomePage
          ? 'min-h-screen bg-gradient-to-br from-[#54BD95]/15 via-[#F7DCA1]/15 to-[#D7ABE9]/15 relative'
          : 'bg-white'
      }
    >
      {isHomePage && (
        <div className='relative inset-0 bg-gradient-to-br from-[#54BD95]/15 via-[#F7DCA1]/15 to-[#D7ABE9]/15 pointer-events-none -z-10'></div>
      )}
      <Navbar openSidebar={openSidebar} />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Home openSidebar={openSidebar} />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route path='/terms-and-conditions' element={<TermsAndConditions />} />
          <Route path='/imprint' element={<Imprint />} />
          <Route path='/services/ui-ux-design' element={<UiUxDesignPage />} />
          <Route
            path='/services/marketing-seo'
            element={<MarketingSeoPage />}
          />
          <Route
            path='/services/ecommerce-solutions'
            element={<EcommerceSolutionsPage />}
          />
          <Route
            path='/services/ai-automation'
            element={<AiAutomationPage openSidebar={openSidebar} />}
          />
          <Route
            path='/services/mobile-app-development'
            element={<MobileAppDevelopmentPage />}
          />
          <Route
            path='/services/custom-web-development'
            element={<CustomWebDevPage />}
          />
        </Routes>
      </Suspense>
      <Footer openSidebar={openSidebar} />
      {isSidebarOpen && (
        <SidebarContact
          isOpen={isSidebarOpen}
          onClose={closeSidebar}
          logo={Logo}
        />
      )}
    </div>
  );
}

export default App;
