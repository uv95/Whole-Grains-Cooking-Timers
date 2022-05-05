import React from 'react';
import Grains from './shared/Grains';

function GrainsContainer({ onClick }) {
  return (
    <div onClick={onClick} className="grains-container">
      <Grains src="img/греча.png" name="BUCKWEAT" />
      <Grains src="img/овес.png" name="OATS" />
      <Grains src="img/пшено.png" name="MILLET" />
      <Grains src="img/перловка.png" name="PEARL BARLEY" />
      <Grains src="img/ячменная.png" name="BARLEY" />
      <Grains src="img/рис.png" name="RICE" />
      <Grains src="img/кускус.png" name="COUSCOUS" />
      <Grains src="img/полба.png" name="FARRO" />
      <Grains src="img/булгур.png" name="BULGUR" />
      <Grains src="img/киноа.png" name="QUINOA" />
    </div>
  );
}

export default GrainsContainer;
