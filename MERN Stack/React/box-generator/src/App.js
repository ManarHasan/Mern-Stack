import BoxForm from './componenets/BoxForm';
import DisplayBox from './componenets/DisplayBox';
import React, {useState} from 'react';
import './App.css';

function App() {
  const [currentColors, setCurrentColors] = useState([]);
  const [currentHeights, setCurrentHeights] = useState([]);
  const newBox = (newColors) => {
    setCurrentColors([...currentColors, newColors]);
  }
  const newHeight = (height) => {
    setCurrentHeights([...currentHeights, height]);
  }
  return (
    <div className="App">
      <BoxForm onNewColors = {newBox} onNewHeights = {newHeight}/>
      <DisplayBox colors = {currentColors} heights = {currentHeights} >
        
        </DisplayBox>
    </div>
  );
}

export default App;
