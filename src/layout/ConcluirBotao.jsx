import React from 'react';
import { FaCheck } from "react-icons/fa";

function ConcluirBotao() {
  return (
    <button className="bg-navred text-white p-2 px-4 rounded-lg text-xl flex items-center hover:bg-hoverred">
      <FaCheck className='size-6' />Concluir
    </button>
  );
}

export default ConcluirBotao;
