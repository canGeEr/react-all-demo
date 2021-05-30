import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Info from '../info/Info';
import About from '../about/About';
import Home from '../home/Home';

const Index = () => {
  console.log('Index.jsx');
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home}>
          {
            (props) => (
              <Home {...props} />
            )
          }
          {/* {() => (
            <Home>
              <Switch>
                <Route path="/info"><Info /></Route>
                <Route path="/about"><About /></Route>
              </Switch>
            </Home>
          )} */}
        </Route>
      </Switch>
    </Router>
  );
};

export default Index;
