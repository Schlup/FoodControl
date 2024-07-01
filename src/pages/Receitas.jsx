import React from 'react'
import Nav from '../layout/Nav'
import { Link } from 'react-router-dom';
import ModoPraparoBotao from '../layout/ModoPraparoBotao'
import EditarPreparoBotao from '../layout/EditarPreparoBotao'
import RemoverPreparoBotao from '../layout/RemoverPreparoBotao'

function Receitas() {
  return (
    <main className="grid grid-cols-10">
      <div>
        <Nav />
      </div>
      <div className="col-span-9 bg-slate-300 p-8">
        <header className="border-b-2 pb-6">
          <h1 className="text-3xl font-semibold">Receitas</h1>
        </header>
        <table className="table-fixed mt-4 w-full">
          <thead>
            <tr className="border-2 text-left">
              <th className='text-tgrey p-2 text-center w-1/12'>Receita</th>
              <th className='w-4/12'>Descrição</th>
              <th className='text-center'>Serve</th>
              <th className='text-center'>Preço</th>
              <th className='text-center'>Tempo de Preparo</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-2 text-left">
              <td className='text-tgrey p-2 text-center'>1</td>
              <td className='pr-8'>Arroz de forno com legumes e Catupiry</td>
              <td className='text-center'>2 Pessoas</td>
              <td className='text-center'>R$ 17,00</td>
              <td className='text-center'>50 min</td>
              <td className='flex p-2 gap-2 justify-center'>
                <Link to="/mododepreparo">
                  <ModoPraparoBotao />
                </Link>
                <EditarPreparoBotao />
                <RemoverPreparoBotao />
              </td>
            </tr>
            <tr className="border-2 text-left">
              <td className='text-tgrey p-2 text-center'>2</td>
              <td className='pr-8'>Lasanha de frango com dois molhos</td>
              <td className='text-center'>2 Pessoas</td>
              <td className='text-center'>R$ 20,00</td>
              <td className='text-center'>70 min</td>
              <td className='flex p-2 gap-2 justify-center'>
                <ModoPraparoBotao />
                <EditarPreparoBotao />
                <RemoverPreparoBotao />
              </td>
            </tr>
            <tr className="border-2 text-left">
              <td className='text-tgrey p-2 text-center'>3</td>
              <td className='pr-8'>Medalhão de frango com purê de mandioquinha</td>
              <td className='text-center'>4 Pessoas</td>
              <td className='text-center'>R$ 22,00</td>
              <td className='text-center'>130 min</td>
              <td className='flex p-2 gap-2 justify-center'>
                <ModoPraparoBotao />
                <EditarPreparoBotao />
                <RemoverPreparoBotao />
              </td>
            </tr>
            <tr className="border-2 text-left">
              <td className='text-tgrey p-2 text-center'>4</td>
              <td className='pr-8'>Fricassê de frango e creme de milho</td>
              <td className='text-center'>2 Pessoas</td>
              <td className='text-center'>R$ 18,00</td>
              <td className='text-center'>40 min</td>
              <td className='flex p-2 gap-2 justify-center'>
                <ModoPraparoBotao />
                <EditarPreparoBotao />
                <RemoverPreparoBotao />
              </td>
            </tr>
            <tr className="border-2 text-left">
              <td className='text-tgrey p-2 text-center'>5</td>
              <td className='pr-8'>Bacalhau gratinado aos queijos</td>
              <td className='text-center'>3 Pessoas</td>
              <td className='text-center'>R$ 25,00</td>
              <td className='text-center'>60 min</td>
              <td className='flex p-2 gap-2 justify-center'>
                <ModoPraparoBotao />
                <EditarPreparoBotao />
                <RemoverPreparoBotao />
              </td>
            </tr>
            <tr className="border-2 text-left">
              <td className='text-tgrey p-2 text-center'>6</td>
              <td className='pr-8'>Escondidinho de carne moída com batata</td>
              <td className='text-center'>2 Pessoas</td>
              <td className='text-center'>R$ 19,00</td>
              <td className='text-center'>75 min</td>
              <td className='flex p-2 gap-2 justify-center'>
                <ModoPraparoBotao />
                <EditarPreparoBotao />
                <RemoverPreparoBotao />
              </td>
            </tr>
            <tr className="border-2 text-left">
              <td className='text-tgrey p-2 text-center'>7</td>
              <td className='pr-8'>Salada com iscas de peixe</td>
              <td className='text-center'>1 Pessoa</td>
              <td className='text-center'>R$ 12,00</td>
              <td className='text-center'>35 min</td>
              <td className='flex p-2 gap-2 justify-center'>
                <ModoPraparoBotao />
                <EditarPreparoBotao />
                <RemoverPreparoBotao />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  )
}

export default Receitas