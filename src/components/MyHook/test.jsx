import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// const Test = ({ value, handleChange }) => {
//   const [state, setstate] = useState(value);
//   useEffect(() => {
//     // props 更新也会在这里完成
//     console.log('完成mounted，或者完成更新');
//     setTimeout(() => {
//       setstate(state + 1);
//       console.log(`更新state的值: ${state}`);
//     }, 1000);
//   }, [state]);
//   return (
//     <div className="test">
//       {value}
//       <input type="text" value={value} onChange={handleChange} />
//     </div>
//   );
// };

const Test = ({ value }) => {
  const [state, setState] = useState(value);
  useEffect(() => {
    setState(value);
  }, [value]);
  // useEffect(() => {
  //   // props 更新也会在这里完成
  //   console.log('完成mounted，或者完成更新');
  //   setTimeout(() => {
  //     setstate(state + 1);
  //     console.log(`更新state的值: ${state}`);
  //   }, 1000);
  // }, [state]);
  return (
    <div className="test">
      {state}
      {/* <input type="text" value={value} onChange={handleChange} /> */}
    </div>
  );
};

Test.propTypes = {
  value: PropTypes.string,
};

Test.defaultProps = {
  value: '',
};

export default Test;
