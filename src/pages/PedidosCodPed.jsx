import React from 'react';
import Nav from '../layout/Nav';
import { Link } from 'react-router-dom';
import ConcluirBotao from '../layout/ConcluirBotao';

function PedidosCodPed() {
  return (
    <main className="grid grid-cols-10">
      <div>
        <Nav />
      </div>
      <div className="col-span-9 bg-slate-300 p-8">
        <header className="border-b-2 pb-6 flex items-center">
          <Link to="/pedidos">
            <h1 className="text-3xl font-semibold">Pedidos</h1>
          </Link>
          <span className="text-2xl font-semibold mx-2 pt-1">{'>'}</span>
          <h2 className="text-2xl pt-1">PN398485</h2>
          <ConcluirBotao />
        </header>
        <table className="table-fixed mt-4 w-full">
          <thead>
            <tr className="border-2 text-left">
              <th className="text-tgrey p-2 text-center w-1/12">Item</th>
              <th className="w-4/12">Descrição</th>
              <th className="text-center">Quantidade</th>
              <th className="text-center">Tempo Estimado</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-2 text-left">
              <td className="text-tgrey p-2 text-center">1</td>
              <td className="pr-8">Refrigerante Coca-Cola Pet 2L</td>
              <td className="text-center">1</td>
              <td className="text-center">-</td>
            </tr>
            <tr className="border-2 text-left">
              <td className="text-tgrey p-2 text-center">2</td>
              <td className="pr-8">Refrigerante Guaraná Antarctica Lata 350ml</td>
              <td className="text-center">2</td>
              <td className="text-center">-</td>
            </tr>
            <tr className="border-2 text-left">
              <td className="text-tgrey p-2 text-center">3</td>
              <td className="pr-8">Pastel de Frango com Requeijão Massotti 120g</td>
              <td className="text-center">2</td>
              <td className="text-center">10 min</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default PedidosCodPed;
