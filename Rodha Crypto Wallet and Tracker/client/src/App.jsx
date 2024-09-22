import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar, Welcome, Footer, Services, Transactions, Text } from './components';
import Market from './components/Market';
import Coin from "./components/Coin";
import { rootReducer } from './reducer';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { TransactionContext } from './context/TransactionContext';

const AppContent = () => {
  const location = useLocation();
  const store = configureStore({
    reducer:rootReducer
  })
  
  return (
    <Provider store={store}>
    <div className="min-h-screen flex flex-col">
      <div className="gradient-bg-welcome flex-grow">
        <Navbar />
        <Routes>
     
          <Route path="/" element={<Welcome />} />
          <Route path="/Login" element={<Text />} />
          <Route path="/coin/:id" element={<Coin />} />
          <Route path="/Market" element={<Market />} />
        </Routes>
      </div>
      {location.pathname === '/' && <Services />}
      {location.pathname === '/' && <Transactions />}
      <Footer />
    </div>
  </Provider>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
