import React from 'react';
import './App.scss';
import BooksManager from './components/BooksManager/BooksManager';

function App() {
  return (
    <div className="app">
      <h1 className='app__title'>List of books</h1>
      <BooksManager />
    </div>
  );
}

export default App;
