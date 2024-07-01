import React from 'react';
import { FaPlus } from "react-icons/fa6";

function NovaMesaBotao() {
  return (
    <button className="bg-navred text-white p-2 px-4 rounded-lg text-xl flex items-center hover:bg-hoverred">
      <FaPlus className='size-6' />Nova Mesa
    </button>
  );
}

export default NovaMesaBotao;
