import React from 'react';
import './App.css';
import Nav from './navigation/navigation';
import Window from './window/window';

function App() {
  return (
    <div>
      <div className="Hero">
        <Nav/>
      </div>
      <div>
        <Window/>
        <Window/>
        <Window/> 
      </div>
      <div className="Footer">
        Разработано Дауреном Сансызбаевым
      </div>
    </div>
  );
}

export default App;
