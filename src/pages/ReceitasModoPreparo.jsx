import React from 'react'
import Nav from '../layout/Nav'

function ReceitasModoPreparo() {
    return (
        <main className="grid grid-cols-10">
            <div>
                <Nav />
            </div>
            <div className="col-span-9 bg-slate-300 p-8">
                <header className="border-b-2 pb-6 flex items-center">
                    <h1 className="text-3xl font-semibold">Receitas</h1><span className='text-2xl font-semibold mx-2 pt-1'>{">"}</span><h2 className='text-2xl pt-1'>Modo de Preparo</h2><span className='text-2xl font-semibold mx-2 pt-1'>{">"}</span><h2 className='text-2xl pt-1'>Arroz de forno com legumes e catupiry</h2>
                </header>
                <table className="table-fixed mt-4 w-full">
                    <thead>
                        <tr className="border-2 text-left">
                            <th className='p-2'>Item</th>
                            <th className='text-center'>Ingredientes</th>
                            <th className='text-center'>Quantidade</th>
                            <th className='text-center'>U.M</th>
                            <th className='w-6/12'></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-2 text-left">
                            <td className='p-2'>1</td>
                            <td className='text-center'>Óleo</td>
                            <td className='text-center'>2</td>
                            <td className='text-center'>Colher {"(sopa)"}</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr className="border-2 text-left">
                            <td className='p-2'>2</td>
                            <td className='text-center'>Óleo</td>
                            <td className='text-center'>2</td>
                            <td className='text-center'>Colher {"(sopa)"}</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr className="border-2 text-left">
                            <td className='p-2'>3</td>
                            <td className='text-center'>Óleo</td>
                            <td className='text-center'>2</td>
                            <td className='text-center'>Colher {"(sopa)"}</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr className="border-2 text-left">
                            <td className='p-2'>4</td>
                            <td className='text-center'>Óleo</td>
                            <td className='text-center'>2</td>
                            <td className='text-center'>Colher {"(sopa)"}</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr className="border-2 text-left">
                            <td className='p-2'>5</td>
                            <td className='text-center'>Óleo</td>
                            <td className='text-center'>2</td>
                            <td className='text-center'>Colher {"(sopa)"}</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr className="border-2 text-left">
                            <td className='p-2'>6</td>
                            <td className='text-center'>Óleo</td>
                            <td className='text-center'>2</td>
                            <td className='text-center'>Colher {"(sopa)"}</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr className="border-2 text-left">
                            <td className='p-2'>7</td>
                            <td className='text-center'>Óleo</td>
                            <td className='text-center'>2</td>
                            <td className='text-center'>Colher {"(sopa)"}</td>
                        </tr>
                    </tbody>
                </table>
                <div className='px-16 rounded-lg border-2 mt-12 p-6'>
                    <h2 className='text-lg font-semibold mb-4'>Modo de Preparo</h2>
                    <p>
                        Aqueça uma panela com o óleo, em fogo médio, e frite o alho até dourar. Adicione o arroz e frite por 3 minutos. Junte o açafrão, o pimentão, a cenoura, a ervilha e refogue rapidamente. Junte a água, sal e cozinhe com a panela semitampada até quase secar.
                        Tampe a panela, abaixe o fogo e cozinhe até a água secar completamente. Desligue, deixe amornar e misture com a mussarela e o tomate.
                        Despeje em um refratário, coloque colheradas do Catupiry sobre ele e leve ao forno médio, preaquecido por 10 minutos ou até gratinar.
                        Retire, decore com azeitona e sirva.
                    </p>
                </div>
            </div>
        </main>
    )
}

export default ReceitasModoPreparo