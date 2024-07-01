import React from 'react';
import { MdOutlineDeleteForever } from 'react-icons/md';

function RemoverPreparoBotao() {
  return (
    <button className="bg-navred text-white p-1 px-2 rounded-lg">
      <MdOutlineDeleteForever className="size-6" />
    </button>
  );
}

export default RemoverPreparoBotao;
