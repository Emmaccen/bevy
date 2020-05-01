import React from 'react';
import './App.css';
import TopSectionRender from './components/topSectionContainer/TopSectionRender'
import MiddleSectionRender from './components/middleSectionContainer/MiddleSectionRender'
import BaseSectionRender from './components/baseSectionContainer/BaseSectionRender'

function App() {
  return (
    <div className="App">
      <TopSectionRender />
      <MiddleSectionRender />
      <BaseSectionRender />
    </div>
  );
}

export default App;
