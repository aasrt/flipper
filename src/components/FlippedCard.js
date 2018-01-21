import React from 'react';

const FlippedCard = ({ id, onFlip, isFlipped, backgroundColor, children }) => {
  const style = {
    transform: isFlipped ? 'rotateY(180deg)' : ''
  };

  const flippedChildrens = React.Children.map(children, (child, i) => {
    switch(i){
      case 0:
        return React.cloneElement(child, {
          name: 'Front',
          className: 'front',
          onClick: () => onFlip(id)
        });

      case 1:
        return React.cloneElement(child, {
          name: 'Back',
          className: 'back',
          style: { backgroundColor }
        });

      default:
        return;
    }
  });

  return (
    <div className="flip-container">
      <div className="flipper" style={style}>
        {flippedChildrens}
      </div>
    </div>
  )
}

export default FlippedCard;