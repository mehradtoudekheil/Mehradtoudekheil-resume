import React from 'react';
import './style/style.css';
import Header from './components/Header';
import Main from './components/Main';

const App = () => {
  return (
    <div className='w-full bg-gray-950 body-bg p-0 m-0' >
      <div className='app-container w-full'>
      <Header/>
      <Main/>
      </div>
    </div>
  );
};

export default App;