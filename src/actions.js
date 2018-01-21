import {
  FLIP_CARD,
  FLIP_OVER_CARD,

  SET_TARGET,
  RESET_TARGET,

  INCREMENT_CLICKS,
  RESET_CLIKS
} from './types';

export const flip = id => (dispatch, getState) => {
  dispatch({ type: FLIP_CARD, id });
  dispatch({ type: SET_TARGET, target: id });
  dispatch({ type: INCREMENT_CLICKS });
  
  const { cards, clicks, target } = getState();
  if (clicks === 2){
    if (cards[id].backgroundColor !== cards[target].backgroundColor) {
      setTimeout(() => dispatch({ type: FLIP_OVER_CARD, id, target }), 500)
    };

    dispatch({ type: RESET_CLIKS });
    dispatch({ type: RESET_TARGET });
  }
};