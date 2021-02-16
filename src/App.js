import React from "react";
import "./style.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blockchain from "./pages/Blockchain";
import Wallets from "./pages/Wallets";

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact components={Home} />
          <Route path="/blockchain" components={Blockchain} />
          <Route path="/wallets" components={Wallets} />
        </Switch>
      </Router>
    </>
  );
}
