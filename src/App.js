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
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
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
          <Route exact path="/MenuPage" component={MenuPage}></Route>

          <Route exact path="/BlogPage" component={BlogPage}></Route>

          <Route exact path="/AboutPage" component={AboutPage}></Route>

          <Route exact path="/ContactPage" component={ContactPage}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
