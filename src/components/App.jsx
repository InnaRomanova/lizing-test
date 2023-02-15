import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../components/Main';

function App() {
  return (
    <div className="page">
      <div className='page__content'>
      <Routes>
                        <Route exac path="/" element={<div>
                            <Main />
                        </div>} >
                        </Route>
                        </Routes>
      </div>
    </div>
  );
}

export default App;
