import React from 'react';
import PropTypes from 'prop-types';
import Info from '@/pages/info/Info';
import About from '@/pages/about/About';
import {
  Switch,
  Route,
  useRouteMatch,
} from 'react-router-dom';

const Test = (props) => {
  console.log(props);
  return null;
};

const Home = (props) => {
  console.log('Home.jsx', props);
  const match = useRouteMatch();
  console.log(match);
  return (
    <div>
      Home
      {/* {children} */}
      <Switch>
        <Route path="info"><Info /></Route>
        <Route path="about"><About /></Route>
      </Switch>
      <Test />
    </div>
  );
};

// Home.propTypes = {
//   children: PropTypes.element,
// };

// Home.defaultProps = {
//   children: '',
// };

export default Home;
