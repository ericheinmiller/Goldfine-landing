import React from 'react';
import Context from '../context/mainContext';

export default () => (
  <div>
    <Context.Consumer>
      { context => <h1 className="greeting">{context.greeting}</h1> }
    </Context.Consumer>
  </div>
);
