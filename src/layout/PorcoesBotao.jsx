import React from 'react';
import { MdOutlineKebabDining } from "react-icons/md";

function PorcoesBotao() {
  return (
    <button className="bg-navred text-white p-2 px-4 rounded-lg text-xl flex items-center hover:bg-hoverred">
      <MdOutlineKebabDining className='size-6' />Porções
    </button>
  );
}

export default PorcoesBotao;
