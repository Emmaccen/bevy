import React from 'react';
import './App.css';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom'
import AboutPage from './AboutPage'
import TopSectionRender from './components/topSectionContainer/TopSectionRender'
import MiddleSectionRender from './components/middleSectionContainer/MiddleSectionRender'
import BaseSectionRender from './components/baseSectionContainer/BaseSectionRender'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={TopSectionRender}><TopSectionRender /></Route>
        </Switch>
        <Switch>
          <Route path='/' exact component={MiddleSectionRender}><MiddleSectionRender /></Route>
        </Switch>
        <Switch>
          <Route path='/' exact component={BaseSectionRender}><BaseSectionRender /></Route>
        </Switch>
        <Switch>
         <Route path='/AboutPage' component={AboutPage}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
