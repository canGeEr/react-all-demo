import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './pages/layout/Layout';
import Index from './pages/index/Index';
import Component from './pages/component/Component';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Index} exact />
          <Route path="/layout" component={Layout} />
          <Route path="/component" component={Component} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
