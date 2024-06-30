import React from 'react'
import Nav from '../layout/Nav'

function InventarioMovs() {
  return (
    <main className="grid grid-cols-10">
    <div>
      <Nav />
    </div>
    <div className="col-span-9 bg-slate-300 p-8">
      <header className="border-b-2 pb-6 flex items-center">
        <h1 className="text-3xl font-semibold">Inventário</h1><span className='text-2xl font-semibold mx-2 pt-1'>{">"}</span><h2 className='text-2xl pt-1'>Movimentações</h2>
      </header>
      <table className="table-fixed mt-4 w-full">
        <thead>
          <tr className="border-2 text-left">
            <th className='p-2'>Item</th>
            <th className='text-center'>Descrição</th>
            <th className='text-center'>Tipo</th>
            <th className='text-center'>Quantidade Total</th>
            <th className='text-center'>U.M.</th>
            <th className='text-center'>Preço Unitário</th>
            <th className='text-center'>Marca</th>
            <th className='text-center'>Fornecedor</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-2 text-left">
            <td className='p-2'>1</td>
            <td className='text-center'>Abacaxi</td>
            <td className='text-center'>Fruta</td>
            <td className='text-center'>6</td>
            <td className='text-center'>Kg</td>
            <td className='text-center'>R$ 8,00</td>
            <td className='text-center'>-</td>
            <td className='text-center'>SLF Comércio de Frutas e Verduras</td>
          </tr>
        </tbody>
        <tbody>
          <tr className="border-2 text-left">
            <td className='p-2'>2</td>
            <td className='text-center'>Açucar</td>
            <td className='text-center'>Industrializado</td>
            <td className='text-center'>15</td>
            <td className='text-center'>Kg</td>
            <td className='text-center'>R$ 8,90</td>
            <td className='text-center'>União</td>
            <td className='text-center'>Cescom Censconeto Comercial LTDA</td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
  )
}

export default InventarioMovs