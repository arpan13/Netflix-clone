import React from "react";
import { FaqsContainer } from "./containers/faqs";

import FooterContainer from "./containers/footer";

import JumbotronContainer from "./containers/jumbotron";

function App() {
  return (
    <div className="App">
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </div>
  );
}

export default App;
