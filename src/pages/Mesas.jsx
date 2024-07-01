import React from 'react'
import Nav from '../layout/Nav'
import { Link } from 'react-router-dom';
import { FaCheck } from "react-icons/fa";
import { LuClock } from "react-icons/lu";
import { IoMdLock } from "react-icons/io";
import { FaTriangleExclamation } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";

function Mesas() {
    return (
        <main className="grid grid-cols-10">
            <div>
                <Nav />
            </div>
            <div className="col-span-9 p-8">
                <header className="border-b-2 pb-4 flex justify-between">
                    <h1 className="text-3xl font-semibold">Mesas</h1>
                    <Link to="/adicionarmesa"><button className='bg-navred text-white p-2 px-4 rounded-lg text-xl'>Adicionar Mesa</button></Link>
                </header>
                <div className='flex flex-wrap gap-6 mt-4 w-full'>
                    <Link to="/pedido">
                        <div className='bg-grey w-80 h-60 rounded-lg'>
                            <h2 className='px-4 py-2 bg-confirmed text-white flex justify-between text-lg rounded-lg'>Mesa 001<FaCheck className='size-6' /></h2>
                            <p className='mx-4 font-semibold mt-2'>Capacidade: <span className='font-normal'>4 Pessoas</span></p>
                            <p className='mx-4 font-semibold mt-2'>Local: <span className='font-normal'>Salão</span></p>
                            <p className='mx-4 font-semibold mt-2'>Status: <span className='font-normal'>Disponível</span></p>
                            <p className='mx-4 font-semibold mt-2'>Tempo: <span className='font-normal'>5 Minutos</span></p>
                        </div>
                    </Link>

                    <div className='bg-grey w-80 h-60 rounded-lg'>
                        <h2 className='px-4 py-2 bg-waiting text-white flex justify-between text-lg rounded-lg'>Mesa 002<LuClock className='size-6' /></h2>
                        <p className='mx-4 font-semibold mt-2'>Capacidade: <span className='font-normal'>4 Pessoas</span></p>
                        <p className='mx-4 font-semibold mt-2'>Local: <span className='font-normal'>Salão</span></p>
                        <p className='mx-4 font-semibold mt-2'>Status: <span className='font-normal'>Indisponível</span></p>
                        <p className='mx-4 font-semibold mt-2'>Tempo: <span className='font-normal'>5 Minutos</span></p>
                        <p className='mx-4 font-semibold mt-2'>Valor: <span className='font-normal'>R$150,00</span></p>
                    </div>

                    <Link to="/pedido">
                        <div className='bg-grey w-80 h-60 rounded-lg'>
                            <h2 className='px-4 py-2 bg-navred text-white flex justify-between text-lg rounded-lg'>Mesa 003<IoMdLock className='size-6' /></h2>
                            <p className='mx-4 font-semibold mt-2'>Capacidade: <span className='font-normal'>4 Pessoas</span></p>
                            <p className='mx-4 font-semibold mt-2'>Local: <span className='font-normal'>Salão</span></p>
                            <p className='mx-4 font-semibold mt-2'>Status: <span className='font-normal'>Limpeza Necessária</span></p>
                            <p className='mx-4 font-semibold mt-2'>Tempo: <span className='font-normal'>3 Minutos</span></p>
                        </div>
                    </Link>
                    <Link to="/pedido">
                        <div className='bg-grey w-80 h-60 rounded-lg'>
                            <h2 className='px-4 py-2 bg-danger text-white flex justify-between text-lg rounded-lg'>Mesa 004<FaTriangleExclamation className='size-6' /></h2>
                            <p className='mx-4 font-semibold mt-2'>Capacidade: <span className='font-normal'>4 Pessoas</span></p>
                            <p className='mx-4 font-semibold mt-2'>Local: <span className='font-normal'>Salão</span></p>
                            <p className='mx-4 font-semibold mt-2'>Status: <span className='font-normal'>Manutenção</span></p>
                            <p className='mx-4 font-semibold mt-2'>Tempo: <span className='font-normal'>55 Minutos</span></p>
                        </div>
                    </Link>
                    <Link to="/pedido">
                        <div className='bg-grey w-80 h-60 rounded-lg'>
                            <h2 className='px-4 py-2 bg-blue text-white flex justify-between text-lg rounded-lg'>Mesa 005<IoPersonSharp className='size-6' /></h2>
                            <p className='mx-4 font-semibold mt-2'>Capacidade: <span className='font-normal'>4 Pessoas</span></p>
                            <p className='mx-4 font-semibold mt-2'>Local: <span className='font-normal'>Salão</span></p>
                            <p className='mx-4 font-semibold mt-2'>Status: <span className='font-normal'>Reservada</span></p>
                            <p className='mx-4 font-semibold mt-2'>Horário: <span className='font-normal'>13h35min</span></p>
                            <p className='mx-4 font-semibold mt-2'>Valor: <span className='font-normal'>R$125,00</span></p>
                        </div>
                    </Link>
                    <Link to="/pedido">
                        <div className='bg-grey w-80 h-60 rounded-lg'>
                            <h2 className='px-4 py-2 bg-confirmed text-white flex justify-between text-lg rounded-lg'>Mesa 006<FaCheck className='size-6' /></h2>
                            <p className='mx-4 font-semibold mt-2'>Capacidade: <span className='font-normal'>4 Pessoas</span></p>
                            <p className='mx-4 font-semibold mt-2'>Local: <span className='font-normal'>Salão</span></p>
                            <p className='mx-4 font-semibold mt-2'>Status: <span className='font-normal'>Disponível</span></p>
                            <p className='mx-4 font-semibold mt-2'>Tempo: <span className='font-normal'>5 Minutos</span></p>
                        </div>
                    </Link>
                    <Link to="/pedido">
                        <div className='bg-grey w-80 h-60 rounded-lg'>
                            <h2 className='px-4 py-2 bg-confirmed text-white flex justify-between text-lg rounded-lg'>Mesa 007<FaCheck className='size-6' /></h2>
                            <p className='mx-4 font-semibold mt-2'>Capacidade: <span className='font-normal'>4 Pessoas</span></p>
                            <p className='mx-4 font-semibold mt-2'>Local: <span className='font-normal'>Salão</span></p>
                            <p className='mx-4 font-semibold mt-2'>Status: <span className='font-normal'>Disponível</span></p>
                            <p className='mx-4 font-semibold mt-2'>Tempo: <span className='font-normal'>5 Minutos</span></p>
                        </div>
                    </Link>
                </div>
            </div>
        </main>
    )
}

export default Mesas