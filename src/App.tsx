import React from 'react';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import CheckInPage from './pages/CheckInPage/CheckInPage';
import HotelSearchPage from './pages/HotelSearchPage/HotelSearchPage';
import store from './store/store';

const App = () => (
  <Provider store={store}>
    <Routes>
      <Route path="/" element={<CheckInPage />} />
      <Route path="/search" element={<HotelSearchPage />} />
    </Routes>
  </Provider>
);

export default App;
