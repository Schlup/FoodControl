import React from 'react'
import Nav from '../layout/Nav'

function Inicio() {
    return (
        <main className="grid grid-cols-10">
            <div>
                <Nav />
            </div>
            <div  className="col-span-9">
                Iniciouol
            </div>
        </main>
    )
}

export default Inicio