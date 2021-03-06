import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

import './css/index.scss';

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);

module.hot.accept();
