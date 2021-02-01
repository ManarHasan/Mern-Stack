import Tab from './components/Tab';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [array, setArray] = useState(['this is content', 'this is also content', 'this is content too!'])
  return (
    <div className="App">
      <Tab contents = {array}/>
    </div>
  );
}

export default App;
