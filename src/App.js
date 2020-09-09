import React from "react";
import "./App.scss";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <h1>checkout</h1>
          </Route>
          <Route path="/login"></Route>
          <Route path="/">
            <Header />
          </Route>

          {/*home*/}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
