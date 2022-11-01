import './App.scss';
import React from 'react';
import { Header } from './components/Header/Header';
import { Cart } from './components/Cart/Cart';
export const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Cart />
    </div>
  );
};
