import React from 'react'
import Nav from '../layout/Nav'

function Inventario() {
    return (
        <main className="grid grid-cols-10">
            <div>
                <Nav />
            </div>
            <div className="col-span-9">
                Inventario
            </div>
        </main>
    )
}

export default Inventario