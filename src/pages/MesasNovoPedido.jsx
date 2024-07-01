import React from 'react';
import Nav from '../layout/Nav';
import { Link } from 'react-router-dom';
import ConcluirBotao from '../layout/ConcluirBotao';
import BebidasBotao from '../layout/BebidasBotao';
import DocesBotao from '../layout/DocesBotao';
import SalgadosBotao from '../layout/SalgadosBotao';
import PorcoesBotao from '../layout/PorcoesBotao';
import LanchesBotao from '../layout/LanchesBotao';

function MesasNovoPedido() {
  return (
    <main className="grid grid-cols-10">
      <div>
        <Nav />
      </div>
      <div className="col-span-9 p-8">
        <header className="border-b-2 pb-6 flex">
          <Link to="/mesas">
            <h1 className="text-3xl font-semibold">Mesas</h1>
          </Link>
          <span className="text-2xl font-semibold mx-2 pt-1">{'>'}</span>
          <h2 className="text-2xl pt-1">Novo Pedido</h2>
          <ConcluirBotao />
        </header>
        <div className='flex flex-wrap gap-6 mt-4 w-full'>
        <BebidasBotao />
        <DocesBotao />
        <SalgadosBotao />
        <PorcoesBotao />
        <LanchesBotao />
          <div className='bg-grey w-80 h-60 rounded-lg'>
            <h2 className='px-4 py-2 bg-waiting text-white flex justify-between text-lg rounded-lg'>Mesa 002</h2>
            <p className='mx-4 font-semibold mt-2'>Capacidade: <span className='font-normal'>4 Pessoas</span></p>
            <p className='mx-4 font-semibold mt-2'>Local: <span className='font-normal'>Salão</span></p>
            <p className='mx-4 font-semibold mt-2'>Status: <span className='font-normal'>Indisponível</span></p>
            <p className='mx-4 font-semibold mt-2'>Tempo: <span className='font-normal'>15 min</span></p>
            <p className='mx-4 font-semibold mt-2'>Valor: <span className='font-normal'>R$48,62</span></p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MesasNovoPedido;
