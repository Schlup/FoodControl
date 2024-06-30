import React from 'react'
import Nav from '../layout/Nav'
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
              <th className='p-2 text-center w-1/12'>Receita</th>
              <th className='w-4/12'>Descrição</th>
              <th className='text-center'>Serve</th>
              <th className='text-center'>Preço</th>
              <th className='text-center'>Tempo de Preparo</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-2 text-left">
              <td className='p-2 text-center'>1</td>
              <td className='pr-8'>Arroz de forno com legumes e Catupiry</td>
              <td className='text-center'>2 Pessoas</td>
              <td className='text-center'>R$ 17,00</td>
              <td className='text-center'>50 min</td>
              <td><ModoPraparoBotao /></td>
              <td><EditarPreparoBotao /></td>
              <td><RemoverPreparoBotao /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  )
}

export default Receitas