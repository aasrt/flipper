import { combineReducers } from 'redux';

import {
  FLIP_CARD,
  FLIP_OVER_CARD,

  SET_TARGET,
  RESET_TARGET,

  INCREMENT_CLICKS,
  RESET_CLIKS
} from './types';

const cards = (state={}, action) => {
  switch(action.type){
    case FLIP_CARD:
      return {
        ...state,
        [action.id]: { ...state[action.id], isFlipped: true }
      };

    case FLIP_OVER_CARD:
      const { id, target } = action;
      return {
        ...state,
        [id]: { ...state[id], isFlipped: false },
        [target]: { ...state[target], isFlipped: false }
      };
    default:
      return state
  }
};

const clicks = (state=0, action) => {
  switch(action.type){
    case INCREMENT_CLICKS:
      return state + 1;
    case RESET_CLIKS:
      return 0;
    default:
      return state
  }
};

const target = (state='', action) => {
  switch(action.type){
    case SET_TARGET:
      return state || action.target;
    case RESET_TARGET:
      return '';
    default:
      return state
  }
};

export default combineReducers({ cards, target, clicks });
