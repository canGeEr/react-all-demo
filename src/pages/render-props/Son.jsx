import React from 'react';

const Son = (props) => (
  <div>
    {props.render({
      name: 'shepijcanwu',
      sex: 'male',
    })}
  </div>
);

export default Son;
