import React from 'react'
import Nav from '../layout/Nav'

function Pedido() {
    return (
        <main className="grid grid-cols-10">
            <div>
                <Nav />
            </div>
            <div className="col-span-9">
                Pedido
            </div>
        </main>
    )
}

export default Pedido