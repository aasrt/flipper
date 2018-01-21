import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import Game from './components/Game';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('root'));