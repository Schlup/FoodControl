import React from 'react';
import Nav from '../layout/Nav';
import { Link } from 'react-router-dom';

function InventarioMovs() {
  return (
    <main className="grid grid-cols-10">
      <div>
        <Nav />
      </div>
      <div className="col-span-9 bg-slate-300 p-8">
        <header className="border-b-2 pb-6 flex items-center">
          <Link to="/inventario">
            <h1 className="text-3xl font-semibold">Inventário</h1>
          </Link>
          <span className="text-2xl font-semibold mx-2 pt-1">{'>'}</span>
          <h2 className="text-2xl pt-1">Movimentações</h2>
        </header>
        <table className="table-fixed mt-4 w-full">
          <thead>
            <tr className="border-2 text-left">
              <th className="text-tgrey p-2">Cod. Item</th>
              <th className="text-center">Descrição</th>
              <th className="text-center">Tipo</th>
              <th className="text-center">Qnt</th>
              <th className="text-center">U.M.</th>
              <th className="text-center">Preço Unitário</th>
              <th className="text-center">Tipo de Mov.</th>
              <th className="text-center">Data de Mov.</th>
              <th className="text-center">Motivo da Mov.</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-2 text-left">
              <td className="text-tgrey p-2">1</td>
              <td className="text-center">Abacaxi</td>
              <td className="text-center">Fruta</td>
              <td className="text-center">2</td>
              <td className="text-center">Kg</td>
              <td className="text-center">R$ 8,00</td>
              <td className="text-center">Saída</td>
              <td className="text-center">17/06/2024 - 14:12</td>
              <td className="text-center">Consumo</td>
            </tr>
            <tr className="border-2 text-left">
              <td className="text-tgrey p-2">1</td>
              <td className="text-center">Abacaxi</td>
              <td className="text-center">Fruta</td>
              <td className="text-center">8</td>
              <td className="text-center">Kg</td>
              <td className="text-center">R$ 8,00</td>
              <td className="text-center">Entrada</td>
              <td className="text-center">17/06/2024 - 13:34</td>
              <td className="text-center">Compra</td>
            </tr>
            <tr className="border-2 text-left">
              <td className="text-tgrey p-2">2</td>
              <td className="text-center">Banana</td>
              <td className="text-center">Fruta</td>
              <td className="text-center">10</td>
              <td className="text-center">Kg</td>
              <td className="text-center">R$ 9,00</td>
              <td className="text-center">Entrada</td>
              <td className="text-center">17/06/2024 - 11:42</td>
              <td className="text-center">Compra</td>
            </tr>
            <tr className="border-2 text-left">
              <td className="text-tgrey p-2">3</td>
              <td className="text-center">Maça</td>
              <td className="text-center">Fruta</td>
              <td className="text-center">12</td>
              <td className="text-center">Kg</td>
              <td className="text-center">R$ 4,30</td>
              <td className="text-center">Entrada</td>
              <td className="text-center">17/06/2024 - 10:30</td>
              <td className="text-center">Compra</td>
            </tr>
            <tr className="border-2 text-left">
              <td className="text-tgrey p-2">4</td>
              <td className="text-center">Uva</td>
              <td className="text-center">Fruta</td>
              <td className="text-center">34</td>
              <td className="text-center">Kg</td>
              <td className="text-center">R$ 12,00</td>
              <td className="text-center">Saída</td>
              <td className="text-center">17/06/2024 - 9:30</td>
              <td className="text-center">Consumo</td>
            </tr>
            <tr className="border-2 text-left">
              <td className="text-tgrey p-2">5</td>
              <td className="text-center">Açúcar</td>
              <td className="text-center">Industrializado</td>
              <td className="text-center">15</td>
              <td className="text-center">Kg</td>
              <td className="text-center">R$ 8,90</td>
              <td className="text-center">Saída</td>
              <td className="text-center">17/06/2024 - 9:30</td>
              <td className="text-center">Consumo</td>
            </tr>
            <tr className="border-2 text-left">
              <td className="text-tgrey p-2">6</td>
              <td className="text-center">Farinha</td>
              <td className="text-center">Industrializado</td>
              <td className="text-center">20</td>
              <td className="text-center">Kg</td>
              <td className="text-center">R$ 7,40</td>
              <td className="text-center">Saída</td>
              <td className="text-center">17/06/2024 - 9:30</td>
              <td className="text-center">Consumo</td>
            </tr>
            <tr className="border-2 text-left">
              <td className="text-tgrey p-2">8</td>
              <td className="text-center">Alcatra Bovina</td>
              <td className="text-center">Carne</td>
              <td className="text-center">23</td>
              <td className="text-center">Kg</td>
              <td className="text-center">R$ 23,00</td>
              <td className="text-center">Saída</td>
              <td className="text-center">17/06/2024 - 9:30</td>
              <td className="text-center">Consumo</td>
            </tr>
            <tr className="border-2 text-left">
              <td className="text-tgrey p-2">9</td>
              <td className="text-center">Filé Mignon</td>
              <td className="text-center">Carne</td>
              <td className="text-center">33</td>
              <td className="text-center">Kg</td>
              <td className="text-center">R$ 24,60</td>
              <td className="text-center">Saída</td>
              <td className="text-center">17/06/2024 - 9:30</td>
              <td className="text-center">Consumo</td>
            </tr>
            <tr className="border-2 text-left">
              <td className="text-tgrey p-2">10</td>
              <td className="text-center">Picanha Bovina</td>
              <td className="text-center">Carne</td>
              <td className="text-center">1</td>
              <td className="text-center">Kg</td>
              <td className="text-center">R$ 25,76</td>
              <td className="text-center">Saída</td>
              <td className="text-center">17/06/2024 - 9:30</td>
              <td className="text-center">Ajuste de Estoque</td>
            </tr>
            <tr className="border-2 text-left">
              <td className="text-tgrey p-2">11</td>
              <td className="text-center">Picanha Suína</td>
              <td className="text-center">Carne</td>
              <td className="text-center">18</td>
              <td className="text-center">Kg</td>
              <td className="text-center">R$ 20,13</td>
              <td className="text-center">Saída</td>
              <td className="text-center">17/06/2024 - 9:30</td>
              <td className="text-center">Consumo</td>
            </tr>
            <tr className="border-2 text-left">
              <td className="text-tgrey p-2">12</td>
              <td className="text-center">Alface</td>
              <td className="text-center">Verdura</td>
              <td className="text-center">5</td>
              <td className="text-center">Kg</td>
              <td className="text-center">R$ 6,00</td>
              <td className="text-center">Entrada</td>
              <td className="text-center">17/06/2024 - 8:35</td>
              <td className="text-center">Compra</td>
            </tr>
            <tr className="border-2 text-left">
              <td className="text-tgrey p-2">13</td>
              <td className="text-center">Cebola</td>
              <td className="text-center">Legume</td>
              <td className="text-center">3</td>
              <td className="text-center">Kg</td>
              <td className="text-center">R$ 7,50</td>
              <td className="text-center">Entrada</td>
              <td className="text-center">17/06/2024 - 8:30</td>
              <td className="text-center">Compra</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default InventarioMovs;
