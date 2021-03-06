import { Fragment } from 'react';
import { CounterCtx } from './Context';
//
function Counter() {
  /* =>> create consumer to access data */

  return (
    <CounterCtx.Consumer>
      {({ value, operation }) => {
        // {({ counter, inc, dic }) => {
        return (
          <Fragment>
            <h3>Counter is {value.counter}</h3>
            <button onClick={operation.inc}> inc</button>
            <button onClick={operation.dic}> dic</button>
          </Fragment>
        );
      }}
    </CounterCtx.Consumer>
  );
}

export default Counter;
