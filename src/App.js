import Counter from './context/Counter';
import Context from './context/Context';
import Cx from './context/Cx';
import { Fragment } from 'react';
import CompA from './newcontext/CompA';
import ContextAB from './newcontext/ContextAB';
import CounterAB from './newcontext/CounterAB';

const App = () => {
  return (
    <Fragment>
      <div>
        {/* for context */}
        {/* <Context>
          <Counter />
        </Context>
        <Context>
          <Cx />
        </Context> */}
      </div>
      <div>
        <ContextAB>
          <CounterAB />
          <CompA />
        </ContextAB>
      </div>
    </Fragment>
  );
};

export default App;
