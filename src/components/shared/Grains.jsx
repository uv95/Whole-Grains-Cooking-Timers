import React from 'react';

function Grains({ name, src }) {
  return (
    <div className="grains">
      <img className="grains-img" src={src} alt={name} />
      <p>{name}</p>
      <img className="grains-title-img" src="img/grains-bg.png" alt="" />
    </div>
  );
}

export default Grains;
