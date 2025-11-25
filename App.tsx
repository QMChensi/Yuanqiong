import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Structure } from './pages/Structure';
import { Activities } from './pages/Activities';
import { Recruitment } from './pages/Recruitment';

// Wrapper to handle page transitions
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={
            <PageWrapper>
              <Home />
            </PageWrapper>
          } 
        />
        <Route 
          path="/structure" 
          element={
            <PageWrapper>
              <Structure />
            </PageWrapper>
          } 
        />
        <Route 
          path="/activities" 
          element={
            <PageWrapper>
              <Activities />
            </PageWrapper>
          } 
        />
        <Route 
          path="/recruitment" 
          element={
            <PageWrapper>
              <Recruitment />
            </PageWrapper>
          } 
        />
      </Routes>
    </AnimatePresence>
  );
};

const PageWrapper: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
);

const App = () => {
  return (
    <HashRouter>
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </HashRouter>
  );
};

export default App;