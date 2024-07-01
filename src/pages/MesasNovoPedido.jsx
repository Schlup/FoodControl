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
        <header className="border-b-2 pb-6 flex justify-between">
          <div className='flex'><Link to="/mesas"><h1 className="text-3xl font-semibold">Mesas</h1></Link><span className="text-2xl font-semibold mx-2 pt-1">{'>'}</span><h2 className="text-2xl pt-1">Novo Pedido</h2></div>
          <ConcluirBotao />
        </header>
        <div className='grid-cols-12 flex'>
          <div className='bg-grey w-3/12 mt-4 flex flex-col'>
            <div className='p-4 text-2xl flex flex-col h-full'>
              <div className='p-2'>
                <h2>Refrigerante Coca-Cola Pet 2L</h2>
                <p className=''>R$9,79 x1 R$9,79</p>
              </div>
              <div className='p-2'>
                <h2>Refrigerante Guaraná Antarctica Lata 350ml</h2>
                <p className=''>R$2,99 x2 R$5,98</p>
              </div>
              <div className='p-2'>
                <h2>Pastel de Frango com Requeijão Massotti 120g</h2>
                <p className=''>R$6,28 x2 R$12,56</p>
              </div>
              <div className='flex-grow'></div>
              <div className='bg-confirmed p-4 text-white text-2xl mt-auto'>
                <p>Total</p>
                <p>R$ 28,33</p>
              </div>
            </div>
          </div>

          <div className='w-9/12'>
            <div className='flex gap-6 mt-4 justify-evenly h-min'>
              <BebidasBotao />
              <DocesBotao />
              <SalgadosBotao />
              <PorcoesBotao />
              <LanchesBotao />
            </div>

            <div className='flex flex-wrap gap-x-14 gap-y-6 p-16'>
              <div className='bg-navred p-2 text-white'>
                <img src="" alt="" className='bg-cocacola bg-cover p-28' />
                <p>Coca-Cola Pet 2L</p>
                <p>R$ 9,79</p>
              </div>
              <div className='bg-navred p-2 text-white'>
                <img src="" alt="" className='bg-pepsi bg-cover p-28' />
                <p>Pepsi Pet 2L</p>
                <p>R$ 7,49</p>
              </div>
              <div className='bg-navred p-2 text-white'>
                <img src="" alt="" className='bg-guarana bg-cover p-28' />
                <p>Guaraná Antarctica Pet 2L</p>
                <p>R$ 7,99</p>
              </div>
              <div className='bg-navred p-2 text-white'>
                <img src="" alt="" className='bg-maxlaranjinha bg-cover p-28' />
                <p>Laranjinha Max Pet 2L</p>
                <p>R$ 5,49</p>
              </div>
              <div className='bg-navred p-2 text-white'>
                <img src="" alt="" className='bg-maxframboesa bg-cover p-28' />
                <p>Framboesa Max Pet 2L</p>
                <p>R$ 5,49</p>
              </div>
              <div className='bg-navred p-2 text-white'>
                <img src="" alt="" className='bg-cocacolalata bg-cover p-28' />
                <p>Coca-Cola Lata 350ml</p>
                <p>R$ 3,69</p>
              </div>
              <div className='bg-navred p-2 text-white'>
                <img src="" alt="" className='bg-cocacolazerolata bg-cover p-28' />
                <p>Coca-Cola Zero Lata 350ml</p>
                <p>R$ 3,69</p>
              </div>
              <div className='bg-navred p-2 text-white'>
                <img src="" alt="" className='bg-guaranalata bg-cover p-28' />
                <p>Guaraná Antarctica Lata 350ml</p>
                <p>R$ 2,99</p>
              </div>
              <div className='bg-navred p-2 text-white'>
                <img src="" alt="" className='bg-spritelata bg-cover p-28' />
                <p>Limão Sprite Lata 350ml</p>
                <p>R$ 3,29</p>
              </div>
              <div className='bg-navred p-2 text-white'>
                <img src="" alt="" className='bg-spritezerolata bg-cover p-28' />
                <p>Limão Zero Sprite Lata 350ml</p>
                <p>R$ 3,29</p>
              </div>
              <div className='bg-navred p-2 text-white'>
                <img src="" alt="" className='bg-fantalaranjalata bg-cover p-28' />
                <p>Fanta Laranja Lata 350ml</p>
                <p>R$ 3,39</p>
              </div>
              <div className='bg-navred p-2 text-white'>
                <img src="" alt="" className='bg-fantauvalata bg-cover p-28' />
                <p>Fanta Uva Lata 350ml</p>
                <p>R$ 3,39</p>
              </div>
              <div className='bg-navred p-2 text-white'>
                <img src="" alt="" className='bg-fantamaracujalata bg-cover p-28' />
                <p>Maracujá Fanta Lata 350ml</p>
                <p>R$ 3,39</p>
              </div>
              <div className='bg-navred p-2 text-white'>
                <img src="" alt="" className='bg-fantaguaranalata bg-cover p-28' />
                <p>Guaraná Fanta Lata 350ml</p>
                <p>R$ 3,19</p>
              </div>
              <div className='bg-navred p-2 text-white'>
                <img src="" alt="" className='bg-fantaguaranazerolata bg-cover p-28' />
                <p>Guaraná Zero Fanta Lata 350ml</p>
                <p>R$ 3,19</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MesasNovoPedido;
