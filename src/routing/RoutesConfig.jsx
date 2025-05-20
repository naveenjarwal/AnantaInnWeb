import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RowCard1Screen from '../screens/RowCard1Screen';
import HomeScreen from '../screens/home';

const RoutesConfig = () => {
  return (
    <Routes>
      {/* Home Screen */}
      <Route path="/" element={<HomeScreen />} />

      {/* Row Card 1 Screen */}
      <Route path="/row-card-1" element={<RowCard1Screen />} />
    </Routes>
  );
};

export default RoutesConfig;


//  ErrorRead operation on table 'sn_hr_core_case' from scope 'Global' was denied. 
// The application 'Global' must declare a cross scope access privilege. 
// Please contact the application admin to update their access requests.