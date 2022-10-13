import './App.scss';
import React from 'react';
import { Header } from './components/Header';
import { Cart } from './components/Cart';
function App() {
  return (
    <div className="wrapper">
      <Header />
      <Cart />
    </div>
  );
}

export default App;
