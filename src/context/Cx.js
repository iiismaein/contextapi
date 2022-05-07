import React, { Fragment } from 'react';
import { CounterCtx } from './Context';

const Cx = () => {
  return (
    <Fragment>
      <h1>mul & div</h1>
      <CounterCtx.Consumer>
        {/* send what inside value */}
        {({ value, operation }) => {
          return (
            <div>
              <h2>{'counter is =>'}</h2>
              <h3>{value.counter}</h3>
              <button onClick={operation.mul}> mul</button>
              <button onClick={operation.div}> div</button>
            </div>
          );
        }}
      </CounterCtx.Consumer>
    </Fragment>
  );
};

export default Cx;
