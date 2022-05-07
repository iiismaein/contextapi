import React, { useState, createContext } from 'react';
// =>> 1-CreateContext and export it initial value =>0
export const CounterCtx = createContext(1);
CounterCtx.displayName = 'this name will show on chrome Dev';
// تحتوي البروفايدر
const ContextAB = (props) => {
  const [counter, setCounter] = useState(1);

  const inc = () => {
    setCounter((prevCount) => prevCount + 1);
  };
  const dic = () => {
    setCounter((prevCount) => prevCount - 1);
  };
  const mul = () => {
    setCounter((prevCount) => prevCount * 2);
  };
  const div = () => {
    setCounter((prevCount) => prevCount / 4);
  };
  const value = { counter: counter };
  const operation = { inc: inc, dic: dic, mul: mul, div: div };
  // const value = { counter, inc, dic, mul, div };
  return (
    // =>> create Provider to make context access
    <CounterCtx.Provider value={{ value, operation }}>
      {/* value => for all component */}

      {props.children}
    </CounterCtx.Provider>
  );
};
export default ContextAB;
