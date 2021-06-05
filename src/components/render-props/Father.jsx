import React from 'react';
import RenderComponent from './Render';
import Son from './Son';

function renderRenderComponent(user) {
  return (
    <RenderComponent user={user} />
  );
}

const Father = () => (
  <div>
    <Son render={renderRenderComponent} />
  </div>
);

export default Father;
