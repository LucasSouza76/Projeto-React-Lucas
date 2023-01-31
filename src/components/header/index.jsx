import React from 'react';
import './App.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">Formula 1 Store</h1>
    </header>
  );
};

const Menu = () => {
  return (
    <nav className="menu">
      <ul className="menu-list">
        <li className="menu-item"><a href="#">Home</a></li>
        <li className="menu-item"><a href="#">Equipes</a></li>
        <li className="menu-item"><a href="#">Pedidos</a></li>
        <li className="menu-item"><a href="#">Sair</a></li>
      </ul>
    </nav>
  );
};

const App = () => {
  return (
    <div className="app">
      <Header />
      <Menu />
    </div>
  );
};

export default App;