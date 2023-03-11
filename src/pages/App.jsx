import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './mainPage';

function App() {
  return (
    <div className="page">
      <div className="page__content">
      <Routes>
                        <Route path="/lizing-test" element={
                            <MainPage />} >
                        </Route>
                        </Routes>
      </div>
    </div>
  );
}

export default App;
