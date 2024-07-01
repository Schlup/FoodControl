import React from 'react';
import { PiHamburger } from "react-icons/pi";

function LanchesBotao() {
  return (
    <button className="bg-navred text-white p-2 px-16 rounded-lg text-xl flex items-center hover:bg-hoverred">
      <PiHamburger className='size-6' />Lanches
    </button>
  );
}

export default LanchesBotao;
