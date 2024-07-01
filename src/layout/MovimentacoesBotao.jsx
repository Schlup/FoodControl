import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlus } from "react-icons/fa6";

function MovimentacoesBotao() {
  return (
    <Link to="/movimentacoes">
      <button className="bg-navred text-white p-2 px-4 rounded-lg text-xl flex items-center hover:bg-hoverred">
        <FaPlus className='size-6' />Movimentações
      </button>
    </Link>
  );
}

export default MovimentacoesBotao;
