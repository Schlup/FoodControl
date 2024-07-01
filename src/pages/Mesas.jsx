import React from 'react'
import Nav from '../layout/Nav'
import { Link } from 'react-router-dom';
import NovaMesaBotao from '../layout/NovaMesaBotao';
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
                    <Link to="/novamesa">
                        <NovaMesaBotao />
                    </Link>
                </header>
                <div className='flex flex-wrap gap-6 mt-4 w-full'>
                    <Link to="/novoPedido">
                        <div className='bg-grey w-80 h-60 rounded-lg'>
                            <h2 className='px-4 py-2 bg-confirmed text-white flex justify-between text-lg rounded-lg'>Mesa 001<FaCheck className='size-6' /></h2>
                            <p className='mx-4 font-semibold mt-2'>Capacidade: <span className='font-normal'>4 Pessoas</span></p>
                            <p className='mx-4 font-semibold mt-2'>Local: <span className='font-normal'>Salão</span></p>
                            <p className='mx-4 font-semibold mt-2'>Status: <span className='font-normal'>Disponível</span></p>
                            <p className='mx-4 font-semibold mt-2'>Tempo: <span className='font-normal'>5 min</span></p>
                        </div>
                    </Link>
                    <div className='bg-grey w-80 h-60 rounded-lg'>
                        <h2 className='px-4 py-2 bg-waiting text-white flex justify-between text-lg rounded-lg'>Mesa 002<LuClock className='size-6' /></h2>
                        <p className='mx-4 font-semibold mt-2'>Capacidade: <span className='font-normal'>4 Pessoas</span></p>
                        <p className='mx-4 font-semibold mt-2'>Local: <span className='font-normal'>Salão</span></p>
                        <p className='mx-4 font-semibold mt-2'>Status: <span className='font-normal'>Indisponível</span></p>
                        <p className='mx-4 font-semibold mt-2'>Tempo: <span className='font-normal'>15 min</span></p>
                        <p className='mx-4 font-semibold mt-2'>Valor: <span className='font-normal'>R$48,62</span></p>
                    </div>
                    <div className='bg-grey w-80 h-60 rounded-lg'>
                        <h2 className='px-4 py-2 bg-navred text-white flex justify-between text-lg rounded-lg'>Mesa 003<IoMdLock className='size-6' /></h2>
                        <p className='mx-4 font-semibold mt-2'>Capacidade: <span className='font-normal'>4 Pessoas</span></p>
                        <p className='mx-4 font-semibold mt-2'>Local: <span className='font-normal'>Salão</span></p>
                        <p className='mx-4 font-semibold mt-2'>Status: <span className='font-normal'>Limpeza Necessária</span></p>
                        <p className='mx-4 font-semibold mt-2'>Tempo: <span className='font-normal'>3 min</span></p>
                    </div>
                    <div className='bg-grey w-80 h-60 rounded-lg'>
                        <h2 className='px-4 py-2 bg-danger text-white flex justify-between text-lg rounded-lg'>Mesa 004<FaTriangleExclamation className='size-6' /></h2>
                        <p className='mx-4 font-semibold mt-2'>Capacidade: <span className='font-normal'>4 Pessoas</span></p>
                        <p className='mx-4 font-semibold mt-2'>Local: <span className='font-normal'>Salão</span></p>
                        <p className='mx-4 font-semibold mt-2'>Status: <span className='font-normal'>Manutenção</span></p>
                        <p className='mx-4 font-semibold mt-2'>Tempo: <span className='font-normal'>55 min</span></p>
                    </div>
                    <div className='bg-grey w-80 h-60 rounded-lg'>
                        <h2 className='px-4 py-2 bg-waiting text-white flex justify-between text-lg rounded-lg'>Mesa 005<LuClock className='size-6' /></h2>
                        <p className='mx-4 font-semibold mt-2'>Capacidade: <span className='font-normal'>4 Pessoas</span></p>
                        <p className='mx-4 font-semibold mt-2'>Local: <span className='font-normal'>Salão</span></p>
                        <p className='mx-4 font-semibold mt-2'>Status: <span className='font-normal'>Indisponível</span></p>
                        <p className='mx-4 font-semibold mt-2'>Tempo: <span className='font-normal'>3 min</span></p>
                        <p className='mx-4 font-semibold mt-2'>Valor: <span className='font-normal'>R$34,79</span></p>
                    </div>
                    <div className='bg-grey w-80 h-60 rounded-lg'>
                        <h2 className='px-4 py-2 bg-waiting text-white flex justify-between text-lg rounded-lg'>Mesa 006<LuClock className='size-6' /></h2>
                        <p className='mx-4 font-semibold mt-2'>Capacidade: <span className='font-normal'>6 Pessoas</span></p>
                        <p className='mx-4 font-semibold mt-2'>Local: <span className='font-normal'>Salão</span></p>
                        <p className='mx-4 font-semibold mt-2'>Status: <span className='font-normal'>Indisponível</span></p>
                        <p className='mx-4 font-semibold mt-2'>Tempo: <span className='font-normal'>7 min</span></p>
                        <p className='mx-4 font-semibold mt-2'>Valor: <span className='font-normal'>R$145,50</span></p>
                    </div>
                    <Link to="/novoPedido">
                        <div className='bg-grey w-80 h-60 rounded-lg'>
                            <h2 className='px-4 py-2 bg-confirmed text-white flex justify-between text-lg rounded-lg'>Mesa 007<FaCheck className='size-6' /></h2>
                            <p className='mx-4 font-semibold mt-2'>Capacidade: <span className='font-normal'>4 Pessoas</span></p>
                            <p className='mx-4 font-semibold mt-2'>Local: <span className='font-normal'>Salão</span></p>
                            <p className='mx-4 font-semibold mt-2'>Status: <span className='font-normal'>Disponível</span></p>
                            <p className='mx-4 font-semibold mt-2'>Tempo: <span className='font-normal'>3 min</span></p>
                        </div>
                    </Link>
                    <div className='bg-grey w-80 h-60 rounded-lg'>
                        <h2 className='px-4 py-2 bg-navred text-white flex justify-between text-lg rounded-lg'>Mesa 008<IoMdLock className='size-6' /></h2>
                        <p className='mx-4 font-semibold mt-2'>Capacidade: <span className='font-normal'>4 Pessoas</span></p>
                        <p className='mx-4 font-semibold mt-2'>Local: <span className='font-normal'>Salão</span></p>
                        <p className='mx-4 font-semibold mt-2'>Status: <span className='font-normal'>Limpeza Necessária</span></p>
                        <p className='mx-4 font-semibold mt-2'>Tempo: <span className='font-normal'>2 min</span></p>
                    </div>
                    <div className='bg-grey w-80 h-60 rounded-lg'>
                        <h2 className='px-4 py-2 bg-navred text-white flex justify-between text-lg rounded-lg'>Mesa 009<IoMdLock className='size-6' /></h2>
                        <p className='mx-4 font-semibold mt-2'>Capacidade: <span className='font-normal'>4 Pessoas</span></p>
                        <p className='mx-4 font-semibold mt-2'>Local: <span className='font-normal'>Salão</span></p>
                        <p className='mx-4 font-semibold mt-2'>Status: <span className='font-normal'>Limpeza Necessária</span></p>
                        <p className='mx-4 font-semibold mt-2'>Tempo: <span className='font-normal'>5 min</span></p>
                        </div>
                    <Link to="/novoPedido">
                        <div className='bg-grey w-80 h-60 rounded-lg'>
                            <h2 className='px-4 py-2 bg-confirmed text-white flex justify-between text-lg rounded-lg'>Mesa 010<FaCheck className='size-6' /></h2>
                            <p className='mx-4 font-semibold mt-2'>Capacidade: <span className='font-normal'>4 Pessoas</span></p>
                            <p className='mx-4 font-semibold mt-2'>Local: <span className='font-normal'>Salão</span></p>
                            <p className='mx-4 font-semibold mt-2'>Status: <span className='font-normal'>Disponível</span></p>
                            <p className='mx-4 font-semibold mt-2'>Tempo: <span className='font-normal'>9 min</span></p>
                        </div>
                    </Link>
                    <div className='bg-grey w-80 h-60 rounded-lg'>
                        <h2 className='px-4 py-2 bg-waiting text-white flex justify-between text-lg rounded-lg'>Mesa 011<LuClock className='size-6' /></h2>
                        <p className='mx-4 font-semibold mt-2'>Capacidade: <span className='font-normal'>4 Pessoas</span></p>
                        <p className='mx-4 font-semibold mt-2'>Local: <span className='font-normal'>Salão</span></p>
                        <p className='mx-4 font-semibold mt-2'>Status: <span className='font-normal'>Indisponível</span></p>
                        <p className='mx-4 font-semibold mt-2'>Tempo: <span className='font-normal'>10 min</span></p>
                        <p className='mx-4 font-semibold mt-2'>Valor: <span className='font-normal'>R$13,54</span></p>
                    </div>
                    <div className='bg-grey w-80 h-60 rounded-lg'>
                        <h2 className='px-4 py-2 bg-blue text-white flex justify-between text-lg rounded-lg'>Mesa 012<IoPersonSharp className='size-6' /></h2>
                        <p className='mx-4 font-semibold mt-2'>Capacidade: <span className='font-normal'>4 Pessoas</span></p>
                        <p className='mx-4 font-semibold mt-2'>Local: <span className='font-normal'>Salão</span></p>
                        <p className='mx-4 font-semibold mt-2'>Status: <span className='font-normal'>Reservada</span></p>
                        <p className='mx-4 font-semibold mt-2'>Horário: <span className='font-normal'>13 H 35 min</span></p>
                        <p className='mx-4 font-semibold mt-2'>Valor: <span className='font-normal'>R$125,00</span></p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Mesas