import React from 'react';

function ButtonClose({ onClick }) {
  return (
    <img
      onClick={onClick}
      className="timer-container--btn-close"
      src="img/cross.svg"
      alt="close"
    />
  );
}

export default ButtonClose;
