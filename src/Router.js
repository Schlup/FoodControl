import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Inicio from './pages/Inicio'
import Inventario from './pages/Inventario'
import Receitas from './pages/Receitas'
import Mesas from './pages/Mesas'
import Pedido from './pages/Pedido'
import InventarioMovs from './pages/InventarioMovs'
import ReceitasModoPreparo from './pages/ReceitasModoPreparo'
import Pedidos from './pages/Pedidos'
import AdicionarMesa from './pages/AdicionarMesa'

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/inventario" element={<Inventario />} />
                <Route path="/receitas" element={<Receitas />} />
                <Route path="/mesas" element={<Mesas />} />
                <Route path="/pedido" element={<Pedido />} />
                <Route path="/movimentacoes" element={<InventarioMovs />} />
                <Route path="/mododepreparo" element={<ReceitasModoPreparo />} />
                <Route path="/pedidos" element={<Pedidos />} />
                <Route path="/adicionarmesa" element={<AdicionarMesa />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router