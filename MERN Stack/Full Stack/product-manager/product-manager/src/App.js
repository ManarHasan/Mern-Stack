import React from 'react';
import './App.css';
import Main from './Main';
import { Router } from '@reach/router';
import Product from './components/Product';
import Update from './components/Update';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="products/"/>
        <Product path="product/:id" />
        <Update path="products/:id/edit" />
      </Router>
    </div>
  );
}

export default App;
