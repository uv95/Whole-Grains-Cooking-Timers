import React from 'react';

function ButtonStart({ onClick, text, hover }) {
  return (
    <button
      onClick={onClick}
      className={hover ? 'btn-start' : 'btn-start no-hover'}
    >
      {text}
    </button>
  );
}

export default ButtonStart;
