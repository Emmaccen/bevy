import React from 'react';
import './App.css';
import TopSectionRender from './components/topSectionContainer/TopSectionRender'
import MiddleSectionRender from './components/middleSectionContainer/MiddleSectionRender'

function App() {
  return (
    <div className="App">
      <TopSectionRender />
      <MiddleSectionRender />
    </div>
  );
}

export default App;
