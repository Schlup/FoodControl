import React from 'react'
import Nav from '../layout/Nav'

function Inicio() {
    return (
        <main className="grid grid-cols-10">
            <div>
                <Nav />
            </div>
            <div className="col-span-9 bg-inicio bg-no-repeat bg-center bg-cover">
                <div className='text-white w-full h-screen flex justify-center items-center'>

                    <div className='p-2 w-1/2'>
                        <h1 className="text-6xl font-semibold">Food Control</h1>
                        <p className='text-2xl mb-10'>O seu sistema para gestão de restauantes</p>

                        <div className='flex flex-wrap gap-10'>
                            <div className='p-4 border-solid border-2 border-grey rounded-lg w-80 text-4xl'>
                                <h2>Tranquilidade na gestão do seu restaurante</h2>
                            </div>
                            <div className='p-4 border-solid border-2 border-grey rounded-lg w-80 text-4xl'>
                                <h2>Controle total do inventário</h2>
                            </div>
                            <div className='p-4 border-solid border-2 border-grey rounded-lg w-80 text-4xl'>
                                <h2>Realizar um pedido nunca foi tão fácil</h2>
                            </div>
                            <div className='p-4 border-solid border-2 border-grey rounded-lg w-80 text-4xl'>
                                <h2>Controle para ordem de realização de pedidos</h2>
                            </div>
                            <div className='p-4 border-solid border-2 border-grey rounded-lg w-80 text-4xl'>
                                <h2>Facilidade na criação de receitas</h2>
                            </div>
                            <div className='p-4 border-solid border-2 border-grey rounded-lg w-80 text-4xl'>
                                <h2>Controle de gerenciamento de mesas</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Inicio