import React from 'react';
import Nav from '../layout/Nav';
import { Link } from 'react-router-dom';

function MesasNovaMesa() {
  return (
    <main className="grid grid-cols-10">
      <div>
        <Nav />
      </div>
      <div className="col-span-9 p-8">
        <header className="border-b-2 pb-6 flex">
          <Link to="/mesas">
            <h1 className="text-3xl font-semibold">Mesas</h1>
          </Link>
          <span className="text-2xl font-semibold mx-2 pt-1">{'>'}</span>
          <h2 className="text-2xl pt-1">Nova Mesa</h2>
        </header>
        <div>
          <form action=""></form>
        </div>
      </div>
    </main>
  );
}

export default MesasNovaMesa;
