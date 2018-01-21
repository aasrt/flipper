import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import gameReducer from './reducers';

const initialState = {
  cards: {
    1: { id: 1, isFlipped: false, backgroundColor: 'Orchid' },
    2: { id: 2, isFlipped: false, backgroundColor: 'Aquamarine' },
    3: { id: 3, isFlipped: false, backgroundColor: 'Gold' },
    4: { id: 4, isFlipped: false, backgroundColor: 'tomato' },
    5: { id: 5, isFlipped: false, backgroundColor: 'Aquamarine' },
    6: { id: 6, isFlipped: false, backgroundColor: 'Orchid' },
    7: { id: 7, isFlipped: false, backgroundColor: 'tomato' },
    8: { id: 8, isFlipped: false, backgroundColor: 'Gold' },
  },
  target: '',
  clicks: 0
};

export default createStore(
  gameReducer,
  initialState,
  applyMiddleware(thunk, logger)
);