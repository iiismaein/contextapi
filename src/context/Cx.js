import React, { Fragment } from 'react';
import { CounterCtx } from './Context';

const Cx = () => {
  return (
    <Fragment>
      <CounterCtx.Consumer>
        {({ value, operation }) => {
          return (
            <div>
              <h3>Counter is {value.counter}</h3>
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
