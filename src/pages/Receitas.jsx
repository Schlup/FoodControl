import React from 'react'
import Nav from '../layout/Nav'

function Receitas() {
  return (
    <main className="grid grid-cols-10">
      <div>
        <Nav />
      </div>
      <div className="col-span-9">
        Receitas
      </div>
    </main>
  )
}

export default Receitas