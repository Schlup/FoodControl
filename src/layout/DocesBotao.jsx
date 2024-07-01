import React from 'react';
import { MdOutlineCake } from "react-icons/md";

function DocesBotao() {
  return (
    <button className="bg-navred text-white p-2 px-16 rounded-lg text-xl flex items-center hover:bg-hoverred">
      <MdOutlineCake className='size-6' />Doces
    </button>
  );
}

export default DocesBotao;
