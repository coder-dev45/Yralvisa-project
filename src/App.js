import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SearchBar from './components/SearchBar';
import FilterTabs from './components/FilterTabs';
import VisaCardList from './components/VisaList';
import BottomToggle from './components/BottomToggle';
import Footer from './components/Footer';
import CareersSection from './components/company/Careers';

function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />
      <SearchBar />
      <FilterTabs />
      <VisaCardList />
      <BottomToggle />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/careers"
          element={
            <>
              <Header />
              <CareersSection />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
