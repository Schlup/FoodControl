import React from 'react';
import { MdOutlineModeEdit } from 'react-icons/md';

function EditarPreparoBotao() {
  return (
    <button className="bg-navred text-white p-1 px-2 rounded-lg hover:bg-hoverred">
      <MdOutlineModeEdit className="size-6" />
    </button>
  );
}

export default EditarPreparoBotao;
