import React from 'react'
import Nav from '../layout/Nav'

function Mesas() {
    return (
        <main className="grid grid-cols-10">
            <div>
                <Nav />
            </div>
            <div className="col-span-9">
                Mesas
            </div>
        </main>
    )
}

export default Mesas