import React from 'react';

const MyCom = (props) => {
  console.log(props.value);
  return (
    <div>
      {/* {value} */}
      <input type="text" />
    </div>
  );
};

export default React.memo(MyCom);
