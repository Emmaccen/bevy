import React from "react";
import "./App.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import MenuPage from "./components/pages/MenuPage";
import BlogPage from "./components/pages/BlogPage";
import AboutPage from "./components/pages/AboutPage";
import ContactPage from "./components/pages/ContactPage";
import TopSectionRender from "./components/topSectionContainer/TopSectionRender";
import MiddleSectionRender from "./components/middleSectionContainer/MiddleSectionRender";
import BaseSectionRender from "./components/baseSectionContainer/BaseSectionRender";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={TopSectionRender}>
          <TopSectionRender />
        </Route>

        <Route path="/" exact component={MiddleSectionRender}>
          <MiddleSectionRender />
        </Route>

        <Route path="/" exact component={BaseSectionRender}>
          <BaseSectionRender />
        </Route>

        <Switch>
          <Route path="/MenuPage" component={MenuPage}></Route>

          <Route path="/BlogPage" component={BlogPage}></Route>

          <Route path="/AboutPage" component={AboutPage}></Route>

          <Route path="/ContactPage" component={ContactPage}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
