import React, { Fragment } from 'react';
import CompB from './CompB';
import { CounterCtx } from './ContextAB';

function CompA() {
  return (
    <Fragment>
      <div>
        <CounterCtx.Consumer>
          {({ value }) => {
            return (
              <Fragment>
                <h3>Counter A {value.counter}</h3>
              </Fragment>
            );
          }}
        </CounterCtx.Consumer>
      </div>
      <CompB />
    </Fragment>
  );
}

export default CompA;
