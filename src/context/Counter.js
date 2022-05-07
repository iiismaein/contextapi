import React, { Fragment } from 'react';
import { CounterCtx } from './Context';
//
function Counter() {
  return (
    <Fragment>
      <h1>inc & dic</h1>

      {/* =>> create consumer to access data */}
      <CounterCtx.Consumer>
        {({ value, operation }) => {
          return (
            <div>
              <h2>{'counter is =>'}</h2>
              <h3>{value.counter}</h3>
              <button onClick={operation.inc}> inc</button>
              <button onClick={operation.dic}> dic</button>
            </div>
          );
        }}
      </CounterCtx.Consumer>
    </Fragment>
  );
}

export default Counter;
