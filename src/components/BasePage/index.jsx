import React from 'react';

import RenderFather from '@/pages/render-props/Father';
import importAll from '@/utils/importAll';
import usernameContext from '@/components/username.context';
import ContextPage from '@/pages/context/index';
import Dispatch from '@/components/hooks/dispatch';
import SetState from './SetState';
import StateInput from './StateInput';
import List from './List.jsx';
import Layout from './Layout';
//  React本来是未使用变量，但是实质上JSX调用了React.createElement，因此eslint在使用JSX的时候就不会报错了
const { Provider } = usernameContext;
const components = importAll(require.context('@/components/base-component', false, /\.jsx$/));

Object.keys(components).forEach((key) => {
  const Component = components[key].default;
  // components[key] = <Component />;
  components[key] = Component;
});

const index = () => (
  <Provider value="shepijcanwu">
    <RenderFather />
    <h1>
      这是第一个react项目，并且加入了eslint检测代码是否有错
      <SetState />
      <StateInput title={() => ('')} />
      <List />
      <Layout left={components.left} />
      <Dispatch />
    </h1>
    <ContextPage />
  </Provider>
);

export default index;
