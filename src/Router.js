import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Inicio from './pages/Inicio'
import Inventario from './pages/Inventario'
import Receitas from './pages/Receitas'
import Mesas from './pages/Mesas'
import InventarioMovs from './pages/InventarioMovs'
import ReceitasModoPreparo from './pages/ReceitasModoPreparo'
import Pedidos from './pages/Pedidos'
import MesasNovaMesa from './pages/MesasNovaMesa'
import PedidosCodPed from './pages/PedidosCodPed'
import MesasNovoPedido from './pages/MesasNovoPedido'

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/inventario" element={<Inventario />} />
                <Route path="/movimentacoes" element={<InventarioMovs />} />
                <Route path="/pedidos" element={<Pedidos />} />
                <Route path="/pedidosCodPed" element={<PedidosCodPed />} />
                <Route path="/receitas" element={<Receitas />} />
                <Route path="/mododepreparo" element={<ReceitasModoPreparo />} />
                <Route path="/mesas" element={<Mesas />} />
                <Route path="/novaMesa" element={<MesasNovaMesa />} />
                <Route path="/novoPedido" element={<MesasNovoPedido />} />  
            </Routes>
        </BrowserRouter>
    )
}

export default Router