import React, { Fragment } from 'react';
import { CounterCtx } from './ContextAB';

function CompB() {
  return (
    <CounterCtx.Consumer>
      {({ value }) => {
        return (
          <Fragment>
            <h3>Counter B {value.counter}</h3>
          </Fragment>
        );
      }}
    </CounterCtx.Consumer>
  );
}

export default CompB;
