import React, {useState} from 'react';
import './App.css';
import ResolutionContainer from './components/container/resolutionContainer';
import ResolutionVisualizer from './components/container/resolutionVisualizer';
import container_img from "./img/container-background1.jpg"
import { Resolution } from './models/resolution.class';

function App() {

  const [selectedResolution, setSelectedResolution] = useState<Resolution | null>(null)

  function selectResolution(resolution: Resolution | null) {
    setSelectedResolution(resolution);
  }

  return (
    <div className="App">
      <img src={container_img} alt="" />
      <ResolutionContainer selectResolution={selectResolution} />
      {
          selectedResolution!==null 
          ? <ResolutionVisualizer resolution = {selectedResolution} selectResolution={selectResolution}/> 
          : ""
      }
      
    </div>
  );
}

export default App;
