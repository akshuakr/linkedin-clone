import "./App.css";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import React from "react";

const App = () => {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Login />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default App;
