import React from 'react';
import { Fragment } from 'react';
import Cx from './context/Cx';
import Context from './context/Context';
import Counter from './context/Counter';

function App() {
  return (
    <Fragment>
      <Context />
      <Cx />
      <Counter />
    </Fragment>
  );
}

export default App;
