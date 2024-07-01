import React from 'react';
import Nav from '../layout/Nav';
import MovimentacoesBotao from '../layout/MovimentacoesBotao';

function Inventario() {
  return (
    <main className="grid grid-cols-10">
      <div>
        <Nav />
      </div>
      <div className="col-span-9 bg-slate-300 p-8">
        <header className="border-b-2 pb-4 flex justify-between">
          <h1 className="text-3xl font-semibold">Inventário</h1>
          <MovimentacoesBotao />
        </header>
        <table className="table-fixed mt-4 w-full">
          <thead>
            <tr className="border-2 text-left">
              <th className="text-tgrey p-2">Item</th>
              <th className="text-center">Descrição</th>
              <th className="text-center">Tipo</th>
              <th className="text-center">Quantidade Total</th>
              <th className="text-center">U.M.</th>
              <th className="text-center">Preço Unitário</th>
              <th className="text-center">Marca</th>
              <th className="text-center">Fornecedor</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-2 text-left">
              <td className="text-tgrey p-2">1</td>
              <td className="text-center">Abacaxi</td>
              <td className="text-center">Fruta</td>
              <td className="text-center">6</td>
              <td className="text-center">Kg</td>
              <td className="text-center">R$ 8,00</td>
              <td className="text-center">-</td>
              <td className="text-center">
                SLF Comércio de Frutas e Verduras LTDA
              </td>
            </tr>
            <tr className="border-2 text-left">
              <td className="text-tgrey p-2">2</td>
              <td className="text-center">Banana</td>
              <td className="text-center">Fruta</td>
              <td className="text-center">10</td>
              <td className="text-center">Kg</td>
              <td className="text-center">R$ 9,00</td>
              <td className="text-center">-</td>
              <td className="text-center">
                SLF Comércio de Frutas e Verduras LTDA
              </td>
            </tr>
            <tr className="border-2 text-left">
              <td className="text-tgrey p-2">3</td>
              <td className="text-center">Maçã</td>
              <td className="text-center">Fruta</td>
              <td className="text-center">12</td>
              <td className="text-center">Kg</td>
              <td className="text-center">R$ 4,30</td>
              <td className="text-center">-</td>
              <td className="text-center">
                SLF Comércio de Frutas e Verduras LTDA
              </td>
            </tr>
            <tr className="border-2 text-left">
              <td className="text-tgrey p-2">4</td>
              <td className="text-center">Uva</td>
              <td className="text-center">Fruta</td>
              <td className="text-center">34</td>
              <td className="text-center">Kg</td>
              <td className="text-center">R$ 12,00</td>
              <td className="text-center">-</td>
              <td className="text-center">
                SLF Comércio de Frutas e Verduras LTDA
              </td>
            </tr>
            <tr className="border-2 text-left">
              <td className="text-tgrey p-2">5</td>
              <td className="text-center">Açúcar</td>
              <td className="text-center">Industrializado</td>
              <td className="text-center">15</td>
              <td className="text-center">Kg</td>
              <td className="text-center">R$ 8,90</td>
              <td className="text-center">União</td>
              <td className="text-center">Cescom Cesconeto Comercial LTDA</td>
            </tr>
            <tr className="border-2 text-left">
              <td className="text-tgrey p-2">6</td>
              <td className="text-center">Farinha de Trigo</td>
              <td className="text-center">Industrializado</td>
              <td className="text-center">20</td>
              <td className="text-center">Kg</td>
              <td className="text-center">R$ 7,40</td>
              <td className="text-center">Dona Benta</td>
              <td className="text-center">
                Fama Distribuicao e Logistica LTDA
              </td>
            </tr>
            <tr className="border-2 text-left">
              <td className="text-tgrey p-2">7</td>
              <td className="text-center">Fermento</td>
              <td className="text-center">Industrializado</td>
              <td className="text-center">1</td>
              <td className="text-center">Kg</td>
              <td className="text-center">R$ 14,30</td>
              <td className="text-center">Dr Oetker</td>
              <td className="text-center">
                Cardeal Distribuidora de Alimentos LTDA
              </td>
            </tr>
            <tr className="border-2 text-left">
              <td className="text-tgrey p-2">8</td>
              <td className="text-center">Alcatra Bovina</td>
              <td className="text-center">Carne</td>
              <td className="text-center">23</td>
              <td className="text-center">Kg</td>
              <td className="text-center">R$ 23,00</td>
              <td className="text-center">-</td>
              <td className="text-center">Segalas Alimentos LTDA</td>
            </tr>
            <tr className="border-2 text-left">
              <td className="text-tgrey p-2">9</td>
              <td className="text-center">Filé Mignon</td>
              <td className="text-center">Carne</td>
              <td className="text-center">33</td>
              <td className="text-center">Kg</td>
              <td className="text-center">R$ 24,60</td>
              <td className="text-center">-</td>
              <td className="text-center">Segalas Alimentos LTDA</td>
            </tr>
            <tr className="border-2 text-left">
              <td className="text-tgrey p-2">10</td>
              <td className="text-center">Picanha Bovina</td>
              <td className="text-center">Carne</td>
              <td className="text-center">7</td>
              <td className="text-center">Kg</td>
              <td className="text-center">R$ 25,76</td>
              <td className="text-center">-</td>
              <td className="text-center">Segalas Alimentos LTDA</td>
            </tr>
            <tr className="border-2 text-left">
              <td className="text-tgrey p-2">11</td>
              <td className="text-center">Picanha Suína</td>
              <td className="text-center">Carne</td>
              <td className="text-center">18</td>
              <td className="text-center">Kg</td>
              <td className="text-center">R$ 20,13</td>
              <td className="text-center">-</td>
              <td className="text-center">Segalas Alimentos LTDA</td>
            </tr>
            <tr className="border-2 text-left">
              <td className="text-tgrey p-2">12</td>
              <td className="text-center">Alface</td>
              <td className="text-center">Verdura</td>
              <td className="text-center">5</td>
              <td className="text-center">Kg</td>
              <td className="text-center">R$ 6,00</td>
              <td className="text-center">-</td>
              <td className="text-center">
                SLF Comércio de Frutas e Verduras LTDA
              </td>
            </tr>
            <tr className="border-2 text-left">
              <td className="text-tgrey p-2">13</td>
              <td className="text-center">Couve-Flor</td>
              <td className="text-center">Verdura</td>
              <td className="text-center">3</td>
              <td className="text-center">Kg</td>
              <td className="text-center">R$ 7,50</td>
              <td className="text-center">-</td>
              <td className="text-center">
                SLF Comércio de Frutas e Verduras LTDA
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default Inventario;
