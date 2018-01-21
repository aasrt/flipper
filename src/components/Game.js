import React from 'react';
import { connect } from 'react-redux';

import FlippedCard from './FlippedCard';
import { flip } from '../actions';

const Game = ({ cards, flip }) => (
  <React.Fragment>
    {Object.keys(cards).map((key, i) =>
      <FlippedCard key={i} onFlip={flip} {...cards[key]}>
        <div></div>{/* front */}
        <div></div>{/* back */}
      </FlippedCard>
    )}
  </React.Fragment>
);

export default connect(state => ({ cards: state.cards }), { flip })(Game);
