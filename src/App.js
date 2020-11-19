import React from "react";
import { FaqsContainer } from "./containers/faqs";

import FooterContainer from "./containers/footer";

import JumbotronContainer from "./containers/jumbotron";

import * as ROUTES from "./constants/routes";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <Route exact path={ROUTES.BROWSE}></Route>
      <Route exact path={ROUTES.SIGN_IN}></Route>
      <Route exact path={ROUTES.SIGN_UP}></Route>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
    </Router>
  );
}

export default App;
