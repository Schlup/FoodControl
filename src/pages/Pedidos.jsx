import React from 'react'
import Nav from '../layout/Nav'

function Pedidos() {
    return (
        <main className='grid grid-cols-10'>
            <div>
                <Nav />
            </div>
            <div className='col-span-9'>
                Pedidos
            </div>
        </main>
    )
}

export default Pedidos