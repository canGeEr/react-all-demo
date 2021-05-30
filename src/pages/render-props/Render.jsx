import React from 'react';

const Render = (props) => {
  const { user } = props;
  return (
    <div>
      {user.name}
      {user.sex}
    </div>
  );
};

export default Render;
