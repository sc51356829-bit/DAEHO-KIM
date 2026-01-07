
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import DashboardScreen from './screens/DashboardScreen';
import WheatScreen from './screens/WheatScreen';
import PalmOilScreen from './screens/PalmOilScreen';
import Layout from './components/Layout';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<DashboardScreen />} />
          <Route path="/wheat" element={<WheatScreen />} />
          <Route path="/palm" element={<PalmOilScreen />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
