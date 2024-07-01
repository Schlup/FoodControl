import React from 'react';
import { MdOutlineRestaurant } from "react-icons/md";

function SalgadosBotao() {
  return (
    <button className="bg-navred text-white p-2 px-4 rounded-lg text-xl flex items-center hover:bg-hoverred">
      <MdOutlineRestaurant className='size-6' />Salgados
    </button>
  );
}

export default SalgadosBotao;
