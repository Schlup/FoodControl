import React from 'react'
import Nav from '../layout/Nav'
import { Link } from 'react-router-dom';
import VerificarPedidoBotao from '../layout/VerificarPedidoBotao'

function Pedidos() {
    return (
        <main className='grid grid-cols-10'>
            <div>
                <Nav />
            </div>
            <div className="col-span-9 bg-slate-300 p-8">
                <header className="border-b-2 pb-6">
                    <h1 className="text-3xl font-semibold">Pedidos</h1>
                </header>
                <table className="table-fixed mt-4 w-full">
                    <thead>
                        <tr className="border-2 text-left">
                            <th className='text-tgrey p-2 text-center w-1/12'>Item</th>
                            <th className='w-4/12'>Código do Pedido</th>
                            <th className='text-center'>Número da Mesa</th>
                            <th className='text-center'>Valor Total</th>
                            <th className='text-center'>Tempo Estimado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-2 text-left">
                            <td className='text-tgrey p-2 text-center'>1</td>
                            <td className='pr-8'>PN398485</td>
                            <td className='text-center'>001</td>
                            <td className='text-center'>R$ 28,33</td>
                            <td className='text-center'>10 min</td>
                            <td className='flex p-2 gap-2 justify-center'>
                            <Link to="/pedidosCodPed">
                                <VerificarPedidoBotao />
                            </Link>
                            </td>
                        </tr>
                        <tr className="border-2 text-left">
                            <td className='text-tgrey p-2 text-center'>2</td>
                            <td className='pr-8'>PN398486</td>
                            <td className='text-center'>002</td>
                            <td className='text-center'>R$ 48,62</td>
                            <td className='text-center'>15 min</td>
                            <td className='flex p-2 gap-2 justify-center'>
                                <VerificarPedidoBotao />
                            </td>
                        </tr>
                        <tr className="border-2 text-left">
                            <td className='text-tgrey p-2 text-center'>3</td>
                            <td className='pr-8'>PN398487</td>
                            <td className='text-center'>005</td>
                            <td className='text-center'>R$ 34,79</td>
                            <td className='text-center'>13 min</td>
                            <td className='flex p-2 gap-2 justify-center'>
                                <VerificarPedidoBotao />
                            </td>
                        </tr>
                        <tr className="border-2 text-left">
                            <td className='text-tgrey p-2 text-center'>4</td>
                            <td className='pr-8'>PN398488</td>
                            <td className='text-center'>006</td>
                            <td className='text-center'>R$ 145,50</td>
                            <td className='text-center'>9 min</td>
                            <td className='flex p-2 gap-2 justify-center'>
                                <VerificarPedidoBotao />
                            </td>
                        </tr>
                        <tr className="border-2 text-left">
                            <td className='text-tgrey p-2 text-center'>5</td>
                            <td className='pr-8'>PN398489</td>
                            <td className='text-center'>011</td>
                            <td className='text-center'>R$ 13,54</td>
                            <td className='text-center'>11 min</td>
                            <td className='flex p-2 gap-2 justify-center'>
                                <VerificarPedidoBotao />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
    )
}

export default Pedidos